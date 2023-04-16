import React from 'react';
import { Link } from 'react-router-dom';
import { CgCopyright } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='footer'>
      <h5><CgCopyright /><a href="https://github.com/Damtab83/Charles_Cantin_Photos.git">Tabary Damien</a> 2023</h5>
      
      <ul className="footer-menu">
        <li><Link to="#"><FaFacebook /></Link></li>
        <li><Link to="#"><BsInstagram /></Link></li>
        <li><Link to="#"><FiTwitter /></Link></li>
      </ul>
    </div>
  )
}

export default Footer