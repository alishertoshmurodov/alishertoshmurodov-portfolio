import ContactButton from "./ContactButton";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <article className="hero__content">
        <h1 className="hero__heading">
          Nice to meet you! <br />
          I'm <span className="hero__name">Alisher Toshmurodov.</span>
        </h1>
        <p className="hero__text">
          Based in the Uzbekistan, I’m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
      </article>
      <ContactButton />
    </section>
  );
}

export default Hero;
