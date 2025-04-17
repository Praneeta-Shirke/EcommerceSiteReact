import React from 'react';
import './footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container-fluid footer-content">
        <div className="footer-column">
          <h5>Company</h5>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Support</h5>
          <ul>
            <li>Contact</li>
            <li>FAQs</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Legal</h5>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <i className="fab fa-facebook-f"><FacebookOutlinedIcon/></i>
            <i className="fab fa-instagram">instagram</i>
            <i className="fab fa-twitter">X</i>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        © {new Date().getFullYear()} ShopMingle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
