import ContactForm from "./ContactForm";
import "./Footer.css";
import { Nav } from "./Header";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer__contact">
        <article className="footer__contact-text">
          <h2>Contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </article>
        <ContactForm />
      </div>
      <div className="footer__nav">
        <Nav />
      </div>
    </footer>
  );
}

export default Footer;
