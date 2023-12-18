import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/team">Team</Link></li>

            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@lJapanese.com</p>
            <p>Phone: +1313 1313 1313</p>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              
                <img src="https://cdn.worldvectorlogo.com/logos/facebook-2020-1-1.svg" alt="Facebook" />
              
              
                <img src="https://cdn.worldvectorlogo.com/logos/twitter-logo-2.svg" alt="Twitter" />
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;