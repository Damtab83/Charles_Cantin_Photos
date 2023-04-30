import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import { CgCopyright } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

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
          <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Contact Social
            </Link>
            <ul class="dropdown-menu socialColor">
              <li><Link class="dropdown-item" to="#"><FaFacebook /> Facebook</Link></li>
              <li><Link class="dropdown-item" to="#"><BsInstagram /> Instagram</Link></li>
              <li><Link class="dropdown-item" to="#"><FiTwitter /> Twitter</Link></li>
              <li><hr class="dropdown-divider"/></li>
              <li><Link class="dropdown-item" to="https://github.com/Damtab83/Charles_Cantin_Photos.git"><CgCopyright />Tabary D. 2023</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;