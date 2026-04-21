import { siteConfig } from '@/content/site';

const RESEND_ENDPOINT = 'https://api.resend.com/emails';

export type ContactSubmission = {
  name: string;
  email: string;
  message: string;
  locale: string;
  company?: string;
};

type SendResult =
  | { ok: true }
  | { ok: false; code: 'email_not_configured' | 'provider_error' };

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildHtmlEmail(payload: ContactSubmission): string {
  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safeMessage = escapeHtml(payload.message).replaceAll('\n', '<br />');
  const safeLocale = escapeHtml(payload.locale || 'en');

  return `
    <div style="font-family: Inter, Arial, sans-serif; line-height: 1.7; color: #111827;">
      <h2 style="margin: 0 0 16px;">New portfolio contact message</h2>
      <p style="margin: 0 0 8px;"><strong>Name:</strong> ${safeName}</p>
      <p style="margin: 0 0 8px;"><strong>Email:</strong> ${safeEmail}</p>
      <p style="margin: 0 0 16px;"><strong>Locale:</strong> ${safeLocale}</p>
      <div style="padding: 16px; border: 1px solid #e5e7eb; border-radius: 12px; background: #f9fafb;">
        ${safeMessage}
      </div>
    </div>
  `.trim();
}

function buildTextEmail(payload: ContactSubmission): string {
  return [
    'New portfolio contact message',
    '',
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Locale: ${payload.locale || 'en'}`,
    '',
    payload.message,
  ].join('\n');
}

export async function sendContactEmail(payload: ContactSubmission): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL ?? 'Portfolio Contact <onboarding@resend.dev>';
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.publicEmail;

  if (!apiKey || !from || !to) {
    return { ok: false, code: 'email_not_configured' };
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Portfolio Contact — ${payload.name}`,
      reply_to: [payload.email],
      html: buildHtmlEmail(payload),
      text: buildTextEmail(payload),
    }),
  });

  if (!response.ok) {
    return { ok: false, code: 'provider_error' };
  }

  return { ok: true };
}
