import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_j5g1WtaS_2MrLQHVQqYURHoQJyUATMczZ');

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }
 // 1. Send email to site owner
const htmlBody = `
  <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 40px 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); overflow: hidden;">
      
      <!-- Header with Logo -->
      <div style="background-color: #002813; padding: 24px 32px; text-align: center;">
        <div style="display: inline-block; background-color: #ffffff; padding: 8px; border-radius: 8px;">
          <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/104455417/446529944-2f89f308-b252-466d-9525-f868b14fb50a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250522%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250522T105703Z&X-Amz-Expires=300&X-Amz-Signature=0817285ed20704185156705e73a1b8a1c7c0e06894951a741300c5dbc0d5af17&X-Amz-SignedHeaders=host" alt="Afrindependent Logo" style="height: 60px; max-width: 100%;" />
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

  

    const sendToAdmin = await resend.emails.send({
      from: "Afrindependent Contact <noreply@afrindependent.org>",
      to: ['hello@afrindependent.org'],
      subject: `New Contact Message from ${firstName} ${lastName}`,
      replyTo: email,
      html: htmlBody,
    });

    if (sendToAdmin.error) {
      console.error('Error sending to admin:', sendToAdmin.error);
      return NextResponse.json({ error: 'Failed to notify admin.' }, { status: 500 });
    }

    // 2. Send automatic reply to sender
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

    const sendAutoReply = await resend.emails.send({
      from: "Afrindependent Contact <noreply@afrindependent.org>",
      to: [email],
      subject: 'Thank You for Contacting the Afrindependent Institute',
      html: autoReplyHtml,
    });

    if (sendAutoReply.error) {
      console.error('Error sending auto-reply:', sendAutoReply.error);
      return NextResponse.json({ error: 'Failed to send auto-reply.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
