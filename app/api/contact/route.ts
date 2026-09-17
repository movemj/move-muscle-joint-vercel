import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const CONTACT_LIMIT = 5;
const CONTACT_WINDOW_SECONDS = 60 * 60;

function getClientIp(request: NextRequest) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';
}

async function checkRateLimit(request: NextRequest) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    console.error('Contact rate limiting is unavailable: missing Upstash configuration');
    return true;
  }

  try {
    const redis = new Redis({ url, token });
    const key = `contact-form:${getClientIp(request)}`;
    const count = await redis.incr(key);

    if (count === 1) {
      await redis.expire(key, CONTACT_WINDOW_SECONDS);
    }

    return count <= CONTACT_LIMIT;
  } catch (error) {
    console.error('Contact rate limiting is unavailable:', error);
    return true;
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

const marketingPattern = /\b(backlinks?|guest\s+posts?|seo\s+services?|marketing\s+agenc(y|ies)|buy\s+traffic|paid\s+promotion|press\s+release)\b/i;

export async function POST(request: NextRequest) {
  try {
    if (!(await checkRateLimit(request))) {
      return NextResponse.json(
        { error: 'Unable to process your request right now. Please try again later.' },
        { status: 429 },
      );
    }

    const body = await request.json();
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';
    const website = typeof body.website === 'string' ? body.website.trim() : '';

    // Silently accept honeypot submissions so bots cannot learn that they were detected.
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (
      name.length < 2 || name.length > 100 ||
      email.length > 254 || message.length < 10 || message.length > 4000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json({ error: 'Invalid form submission' }, { status: 400 });
    }

    const urlCount = (message.match(/https?:\/\//gi) || []).length;
    if (marketingPattern.test(message) || urlCount >= 3) {
      return NextResponse.json({ success: true });
    }

    // Get environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;

    if (!resendApiKey || !contactToEmail) {
      console.error('Missing required environment variables: RESEND_API_KEY or CONTACT_TO_EMAIL');
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || 'Not provided');
    const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');

    // Send email via Resend
    const response = await resend.emails.send({
      from: 'Move Muscle & Joint <hello@movemj.com>',
      to: [contactToEmail],
      replyTo: email,
      subject: `New contact form submission from ${safeName}`,
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
        <div class="value">${safeName}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value">${safeEmail}</div>
      </div>
      <div class="field">
        <div class="label">Phone</div>
        <div class="value">${safePhone}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="value">${safeMessage}</div>
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
