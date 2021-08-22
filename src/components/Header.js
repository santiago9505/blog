import React from 'react'
import { Link } from "react-router-dom";

//assets
import Logo from "../assets/static/santigeek-icon.png"
import "../assets/styles/Header.css"


const Header = () => {
  return (
    <header className="header">
      <figure className="img__container"><img src={Logo} alt="santigeek-logo" /></figure>
      <ul className="menu__container">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Posts</Link></li>
        <li><Link to="/biography">Biografía</Link></li>
      </ul>
    </header>
  )
}

export default Header
