import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY');
  }
  return new Resend(apiKey);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const resend = getResend();

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'arqummalik1@gmail.com',
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a;">New Contact Form Submission</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 80px;">Name:</td>
              <td style="padding: 8px 0; color: #1a1a1a; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Subject:</td>
              <td style="padding: 8px 0; color: #1a1a1a;">${subject}</td>
            </tr>
          </table>
          
          <div style="margin-top: 24px; padding: 16px; background: #f9f9f9; border-radius: 8px;">
            <p style="margin: 0; color: #1a1a1a; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}