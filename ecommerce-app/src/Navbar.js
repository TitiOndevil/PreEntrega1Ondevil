import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">E-Commerce</div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a>
          <ul className="submenu">
            <li><a href="#">Ropa</a></li>
            <li><a href="#">Electrónicos</a></li>
            <li><a href="#">Hogar</a></li>
          </ul>
        </li>
        <li><a href="#">Ofertas</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
