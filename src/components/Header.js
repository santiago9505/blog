import React, { useState } from "react";
import { Link } from "react-router-dom";

//assets
import Logo from "../assets/static/santigeek-icon.png";
import "../assets/styles/Header.css";

//menu
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!isOpen);
  };

  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <header className="header">
      <a href="https://santigeek.com" className="img__container">
        <img className="logo__img" src={Logo} alt="santigeek-logo" />
      </a>
      <div className="header__menu">
        <Hamburger onClick={handleClick} toggled={isOpen} toggle={setOpen} />
        <ul className={isOpen ? "menu__container--open" : "menu__container"}>
          <li>
            <Link onClick={closeMenu} className="menu__items" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} className="menu__items" to="/posts">
              Posts
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} className="menu__items" to="/biography">
              Biografía
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
