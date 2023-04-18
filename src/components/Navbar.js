import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/"><img src={logo} alt="logo" className='image-logo' /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto navbar-menu">
          <li className="nav-item active">
            <Link className="nav-link" to="/gallery">Galerie Photos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/service">Tarifs et services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;