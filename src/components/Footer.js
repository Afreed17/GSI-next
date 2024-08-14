import React from "react";
import {
  FaShippingFast,
  FaLock,
  FaHeadset,
  FaExchangeAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import google_play from "../images/google_play.png";
import app_store from "../images/app_store.png";

import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ marginTop: "80px" }} className="footer-container cmpad">
      <div className="footer-top-mob">
        <div className="footer-item1">
          <div className="footer-item-mob">
            <FaShippingFast className="footer-icon" />
            <span>Fast Delivery</span>
          </div>
          {/* <hr className="footer-divider" /> */}
          <div className="footer-item-mob">
            <FaLock className="footer-icon" />
            <span>Secure Payments</span>
          </div>
          {/* <hr className="footer-divider" /> */}
          <div className="footer-item-mob">
            <FaHeadset className="footer-icon" />
            <span>24/7 Support</span>
          </div>
          <div className="footer-item-mob">
            <SiTicktick className="footer-icon" />
            <span>Assured Quality</span>
          </div>
          {/* <hr className="footer-divider" /> */}
          <div className="footer-item-mob">
            <FaExchangeAlt className="footer-icon" />
            <span>Easy Exchange</span>
          </div>
        </div>
        {/* <hr className="footer-divider" /> */}
        {/* <div className="footer-item2"> */}

        {/* </div> */}
      </div>

      <div className="footer-top">
        <div className="footer-item">
          <FaShippingFast className="footer-icon" />
          <span>Fast Delivery</span>
        </div>
        {/* <hr className="footer-divider" /> */}
        <div className="footer-item">
          <FaLock className="footer-icon" />
          <span>Secure Payments</span>
        </div>
        {/* <hr className="footer-divider" /> */}
        <div className="footer-item">
          <FaHeadset className="footer-icon" />
          <span>24/7 Support</span>
        </div>
        {/* <hr className="footer-divider" /> */}
        <div className="footer-item">
          <SiTicktick className="footer-icon" />
          <span>Assured Quality</span>
        </div>
        {/* <hr className="footer-divider" /> */}
        <div className="footer-item">
          <FaExchangeAlt className="footer-icon" />
          <span>Easy Exchange</span>
        </div>
      </div>

      {/* footer-bottom mobile */}
      <div className="footer-bottom-mob">
        <h7>We are always here to help you!</h7>
        <div className="footer-section-left-mob">
          <div className="support-mob">
            <div>
              <FaHeadset className="footer-icon" />
            </div>
            <div>
              <div style={{ marginBottom: "10px" }}>Call Support:</div>
              <div>+9774333960196</div>
            </div>
          </div>
          <div className="footer-section-right-desktop">
            <div style={{ textAlign: "center", width: "100%" }}>
              Stay Connected
            </div>
            <div className="social-icons">
              <FaFacebook className="social-icon" />
              <FaInstagram className="social-icon" />
              <FaXTwitter className="social-icon" />
              <FaLinkedin className="social-icon" />
              <FaYoutube className="social-icon" />
            </div>
          </div>
          <div className="support-mob">
            <div>
              <MdEmail className="footer-icon" />
            </div>
            <div>
              <div style={{ marginBottom: "10px" }}>Email Support:</div>
              <div>support@next.com</div>
            </div>
          </div>
        </div>
        {/* <div className="footer-section center">
          <span>Download Our App</span>
          <div className="app-images">
            <img src={google_play} alt="App Store" />
            <img src={app_store} alt="App Image 3" />
          </div>
        </div> */}
        <div className="footer-section-right-mob">
          <div>Stay Connected</div>
          <div className="social-icons">
            <FaFacebook className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaXTwitter className="social-icon" />
            <FaLinkedin className="social-icon" />
            <FaYoutube className="social-icon" />
          </div>
        </div>
      </div>

      {/* <div className="footer-bottom ">
        <div className="footer-section left">
          <span>We are always here to help you!</span>
          <div className="support">
            <FaHeadset className="footer-icon" />
            <span>Call Support: +9774333960196</span>
          </div>
          <div className="support">
            <MdEmail className="footer-icon" />
            <span>Email Support: support@next.com</span>
          </div>
        </div>
        <div className="footer-section center">
          <span>Download Our App</span>
          <div className="app-images">
            <img src={google_play} alt="App Store" />
            <img src={app_store} alt="App Image 3" />
          </div>
        </div>
        <div className="footer-section right">
          <span>Stay Connected</span>
          <div className="social-icons">
            <FaFacebook className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaXTwitter className="social-icon" />
            <FaLinkedin className="social-icon" />
            <FaYoutube className="social-icon" />
          </div>
        </div>
      </div> */}
      <hr className="section-divider" />
      <div className="footer-main">
        {/* footer-category mobile */}
        <div className="footer-categories-mob">
          <div className="footer-cat-1">
            <div className="category">
              <h3>Electronics</h3>
              <ul>
                <li>Laptop</li>
                <li>Mobile</li>
                <li>Tablet</li>
                <li>Smartwatch</li>
                <li>Smartphone</li>
                <li>Headphones</li>
              </ul>
            </div>
            <div className="category">
              <h3>Footwear</h3>
              <ul>
                <li>
                  <Link to="/shoes"></Link>Shoes
                </li>
                <li>
                  <Link to="/sandals"></Link>Sandals
                </li>
                <li>
                  <Link to="/boots"></Link>Boots
                </li>
                <li>
                  <Link to="/sneakers"></Link>Sneakers
                </li>
                <li>
                  <Link to="/slippers"></Link>Slippers
                </li>
                <li>
                  <Link to="/socks"></Link>Socks
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-cat-1">
            <div className="category">
              <h3>Sports & Outdoors</h3>
              <ul>
                <li>
                  <Link to="/fitness-exercise"></Link>Fitness & Exercise
                </li>
                <li>
                  <Link to="/basketball"></Link>Basketball
                </li>
                <li>
                  <Link to="/football"></Link>Football
                </li>
                <li>
                  <Link to="/tennis"></Link>Tennis
                </li>
                <li>
                  <Link to="/golf"></Link>Golf
                </li>
                <li>
                  <Link to="/yoga"></Link>Yoga
                </li>
              </ul>
            </div>
            <div className="category">
              <h3>Top Brands</h3>
              <ul>
                <li>
                  <Link to="/apple"></Link>Apple
                </li>
                <li>
                  <Link to="/motorola"></Link>Motorola
                </li>
                <li>
                  <Link to="/samsung"></Link>Samsung
                </li>
                <li>
                  <Link to="/nike"></Link>Nike
                </li>
                <li>
                  <Link to="/dell"></Link>Dell
                </li>
                <li>
                  <Link to="/puma"></Link>Puma
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-categories">
          <div className="category">
            <h3>Electronics</h3>
            <ul>
              <li>Laptop</li>
              <li>Mobile</li>
              <li>Tablet</li>
              <li>Smartwatch</li>
              <li>Smartphone</li>
              <li>Headphones</li>
            </ul>
          </div>
          <div className="category">
            <h3>Footwear</h3>
            <ul>
              <li>
                <Link to="/shoes"></Link>Shoes
              </li>
              <li>
                <Link to="/sandals"></Link>Sandals
              </li>
              <li>
                <Link to="/boots"></Link>Boots
              </li>
              <li>
                <Link to="/sneakers"></Link>Sneakers
              </li>
              <li>
                <Link to="/slippers"></Link>Slippers
              </li>
              <li>
                <Link to="/socks"></Link>Socks
              </li>
            </ul>
          </div>
          <div className="category">
            <h3>Sports & Outdoors</h3>
            <ul>
              <li>
                <Link to="/fitness-exercise"></Link>Fitness & Exercise
              </li>
              <li>
                <Link to="/basketball"></Link>Basketball
              </li>
              <li>
                <Link to="/football"></Link>Football
              </li>
              <li>
                <Link to="/tennis"></Link>Tennis
              </li>
              <li>
                <Link to="/golf"></Link>Golf
              </li>
              <li>
                <Link to="/yoga"></Link>Yoga
              </li>
            </ul>
          </div>
          <div className="category">
            <h3>Top Brands</h3>
            <ul>
              <li>
                <Link to="/apple"></Link>Apple
              </li>
              <li>
                <Link to="/motorola"></Link>Motorola
              </li>
              <li>
                <Link to="/samsung"></Link>Samsung
              </li>
              <li>
                <Link to="/nike"></Link>Nike
              </li>
              <li>
                <Link to="/dell"></Link>Dell
              </li>
              <li>
                <Link to="/puma"></Link>Puma
              </li>
            </ul>
          </div>
        </div>
        {/* <hr className="section-divider" /> */}
        {/* <div className="footer-info">
          <div className="corporate-address">
            <h3>Corporate Address</h3>
            <p>Gold Tower, Zone 26, Al Sana Street 882</p>
            <p>Office NO.401, 4th Floor, 30 C Ring Rd, Doha 3396 0196</p>
          </div>

          <div className="newsletter">
            <h3>Newsletter</h3>
            <p>Never miss a beat with our newsletter updates!</p>
            <input type="email" placeholder="Enter your email address" />
            <br />
            <br />
            <button>Subscribe</button>
          </div>

          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/press-release">Press Release</Link>
              </li>
              <li>
                <Link to="/sell-on-next">Sell on Next</Link>
              </li>
              <li>
                <Link to="/faqs">FAQ's</Link>
              </li>
              <li>
                <Link to="/sitemap">Sitemap</Link>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
      <hr className="section-divider" />
      <div className="footer-bottom-section">
        <p>Privacy Policy</p>
        <p className="privacy-policy">
          All trademarks, logos, listed products, company names and brand names
          visible on the GSI NEXT website are property of respective owner
          organizations and used for display/listing purposes under fair use
          laws only. Any rights not expressly granted herein are reserved. Use
          of this Web site constitutes acceptance of the GSI NEXT E-Commerce
          Trading W.L.L Cancellation & Refund, Terms and Conditions, and Privacy
          Policy.
        </p>
        <p className="copyright">
          Copyright © 2024 GSI NEXT E-Commerce Trading W.L.L. All Rights
          Reserved
        </p>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/Terms&Conditions">Terms & Conditions</a>
          <a href="/Refund-Cancellation">Refund & Cancellation</a>
          <a href="/Warranty&Return">Warranty & Return Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
