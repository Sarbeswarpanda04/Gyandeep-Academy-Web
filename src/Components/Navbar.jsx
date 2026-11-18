import { useState } from "react";
import "./Navbar.css";

const Navbar = ({
  isBooksPage,
  onAdmissionClick,
  onBooksClick,
  onNavigate,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleAdmissionClick = () => {
    closeMenu();
    onAdmissionClick();
  };

  const handleSectionClick = (event, section) => {
    event.preventDefault();
    closeMenu();
    onNavigate(section);
  };

  const handleBooksClick = (event) => {
    event.preventDefault();
    closeMenu();
    onBooksClick();
  };

  return (
    <header className="navbar">
      <a
        className="navbar__brand"
        href="#home"
        aria-label="Gyandeep Academy home"
        onClick={(event) => handleSectionClick(event, "home")}
      >
        <img
          className="navbar__logo"
          src="/GyanDeep-Academy-Logo.webp"
          alt="Gyandeep Academy logo"
        />
        <span className="navbar__name">Gyandeep Academy</span>
        <span className="navbar__location">Khordha</span>
      </a>

      <button
        className={`navbar__toggle${isMenuOpen ? " navbar__toggle--open" : ""}`}
        type="button"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`navbar__menu${isMenuOpen ? " navbar__menu--open" : ""}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        <ul>
          <li><a href="#home" onClick={(event) => handleSectionClick(event, "home")}>Home</a></li>
          <li><a href="#about" onClick={(event) => handleSectionClick(event, "about")}>About</a></li>
          <li><a href="#teachers" onClick={(event) => handleSectionClick(event, "teachers")}>Teachers</a></li>
          <li><a href="#classes" onClick={(event) => handleSectionClick(event, "classes")}>Classes</a></li>
          <li>
            <a
              href="/books/"
              onClick={handleBooksClick}
              aria-current={isBooksPage ? "page" : undefined}
              className="navbar__books-link"
            >
              Books
            </a>
          </li>
          <li><a href="#contact" onClick={(event) => handleSectionClick(event, "contact")}>Contact</a></li>
        </ul>
        <button className="navbar__admission" type="button" onClick={handleAdmissionClick}>
          Admission <span aria-hidden="true">→</span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;