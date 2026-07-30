import { NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";



export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }
  
    const htmlBody = `
  <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 40px 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); overflow: hidden;">
      
      <!-- Header with Logo -->
      <div style="background-color: #002813; padding: 24px 32px; text-align: center;">
        <div style="display: inline-block; background-color: #ffffff; padding: 8px; border-radius: 8px;">
          <img src="https://www.afrindependent.org/_next/image?url=%2FAfridependen_2.png&w=256&q=75" alt="Afrindependent Logo" style="height: 60px; max-width: 100%;" />
        </div>
        <h2 style="color: #ffd700; margin: 12px 0 0; font-size: 20px;">New Contact Form Submission</h2>
      </div>

      <!-- Body Content -->
      <div style="padding: 24px 32px; color: #002813;">
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #006400;">${email}</a></p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f9f9f9; padding: 16px; border-left: 4px solid #002813; white-space: pre-line; border-radius: 4px;">
          ${message}
        </div>
      </div>

      <!-- Footer -->
      <div style="padding: 20px 32px; background-color: #fafafa; text-align: center; color: #999; font-size: 12px;">
        Afrindependent Institute · hello@afrindependent.org<br/>
        www.afrindependent.org
      </div>

    </div>
  </div>
`;
    const autoReplyHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <p>Dear ${firstName},</p>
        <p>
          Thank you for reaching out to the Afrindependent Institute. Your message has been received and will be reviewed by our team.
        </p>
        <p>
          If your inquiry requires a response, we will get back to you as soon as possible. We appreciate your interest in our work to advance African intellectual and economic sovereignty grounded in truth, liberty, justice, and sound money.
        </p>
        <p>
          In the meantime, feel free to explore our latest publications and videos:
        </p>
        <ul>
          <li><a href="https://www.afrindependent.org/publications" target="_blank">Explore our Publications page</a></li>
          <li><a href="https://www.afrindependent.org/videos" target="_blank">Watch Our Videos</a></li>
        </ul>
        <br/>
        <p>With appreciation,</p>
        <p>
          Afrindependent Institute Team<br/>
          hello@afrindependent.org<br/>
          <strong>HOME OF AFRICONOMICS</strong><br/>
          <a href="https://www.afrindependent.org">www.afrindependent.org</a>
        </p>
      </div>
    `;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const adminMailOptions = {
      from: `"Afrindependent Contact" <${process.env.EMAIL_USER}>`,
      to: "hello@afrindependent.org", 
      replyTo: email,
      subject: `New Contact Message from ${firstName} ${lastName}`,
      html: htmlBody,
    };

    const userAutoResponderOptions = {
      from: `"Afrindependent Contact" <${process.env.EMAIL_USER}>`,
      to: email,
      subject:
        "We received your message! Thank You for Contacting the Afrindependent Institute",
      html: autoReplyHtml,
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userAutoResponderOptions),
    ]);

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 },
    );
  } catch (err) {
    console.error("Error sending emails:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
