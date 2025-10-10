import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../img/logo.jpg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollTo = (id) => {
    const scroll = () => {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" }); // zawsze do góry
      } else {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(scroll, 50); // poczekaj aż strona główna załaduje
    } else {
      scroll();
    }

    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="Logo Dast" className="header__logo__img" />
          <h1 className="header__title">Dast</h1>
        </div>

        <button className="header__hamburger" onClick={toggleMenu}>
          <span className="header__hamburger__line"></span>
          <span className="header__hamburger__line"></span>
          <span className="header__hamburger__line"></span>
        </button>

        <nav className={`header__nav ${isOpen ? "header__nav--open" : ""}`}>
  <ul className="header__nav__list">
    <li className="header__nav__list__item" onClick={() => scrollTo("home")}><span>Strona Główna</span></li>
    <li className="header__nav__list__item" onClick={() => scrollTo("about")}><span>O Nas</span></li>
    <li className="header__nav__list__item">
      <Link to="/realizacje" onClick={() => setIsOpen(false)}>Realizacje</Link>
    </li>
    <li className="header__nav__list__item">
      <Link to="/oferta" onClick={() => setIsOpen(false)}>Oferta</Link>
    </li>
    <li className="header__nav__list__item" onClick={() => scrollTo("contact")}><span>Kontakt</span></li>
  </ul>
</nav>

      </div>
    </header>
  );
}
