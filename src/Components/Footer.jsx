import "./Footer.css";

const Footer = ({ onAdmissionClick, onNavigateHome }) => {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <a
          className="site-footer__brand"
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            onNavigateHome();
          }}
        >
          <img src="/GyanDeep-Academy-Logo.webp" alt="" />
          <span>
            <strong>Gyandeep Academy</strong>
            <small>Khordha, Odisha</small>
          </span>
        </a>
        <p>Learning today. Growing for tomorrow.</p>
        <button type="button" onClick={onAdmissionClick}>
          Admission enquiry <span aria-hidden="true">→</span>
        </button>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Gyandeep Academy</span>
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            onNavigateHome();
          }}
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
