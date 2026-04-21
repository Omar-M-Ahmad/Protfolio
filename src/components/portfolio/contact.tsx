'use client';

import type { ChangeEvent, FormEvent } from 'react';

import { siteConfig } from '@/content/site';
import type { PortfolioContent } from '@/types/portfolio';

import { SocialIcon } from './icons';
import { useContactForm } from './hooks/use-contact-form';

type Props = {
  locale: string;
  contact: PortfolioContent['contact'];
};

export function Contact({ locale, contact }: Props) {
  const form = useContactForm(locale, siteConfig.publicEmail, contact.messages);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await form.handleSubmit();
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-label">
          <span className="label-line"></span>
          <span>{contact.sectionLabel}</span>
          <span className="label-line"></span>
        </div>

        <h2 className="section-title text-center" data-animate="fade-up" dangerouslySetInnerHTML={{ __html: contact.titleHtml }} />
        <p className="contact-sub">{contact.sub}</p>

        <div className="contact-layout">
          <div className="contact-form-wrap" data-animate="fade-left">
            <form className="contact-form" noValidate onSubmit={handleSubmit}>
              <div className="form-group form-honeypot" aria-hidden="true">
                <label htmlFor="contactCompany">{contact.fields.hiddenTrapLabel}</label>
                <input
                  type="text"
                  id="contactCompany"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.values.company}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => form.updateField('company', event.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactName">{contact.fields.nameLabel}</label>
                <input
                  type="text"
                  id="contactName"
                  name="name"
                  placeholder={contact.fields.namePlaceholder}
                  value={form.values.name}
                  className={form.errors.name ? 'error' : undefined}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => form.updateField('name', event.target.value)}
                  onBlur={() => form.validateField('name')}
                />
                <span className="form-error">{form.errors.name}</span>
              </div>

              <div className="form-group">
                <label htmlFor="contactEmail">{contact.fields.emailLabel}</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="email"
                  placeholder={contact.fields.emailPlaceholder}
                  value={form.values.email}
                  className={form.errors.email ? 'error' : undefined}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => form.updateField('email', event.target.value)}
                  onBlur={() => form.validateField('email')}
                />
                <span className="form-error">{form.errors.email}</span>
              </div>

              <div className="form-group">
                <label htmlFor="contactMessage">{contact.fields.messageLabel}</label>
                <textarea
                  id="contactMessage"
                  name="message"
                  rows={5}
                  placeholder={contact.fields.messagePlaceholder}
                  value={form.values.message}
                  className={form.errors.message ? 'error' : undefined}
                  onChange={(event: ChangeEvent<HTMLTextAreaElement>) => form.updateField('message', event.target.value)}
                  onBlur={() => form.validateField('message')}
                />
                <span className="form-error">{form.errors.message}</span>
              </div>

              <button type="submit" className="btn btn-primary btn-full" disabled={form.isSubmitting}>
                <span className="btn-label">{form.submitLabel}</span>
                <span className="btn-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </span>
              </button>

              <div className={`form-success${form.successMessage ? ' visible' : ''}`} aria-live="polite">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{form.successMessage}</span>
              </div>

              {form.failureMessage ? (
                <p className="form-error" style={{ marginTop: '10px' }} aria-live="polite">
                  {form.failureMessage}
                </p>
              ) : null}

              <a href={`mailto:${siteConfig.publicEmail}`} className="contact-email-link">
                {contact.directEmailLabel}
              </a>
            </form>
          </div>

          <div className="contact-links" data-animate="fade-right">
            <h3>{contact.findMe}</h3>
            <div className="social-list">
              {contact.socials.map((social) => (
                <a key={social.id} href={social.href} target={social.id === 'email' ? undefined : '_blank'} rel={social.id === 'email' ? undefined : 'noreferrer'} className="social-item">
                  <div className={`social-icon si-${social.icon}`}>
                    <SocialIcon kind={social.icon} />
                  </div>
                  <div className="social-info">
                    <span className="social-name">{social.name}</span>
                    <span className="social-handle">{social.handle}</span>
                  </div>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="social-arr" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
