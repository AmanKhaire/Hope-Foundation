import React, { useState } from 'react';
import './Header.css';
import { FaPhoneAlt, FaEnvelope, FaHome, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaSearch, FaBars, FaTimes, } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* ---- TOP BAR ---- */}
      <div className="top-bar">
        <div className="contact-info1">
          <span><FaPhoneAlt /> 987-654-3210</span>
          <span><FaEnvelope /> contact@byteup.com</span>
          <span><FaHome /> Nagpur, Maharashtra</span>
        </div>
        <div className="right-section">
          <div className="social-icons">
            <a href="#"><FaFacebook size={30} className="icon" /></a>
            <a href="#"><FaInstagram size={30} className="icon" /></a>
            <a href="#"><FaTwitter size={30} className="icon" /></a>
            <a href="#"><FaLinkedin size={30} className="icon" /></a>
            <a href="#"><FaSearch size={30} className="icon" /></a>
            
          </div>
          {/* Hamburger Icon for Mobile */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>
        </div>
      </div>

      
      {/* ---- NAVBAR ---- */}
        <nav className={`navbar ${menuOpen ? 'show' : ''}`}>
          <div className="logo">Hope Unity Foundation</div>
          <ul>
            <li><a href="/Home">HOME</a></li>
            <li><a href="/About">ABOUT</a></li>
            <li><a href="/Cause">CAUSES</a></li>
            <li><a href="/Donation">DONATE</a></li>
            <li><a href="/Blog">BLOG</a></li>
            <li><a href="/Contact">CONTACT</a></li>
            <li>
              <a href="/Donation">
                <button className="donate-btn">Donate Now</button>
              </a>
            </li>

          </ul>
        </nav>

    </header>
  );
}

export default Header;
