import { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.css";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Brand */}
        <a href="/" className="navbar__brand" aria-label="RofiqDev home">
          <span className="navbar__brand-mark">L</span>

          <span className="navbar__brand-text">
            Layo<span>Dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#articles">Articles</a>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar__actions">
          <a href="#contact" className="navbar__cta">
            Let's Talk
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}
      >
        <nav aria-label="Mobile navigation">
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#articles" onClick={closeMenu}>
            Articles
          </a>

          <a href="#contact" className="navbar__mobile-cta" onClick={closeMenu}>
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
