import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__content">
          <span className="contact__eyebrow">Let's Work Together</span>

          <h2 className="contact__title">
            Let's Build Something Great Together
          </h2>

          <p className="contact__description">
            Have a project in mind, an opportunity to collaborate, or simply
            want to say hello? I'd love to hear from you.
          </p>

          <a href="mailto:owolabinofisat7@gmail.com" className="contact__email">
            owolabinofisat7@gmail.com
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="contact__action">
          <a
            href="mailto:owolabinofisat7@gmail.com"
            className="contact__button"
          >
            Get In Touch
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
