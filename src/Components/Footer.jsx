import "./Footer.css";

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const Footer = ({ onAdmissionClick, onNavigateHome }) => {
  const handleHomeClick = (event) => {
    event.preventDefault();
    onNavigateHome();
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          {/* Brand & About */}
          <div className="site-footer__brand-col">
            <a
              className="site-footer__brand"
              href="#home"
              onClick={handleHomeClick}
            >
              <img src="/GyanDeep-Academy-Logo.webp" alt="" />
              <span>
                <strong>Gyandeep Academy</strong>
                <small>Khordha, Odisha</small>
              </span>
            </a>

            <p className="site-footer__tagline">
              Learning today. Growing for tomorrow. Dedicated coaching in
              Khordha helping students build strong concepts and exam confidence.
            </p>

            <div className="site-footer__badges">
              <span className="site-footer__badge">
                <BookIcon />
                Classes 5–10
              </span>
              <span className="site-footer__badge">CBSE &amp; BSE</span>
            </div>
          </div>

          {/* Quick Links & Programs */}
          <div className="site-footer__col">
            <h3 className="site-footer__heading">Explore</h3>
            <ul className="site-footer__list">
              <li>
                <a href="#home" onClick={handleHomeClick}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About Gyandeep</a>
              </li>
              <li>
                <button
                  className="site-footer__text-btn"
                  type="button"
                  onClick={onAdmissionClick}
                >
                  Admission Enquiry
                </button>
              </li>
            </ul>

            <h3 className="site-footer__heading site-footer__heading--spaced">
              Programs
            </h3>
            <ul className="site-footer__list site-footer__list--muted">
              <li>Foundation (Classes 5–7)</li>
              <li>Board Preparation (Classes 8–10)</li>
              <li>CBSE &amp; BSE Guidance</li>
            </ul>
          </div>

          {/* Contact & Admission CTA */}
          <div className="site-footer__col">
            <h3 className="site-footer__heading">Get in Touch</h3>

            <div className="site-footer__contacts">
              <a
                className="site-footer__contact-item"
                href="mailto:gyandeep.ac.khordha@gmail.com"
              >
                <span className="site-footer__icon">
                  <MailIcon />
                </span>
                <span>gyandeep.ac.khordha@gmail.com</span>
              </a>

              <a
                className="site-footer__contact-item"
                href="https://wa.me/916370464705"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="site-footer__icon">
                  <WhatsAppIcon />
                </span>
                <span>WhatsApp: +91 6370464705</span>
              </a>

              <a
                className="site-footer__contact-item"
                href="https://wa.me/918342916384"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="site-footer__icon">
                  <WhatsAppIcon />
                </span>
                <span>WhatsApp: +91 8342916384</span>
              </a>

              <div className="site-footer__contact-item site-footer__contact-item--static">
                <span className="site-footer__icon">
                  <MapPinIcon />
                </span>
                <span>Khordha, Odisha</span>
              </div>
            </div>

            <button
              className="site-footer__cta"
              type="button"
              onClick={onAdmissionClick}
            >
              Admission Enquiry <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>
            © {new Date().getFullYear()} Gyandeep Academy, Khordha. All rights
            reserved.
          </span>
          <a
            className="site-footer__top-link"
            href="#home"
            onClick={handleHomeClick}
          >
            Back to top
            <ArrowUpIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;