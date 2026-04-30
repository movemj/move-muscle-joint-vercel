import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Get environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;

    if (!resendApiKey || !contactToEmail) {
      console.error('Missing required environment variables: RESEND_API_KEY or CONTACT_TO_EMAIL');
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);

    // Send email via Resend
    const response = await resend.emails.send({
      from: 'Move Muscle & Joint <noreply@movemuscleandjoint.com>',
      to: [contactToEmail],
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0; padding: 20px; background-color: #f9f9f9; }
    .header { background-color: #2563eb; color: white; padding: 20px; margin-bottom: 20px; border-radius: 4px; }
    .content { background-color: white; padding: 20px; border-radius: 4px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #2563eb; margin-bottom: 5px; }
    .value { color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value">${email}</div>
      </div>
      <div class="field">
        <div class="label">Phone</div>
        <div class="value">${phone || 'Not provided'}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="value">${message}</div>
      </div>
    </div>
  </div>
</body>
</html>
      `,
    });

    if (!response.data?.id) {
      console.error('Failed to send email via Resend:', response.error);
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
