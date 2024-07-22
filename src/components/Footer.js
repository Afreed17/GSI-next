import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiBookmarkPlus, CiShoppingCart, CiSearch } from "react-icons/ci";
// import logo from "../images/logo.png";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="cmpad footer">
      <div className="footer-left">
        <h2 className="footer-logo">GSI NEXT</h2>
        <div className="search-bar">
          <input placeholder="Search Menu, restaurents etc"></input>
          <CiSearch size={20} className="search_icon" />
        </div>
      </div>
      <div className="right-side">
        <div className="profile">
          <div>
            <CgProfile size={28} color="#55199f" />
          </div>
          <div>
            <div className="profile-head">Welcome</div>
            <h3 className="profile-name">Farzeen</h3>
          </div>
        </div>
        <CiBookmarkPlus size={28} className="icon_bg" />
        <CiShoppingCart size={28} className="icon_bg" />
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;