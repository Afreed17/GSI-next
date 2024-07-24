import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiBookmarkPlus, CiShoppingCart } from "react-icons/ci";
// import logo from "../images/logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="cmpad header">
      <div className="header-left">
        <h2 className="header-logo">GSI NEXT</h2>
        <div className="search-bar">
          <input placeholder="Search Menu, restaurents etc"></input>
          {/* <CiSearch size={20} className="search_icon" /> */}
        </div>
      </div>
      <div className="right-side">
        <div className="profile">
          <div>
            <CgProfile size={28} color="#55199f" />
          </div>
          <div>
            <div className="profile-head">Welcome</div>
            <h3 className="profile-name">User</h3>
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

export default Header;
