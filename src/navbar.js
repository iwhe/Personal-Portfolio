import "./Navbar.css";
import { Banner } from "./components/banner";
import logo from "./images/portfolio1-removebg-preview.png";
import { Projects } from "./components/project";
import { Skills } from "./components/skill";
import About from "./components/about";
import Contact from "./components/contact";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} alt="Logo" /> PORTFOLIO
      </a>
      <ul className="navitem">
        <li>
          <a href="/"> Home </a>
        </li>
        <li>
          <a href="#projects"> Projects </a>
        </li>
        <li>
          {" "}
          <a href="#skills"> Skills</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#about"> About me</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#contact"> Contact</a>{" "}
        </li>
      </ul>
    </nav>
  );
}
