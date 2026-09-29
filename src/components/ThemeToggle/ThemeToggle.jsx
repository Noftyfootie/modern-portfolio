import { useTheme } from "../../hooks/useTheme";
import "./ThemeToggle.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? "☀" : "☾"}
      </span>
    </button>
  );
}

export default ThemeToggle;
export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        {/* Hero Content */}
        <div className="hero__content">
          <div className="hero__availability">
            <span className="hero__availability-dot" />
            <p className="hero__ready">Available For Work</p>
            <span> or Ready For Project!</span>
          </div>

          <p className="hero__greet">Hi there, I am Layo</p>

          <h1 className="hero__title">
            I build accessible, pixel-perfect,
            <span> digital experiences</span> for website
          </h1>

          <div>
            <p />
          </div>

          <p className="hero__description">
            I'm a frontend developer focused on building accessible, responsive
            and thoughtful web experiences using modern technologies.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="hero__button hero__button--primary">
              View My Work
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#contact" className="hero__button hero__button--secondary">
              Let's Talk
            </a>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__visual-grid" />

          <div className="hero__visual-circle hero__visual-circle--large">
            <div className="hero__visual-circle hero__visual-circle--medium">
              <div className="hero__visual-circle hero__visual-circle--small">
                <span>&lt;/&gt;</span>
              </div>
            </div>
          </div>

          <div className="hero__visual-line hero__visual-line--one" />
          <div className="hero__visual-line hero__visual-line--two" />

          <span className="hero__visual-label">CODE / DESIGN / BUILD</span>
        </div>
      </div>
    </section>
  );
}
