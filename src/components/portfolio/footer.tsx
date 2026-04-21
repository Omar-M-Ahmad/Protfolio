import type { PortfolioContent } from '@/types/portfolio';

type Props = {
  footer: PortfolioContent['footer'];
};

export function Footer({ footer }: Props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#hero" className="nav-logo">
              <span className="logo-bracket">&lt;</span>
              OA
              <span className="logo-bracket">/&gt;</span>
            </a>
            <p>{footer.subtitle}</p>
          </div>

          <p className="footer-copy">{footer.copy}</p>

          <a href="#hero" className="back-top">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
            <span>{footer.backToTop}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
