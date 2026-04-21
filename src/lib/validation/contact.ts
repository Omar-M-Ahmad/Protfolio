import type { ContactSubmission } from '@/lib/email/send-contact-email';

export type ValidationErrors = Partial<Record<'name' | 'email' | 'message', 'required' | 'short' | 'invalid'>>;

export type ValidationResult =
  | {
      ok: true;
      data: ContactSubmission;
    }
  | {
      ok: false;
      errors: ValidationErrors;
    };

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateContactPayload(raw: unknown): ValidationResult {
  const payload = (raw ?? {}) as Partial<ContactSubmission>;

  const data: ContactSubmission = {
    name: payload.name?.trim() ?? '',
    email: payload.email?.trim() ?? '',
    message: payload.message?.trim() ?? '',
    locale: payload.locale?.trim() ?? 'en',
    company: payload.company?.trim() ?? '',
  };

  const errors: ValidationErrors = {};

  if (!data.name) {
    errors.name = 'required';
  } else if (data.name.length < 2) {
    errors.name = 'short';
  }

  if (!data.email) {
    errors.email = 'required';
  } else if (!isEmail(data.email)) {
    errors.email = 'invalid';
  }

  if (!data.message) {
    errors.message = 'required';
  } else if (data.message.length < 10) {
    errors.message = 'short';
  }

  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      errors,
    };
  }

  return {
    ok: true,
    data,
  };
}
