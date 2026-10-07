import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            Layo<span>.</span>
          </a>

          <p className="footer__tagline">
            Building modern digital experiences.
          </p>
        </div>

        <div className="footer__links">
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer__socials">
          <a href="#" aria-label="GitHub">
            GitHub
          </a>

          <a href="#" aria-label="LinkedIn">
            LinkedIn
          </a>

          <a href="#" aria-label="Twitter">
            Twitter
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Layo. All rights reserved.</p>

        <p>Designed & Built with React</p>
      </div>
    </footer>
  );
}

export default Footer;
