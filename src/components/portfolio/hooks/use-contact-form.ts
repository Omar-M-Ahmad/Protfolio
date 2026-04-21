'use client';

import { useCallback, useMemo, useState } from 'react';

import type { ContactMessages } from '@/types/portfolio';

export type ContactFormState = {
  name: string;
  email: string;
  message: string;
  company: string;
};

export type ContactFormErrors = Partial<Record<'name' | 'email' | 'message', string>>;

const INITIAL_FORM_STATE: ContactFormState = {
  name: '',
  email: '',
  message: '',
  company: '',
};

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildMailtoUrl(recipientEmail: string, values: ContactFormState): string {
  const subject = encodeURIComponent(`Portfolio Contact — ${values.name}`);
  const body = encodeURIComponent([
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    '',
    values.message,
  ].join('\n'));

  return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
}

export function useContactForm(locale: string, recipientEmail: string, messages: ContactMessages) {
  const [values, setValues] = useState<ContactFormState>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [failureMessage, setFailureMessage] = useState('');

  const validate = useCallback(
    (state: ContactFormState): ContactFormErrors => {
      const nextErrors: ContactFormErrors = {};

      if (!state.name.trim()) {
        nextErrors.name = messages.nameRequired;
      } else if (state.name.trim().length < 2) {
        nextErrors.name = messages.nameShort;
      }

      if (!state.email.trim()) {
        nextErrors.email = messages.emailRequired;
      } else if (!isEmail(state.email.trim())) {
        nextErrors.email = messages.emailInvalid;
      }

      if (!state.message.trim()) {
        nextErrors.message = messages.messageRequired;
      } else if (state.message.trim().length < 10) {
        nextErrors.message = messages.messageShort;
      }

      return nextErrors;
    },
    [messages],
  );

  const updateField = useCallback(
    (field: keyof ContactFormState, value: string) => {
      setValues((current: ContactFormState) => ({ ...current, [field]: value }));
      if (field !== 'company') {
        setErrors((current: ContactFormErrors) => ({ ...current, [field]: undefined }));
      }
      setSuccessMessage('');
      setFailureMessage('');
    },
    [],
  );

  const validateField = useCallback(
    (field: keyof Pick<ContactFormState, 'name' | 'email' | 'message'>) => {
      setErrors((current: ContactFormErrors) => ({
        ...current,
        [field]: validate(values)[field],
      }));
    },
    [validate, values],
  );

  const handleSubmit = useCallback(async () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSuccessMessage('');
    setFailureMessage('');

    if (Object.keys(validationErrors).length > 0) {
      return false;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          locale,
        }),
      });

      const payload = (await response.json()) as {
        success?: boolean;
        code?: string;
      };

      if (response.ok && payload.success) {
        setValues(INITIAL_FORM_STATE);
        setErrors({});
        setSuccessMessage(messages.success);
        return true;
      }

      if (payload.code === 'email_not_configured' && typeof window !== 'undefined') {
        window.location.href = buildMailtoUrl(recipientEmail, values);
        setSuccessMessage(messages.fallbackToEmail);
        return true;
      }

      setFailureMessage(messages.failure);
      return false;
    } catch {
      setFailureMessage(messages.failure);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }, [locale, messages.failure, messages.fallbackToEmail, messages.success, recipientEmail, validate, values]);

  return useMemo(
    () => ({
      values,
      errors,
      isSubmitting,
      successMessage,
      failureMessage,
      updateField,
      validateField,
      handleSubmit,
      submitLabel: isSubmitting ? messages.submitting : messages.submit,
    }),
    [errors, failureMessage, handleSubmit, isSubmitting, messages.submit, messages.submitting, successMessage, updateField, validateField, values],
  );
}
