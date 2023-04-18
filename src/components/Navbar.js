import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
// import { FaFacebook } from "react-icons/fa";
// import { BsGithub, BsInstagram } from "react-icons/bs";
// import { FiTwitter } from "react-icons/fi";

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

    // <nav className="navbar navbar-expand-lg navbar" aria-label="Offcanvas navbar large">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/"><img src={logo} alt="logo" className='image-logo' /></Link>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
    //       <div className="offcanvas-body">
    //         <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
    //           <li className="nav-item">
    //             <Link className="nav-link active" aria-current="page" to="/gallery">Galerie d'images</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/service">Tarifs et prestations</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/contact">Contact</Link>
    //           </li>
    //           <li className="nav-item dropdown">
    //             <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //               Social
    //             </Link>
    //             <ul class="dropdown-menu">
    //               <li><Link className="dropdown-item" to="#"><FaFacebook /></Link></li>
    //               <li><Link className="dropdown-item" to="#"><BsInstagram /></Link></li>
    //               <li><Link className="dropdown-item" to="#"><FiTwitter /></Link></li>
    //               <li><Link className="dropdown-item" to="https://github.com/Damtab83/Charles_Cantin_Photos.git"><BsGithub /></Link></li>
    //             </ul>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Navbar;