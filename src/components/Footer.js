import React from "react";
import logo from "../images/logo.png";
import { CgProfile } from "react-icons/cg";
import { CiBookmarkPlus, CiShoppingCart, CiSearch } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="cmpad footer">
      <div className="footer-left">
        <h2 className="footer-logo">GSI NEXT</h2>
        <div className="search-bar">
          <input placeholder="Search Menu, restaurents etc"></input>
          {/* <img src={logo} /> */}
          <CiSearch size={20} className="search_icon" />
        </div>
      </div>
      {/* <div className="footer-right"> */}

      <div className="right-side">
        <div className="profile">
          <div>
            <CgProfile size={28} color="#55199f" />
          </div>
          <div>
            <div className="profile-head">Welcome</div>
            {/* <div className="profile-name">Farzeen</div> */}
            <h3 className="profile-name">Farzeen</h3>
          </div>
        </div>
        <CiBookmarkPlus size={28} className="icon_bg" />
        <CiShoppingCart size={28} className="icon_bg" />
      </div>

      {/* </div> */}
    </div>
  );
};

export default Footer;
