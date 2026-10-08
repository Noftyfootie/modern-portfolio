import devMind from "../../assets/images/projects/dev-mind.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        {/* Hero Content */}
        <div className="hero__content">
          {/* Availability */}
          <div className="hero__availability">
            <span className="hero__availability-dot" />

            <p className="hero__ready">Available For Work</p>

            <span>or Ready For Project!</span>
          </div>

          {/* Greeting */}
          <p className="hero__greet">Hi there, I am Layo</p>

          {/* Main Heading */}
          <h1 className="hero__title">
            I build modern
            <span>digital experiences</span>
          </h1>

          {/* Experience / Education */}
          <div className="hero__timeline">
            <div className="hero__timeline-item">
              <span className="hero__timeline-dot" />

              <div className="hero__timeline-content">
                <h3>Computer Engineering Graduate (OND)</h3>

                <p>Federal Polytechnic, Ilaro</p>

                <span>2023 - 2025</span>
              </div>
            </div>

            <div className="hero__timeline-item">
              <span className="hero__timeline-dot" />

              <div className="hero__timeline-content">
                <h3>Freelance Frontend Developer</h3>

                <p>Upwork & Tech Companies</p>

                <span>2024 - Now</span>
              </div>
            </div>
          </div>

          {/* Short Introduction */}
          <p className="hero__description">
            I'm a frontend developer focused on building accessible, responsive
            and thoughtful web experiences using modern technologies.
          </p>

          {/* Actions  */}
          <div className="hero__actions">
            {" "}
            <a href="#projects" className="hero__button hero__button--primary">
              {" "}
              View My Work <span aria-hidden="true">↗</span>{" "}
            </a>{" "}
            <a href="#contact" className="hero__button hero__button--secondary">
              {" "}
              Let's Talk{" "}
            </a>{" "}
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero__visual">
          <div className="hero__visual-glow" />

          <img
            src={devMind}
            alt="The Developer's Mind"
            className="hero__visual-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
