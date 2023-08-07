import ContactButton from "./ContactButton";
import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 100}}
      animate={{y: 0, opacity: 1}}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: 'easeInOut' }}
    >
      <article className="hero__content">
        <h1 className="hero__heading">
          Nice to meet you!<br />
          I'm <span className="hero__name">Alisher Toshmurodov.</span>
        </h1>
        <p className="hero__text">
          Based in the Uzbekistan, I’m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
      </article>
      <ContactButton />
    </motion.section>
  );
}

export default Hero;
