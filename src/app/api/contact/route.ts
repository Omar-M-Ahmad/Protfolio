import { NextResponse } from 'next/server';

import { sendContactEmail } from '@/lib/email/send-contact-email';
import { validateContactPayload } from '@/lib/validation/contact';

export async function POST(request: Request) {
  try {
    const rawBody = await request.json();
    const validation = validateContactPayload(rawBody);

    if (!validation.ok) {
      return NextResponse.json(
        {
          success: false,
          code: 'validation_error',
          errors: validation.errors,
        },
        { status: 400 },
      );
    }

    // Honeypot field to reduce basic spam submissions.
    if (validation.data.company) {
      return NextResponse.json({ success: true });
    }

    const result = await sendContactEmail(validation.data);

    if (!result.ok) {
      return NextResponse.json(
        {
          success: false,
          code: result.code,
        },
        { status: result.code === 'email_not_configured' ? 503 : 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      {
        success: false,
        code: 'invalid_request',
      },
      { status: 400 },
    );
  }
}
