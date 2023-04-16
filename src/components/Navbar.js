import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <Link to="/"><img src={logo} alt="logo" className='image-logo' /></Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/gallery">Galeries d'images</Link></li>
        <li><Link to="/service">Tarifs et prestations</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;