import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Ventures', href: '#ventures' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Connect', href: '#connect' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter / X', href: '#' },
    { label: 'Medium', href: '#' },
    { label: 'Substack', href: '#' },
  ];

  const portfolioCompanies = [
    'Helio Energy', 'Novathread', 'AgroSense', 'Pinna Health',
    'Meridian Labs', 'Strata Living', 'Verdant Systems', 'FlowOps (Exited)',
  ];

  return (
    <footer className="footer">

      {/* Portfolio ticker strip */}
      <div className="footer-ticker">
        <div className="ticker-track">
          {[...portfolioCompanies, ...portfolioCompanies].map((name, i) => (
            <span key={i} className="ticker-item">
              {name} <span className="ticker-dot">◈</span>
            </span>
          ))}
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">

            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo-mark">
                <span className="footer-logo-text">A.A.</span>
                <span className="footer-logo-dot" />
              </div>
              <p className="footer-tagline">
                Entrepreneur. Investor. Builder.<br />
                Abuja, Nigeria &amp; Kwara Nigeria.
              </p>
              <p className="footer-bio">
                Founder of AA Capital, Arclight Digital, and FlowOps.
                Backing the next generation of deep-tech and climate founders
                at the earliest stage.
              </p>
              <div className="footer-status">
                <span className="status-dot" />
                <span className="status-text">Open to advisory &amp; co-founding</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="footer-col">
              <h4 className="footer-col-title">Navigation</h4>
              <ul className="footer-list">
                {navLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="footer-link">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="footer-col">
              <h4 className="footer-col-title">Follow</h4>
              <ul className="footer-list">
                {socialLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="footer-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-col footer-newsletter">
              <h4 className="footer-col-title">Essays &amp; Insights</h4>
              <p className="footer-newsletter-desc">
                Occasional writing on venture building, deep-tech investing, and
                what I'm thinking about. No noise.
              </p>
              <div className="footer-form">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="footer-input"
                />
                <button type="button" className="footer-btn">
                  Subscribe
                </button>
              </div>
              <p className="footer-form-note">One email per month. Unsubscribe anytime.</p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-wrap">
        <div className="container">
          <div className="footer-bottom">
            <p className="footer-copy">
              &copy; {currentYear} Abdulmalik Abdulmalik. All rights reserved.
            </p>
            <p className="footer-copy footer-copy--dim">
              AA Capital is not a regulated investment firm. Nothing on this site constitutes financial advice.
            </p>
            <div className="footer-legal">
              <a href="#" className="footer-legal-link">Privacy</a>
              <a href="#" className="footer-legal-link">Terms</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--tertiary-dark);
          border-top: 1px solid var(--glass-border);
          position: relative;
          overflow: hidden;
        }

        /* Ticker */
        .footer-ticker {
          border-bottom: 1px solid var(--glass-border);
          overflow: hidden;
          padding: 1.4rem 0;
          background: rgba(212, 175, 55, 0.03);
        }

        .ticker-track {
          display: flex;
          gap: 0;
          white-space: nowrap;
          animation: ticker 30s linear infinite;
        }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .ticker-item {
          font-size: 1.2rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          padding: 0 3rem;
          display: inline-flex;
          align-items: center;
          gap: 3rem;
        }

        .ticker-dot {
          color: var(--accent-gold);
          font-size: 1rem;
          opacity: 0.5;
        }

        /* Main */
        .footer-main {
          padding: 7rem 0 5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr 2fr;
          gap: var(--grid-gap);
        }

        /* Brand */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .footer-logo-mark {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .footer-logo-text {
          font-family: var(--font-secondary);
          font-size: 3.2rem;
          font-weight: 300;
          letter-spacing: 4px;
          background: linear-gradient(135deg, var(--accent-gold), var(--accent-rose));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-logo-dot {
          width: 8px;
          height: 8px;
          background: var(--accent-gold);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .footer-tagline {
          font-size: 1.4rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: var(--text-light);
          line-height: 1.6;
          margin: 0;
        }

        .footer-bio {
          font-size: 1.4rem;
          color: var(--text-dim);
          line-height: 1.65;
          margin: 0;
          max-width: 32rem;
        }

        .footer-status {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 0.4rem;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #7ec8a0;
          box-shadow: 0 0 10px #7ec8a0;
          flex-shrink: 0;
          animation: pulse 2s infinite;
        }

        .status-text {
          font-size: 1.3rem;
          color: #7ec8a0;
          font-weight: 500;
        }

        /* Columns */
        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .footer-col-title {
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-light);
          margin: 0 0 0.8rem;
        }

        .footer-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-link {
          font-size: 1.5rem;
          color: var(--text-dim);
          text-decoration: none;
          transition: color var(--transition-base);
        }

        .footer-link:hover { color: var(--accent-gold); }

        /* Newsletter */
        .footer-newsletter {
          gap: 1.6rem;
        }

        .footer-newsletter-desc {
          font-size: 1.4rem;
          color: var(--text-dim);
          line-height: 1.6;
          margin: 0;
        }

        .footer-form {
          display: flex;
          gap: 1rem;
          margin-top: 0.4rem;
        }

        .footer-input {
          flex: 1;
          padding: 1.1rem 1.4rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: var(--text-light);
          font-size: 1.4rem;
          font-family: var(--font-primary);
          outline: none;
          transition: border-color var(--transition-base);
        }

        .footer-input:focus { border-color: var(--accent-gold); }
        .footer-input::placeholder { color: var(--text-muted); }

        .footer-btn {
          padding: 1.1rem 2rem;
          background: var(--accent-gold);
          border: none;
          border-radius: 8px;
          color: var(--primary-dark);
          font-weight: 600;
          font-size: 1.4rem;
          cursor: pointer;
          transition: background var(--transition-base);
          white-space: nowrap;
          font-family: var(--font-primary);
        }

        .footer-btn:hover { background: var(--accent-rose); }

        .footer-form-note {
          font-size: 1.2rem;
          color: var(--text-muted);
          margin: 0;
        }

        /* Bottom bar */
        .footer-bottom-wrap {
          border-top: 1px solid var(--glass-border);
          padding: 2.4rem 0;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .footer-copy {
          font-size: 1.3rem;
          color: var(--text-muted);
          margin: 0;
        }

        .footer-copy--dim {
          font-size: 1.1rem;
          opacity: 0.6;
          max-width: 40rem;
          text-align: center;
        }

        .footer-legal {
          display: flex;
          gap: 2rem;
        }

        .footer-legal-link {
          font-size: 1.3rem;
          color: var(--text-muted);
          text-decoration: none;
          transition: color var(--transition-base);
        }

        .footer-legal-link:hover { color: var(--accent-gold); }

        /* Responsive */
        @media (max-width: 1100px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
          .footer-brand { grid-column: 1 / -1; }
          .footer-newsletter { grid-column: 1 / -1; }
        }

        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-brand { grid-column: unset; }
          .footer-newsletter { grid-column: unset; }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
          .footer-copy--dim { max-width: none; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
