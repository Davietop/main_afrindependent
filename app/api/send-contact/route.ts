import { EmailTemplate } from '@/components/ui/email-template';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(`re_Qb9fDY1a_WtwbmmSEo6QfD8b8fx8f8k8R`);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'David <oyatoyedavid@gmail.com>',
      to: ['oyatoyedavid@mail.com'],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    });


    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
