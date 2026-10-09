import { ArrowUpRight, ArrowUp } from "lucide-react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              Layo<span>.</span>
            </a>

            <p className="footer__tagline">
              Building modern digital experiences with clean code, thoughtful
              design, and attention to detail.
            </p>
          </div>

          <div className="footer__right">
            <nav className="footer__nav" aria-label="Footer navigation">
              <a href="#projects">Projects</a>
              <a href="#achievements">Achievements</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </nav>

            <div className="footer__socials">
              <a
                href="https://github.com/Noftyfootie"
                aria-label="GitHub"
                className="footer__social"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.71 0 0 .83-.27 2.75 1.05A9.18 9.18 0 0 1 12 6.9c.85 0 1.7.12 2.49.36 1.92-1.32 2.75-1.05 2.75-1.05.54 1.41.2 2.45.1 2.71.63.72 1.02 1.63 1.02 2.75 0 3.94-2.35 4.81-4.59 5.06.36.32.68.95.68 1.92v2.84c0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/owolabi-nofisat/"
                aria-label="LinkedIn"
                className="footer__social"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9a2.2 2.2 0 0 1 0-4.4ZM3.3 9.3h3.8V21H3.3V9.3Zm6.1 0h3.6v1.6h.05c.5-.95 1.73-1.95 3.56-1.95 3.8 0 4.5 2.5 4.5 5.75V21h-3.75v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94V21H9.4V9.3Z" />
                </svg>
              </a>

              <a
                href="https://x.com/NoftyFootie"
                aria-label="Twitter"
                className="footer__social"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L3 2h6.4l4.42 5.84L18.9 2Zm-1.09 17.8h1.73L8.46 4.08H6.6L17.81 19.8Z" />
                </svg>
              </a>

              <a
                href="mailto:owolabinofisat7@gmail.com"
                aria-label="Send email"
                className="footer__social"
              >
                <ArrowUpRight size={19} strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Layo. All rights reserved.</p>

          <a href="#home" className="footer__back-to-top">
            Back to top
            <ArrowUp size={16} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
