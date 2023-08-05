import "./Header.css";
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa6";


export const Nav = () => {
  return (
    <nav className="header__nav">
        <h2 className="header__logo">alishertoshmurodov</h2>
        <ul className="header__socials">
          <li>
            <a href="https://github.com/alishertoshmurodov" target="_blank" rel="noreferrer">
              <FaGithub size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/alisher-toshmurodov-a66b9a1ab/"
              target="_blank" rel="noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </li>
          <li>
            <a href="https://t.me/alexleo9" target="_blank" rel="noreferrer">
              <FaTelegram size={24} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ThisIsAlisher" target="_blank" rel="noreferrer">
              <FaTwitter size={24} />
            </a>
          </li>
        </ul>
      </nav>
  )
}

function Header() {
  return (
    <header className="header">
      <Nav />
    </header>
  );
}

export default Header;
