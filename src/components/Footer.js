import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-categories">
          <div className="category">
            <h3>Electronics</h3>
            <ul>
              <li>Laptop</li>
              <li>Mobile</li>
            </ul>
          </div>
          <div className="category">
            <h3>Footwear</h3>
            <ul>
              <li>Shoes</li>
            </ul>
          </div>
          <div className="category">
            <h3>Sports & Outdoors</h3>
            <ul>
              <li>Fitness & Exercise</li>
            </ul>
          </div>
          <div className="category">
            <h3>Top Brands</h3>
            <ul>
              <li>Apple</li>
              <li>Motorola</li>
              <li>Samsung</li>
              <li>Nike</li>
              <li>Dell</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-info">
          <div className="corporate-address">
            <h3>Corporate Address</h3>
            <p>Gold Tower, Zone 26, Al Sana Street 882</p>
            <p>Office NO.401, 4th Floor, 30 C Ring Rd, Doha 3396 0196</p>
          </div>
          
          <div className="newsletter">
            <h3>Newsletter</h3>
            <p>Never miss a beat with our newsletter updates!</p>
            <input type="email" placeholder="Enter your email address" /><br></br><br></br>
            <button>Subscribe</button>
          </div>
          
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Blogs</li>
              <li>Press Release</li>
              <li>Sell on Getat</li>
              <li>FAQ's</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Privacy Policy</p>
        <p className="privacy-policy">
        All trademarks, logos, listed products, company names and brandnames visible on the GSI NEXT website are property of respective owner organizations and used for display/listing purposes under fair use laws only. Any rights not expressly granted herein are reserved. Use of this Web site constitutes acceptance of the GSI NEXT E-Commerce Trading W.L.L Cancellation & Refund, Terms an Conditions and Privacy Policy.
        </p>
        
        <p className="copyright">
          Copyright © 2024 GSI NEXT E-Commerce Trading W.L.L. All Rights Reserved
        </p>
        
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Refund & Cancellation</a>
          <a href="#">Warranty & Return Policy</a>
        </div>
        
        <div className="payment-methods">
          {/* Add payment method icons here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;