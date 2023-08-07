import { useState } from "react";
import "./ContactForm.css";
import "./ButtonMain.css";
import validator from 'validator';
import { motion } from "framer-motion";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState({ value: "", isTouched: false });
  const [message, setMessage] = useState("");

  const inputHandler = (e) => {
    if (e.target.getAttribute("name") === "name") {
      setName(e.target.value);
      if (e.target.value) {
        e.target.classList.remove("input-invalid");
        e.target.classList.add("input-valid");
      } else {
        e.target.classList.remove("input-valid");
      }
    } else if (e.target.getAttribute("name") === "email") {
      setEmail({ ...email, value: e.target.value, isTouched: true });
      if (!validator.isEmail(e.target.value)) {
        e.target.classList.add("input-invalid")
      } else{
        e.target.classList.remove("input-invalid");
        e.target.classList.add("input-valid");
      }

    } else {
      setMessage(e.target.value);
      if (e.target.value) {
        e.target.classList.remove("input-invalid");
        e.target.classList.add('input-valid');
      } else {
        e.target.classList.remove('input-valid');
      }
    }
  };

  const formHandler = (e) => {
    if (name && validator.isEmail(email.value) && message) {
      console.log('valid');
    } else {
      e.preventDefault();
      document.querySelectorAll('.input-area').forEach(item => item.value ? item.classList.remove('input-invalid') : item.classList.add('input-invalid'));
    }
  };

  return (
    <motion.form
      className="Contact__form"
      action="https://api.web3forms.com/submit"
      method="POST"
      autoComplete='off'
      onSubmit={formHandler}
      initial={{opacity: 0, x: 200}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: true}}
      transition={{duration: 1.5, ease: 'easeInOut'}}
    >
      <input
        type="hidden"
        name="access_key"
        value="f4a7629a-570b-4080-bcf2-a7c1065a1810"
      ></input>
      <input
        className="input-area"
        type="text"
        value={name}
        onChange={inputHandler}
        name="name"
        placeholder="NAME"
      />
      <input
        className="input-area"
        type="email"
        value={email.value}
        onChange={inputHandler}
        placeholder="EMAIL"
        name="email"
        autoComplete="off"
      />
      <textarea
        className="input-area"
        placeholder="MESSAGE"
        value={message}
        onChange={inputHandler}
        name="message"
        autoCorrect="on"
      />
      <button type="submit" className="button-main">
        Send Message
      </button>
    </motion.form>
  );
}

export default ContactForm;
