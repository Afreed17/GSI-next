import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiBookmarkPlus, CiShoppingCart } from "react-icons/ci";
import profile from "../images/profile.png";
import saved from "../images/saved.png";
import bag from "../images/bag.png";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="cmpad header">
        <div className="header-left">
          <h2 className="header-logo">GSI</h2>
          {/* <div className="search-bar"> */}
          <input placeholder="Search Menu, restaurents etc"></input>
          {/* <CiSearch size={20} className="search_icon" /> */}
          {/* </div> */}
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
          {/* <CiBookmarkPlus size={28} className="icon_bg" /> */}
          <div style={{ alignSelf: "center", cursor: "pointer" }}>
            <img src={saved} />
          </div>
          {/* <CiShoppingCart size={28} className="icon_bg" /> */}
          <div style={{ alignSelf: "center", cursor: "pointer" }}>
            <img src={bag} />
          </div>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        </div>
      </div>
      <div className="header-mob">
        <div className="header-mob-profile">
          <div style={{ alignSelf: "center" }}>
            <img src={profile} />
          </div>
        </div>
        <div style={{ alignSelf: "center" }}>
          <img src={bag} />
        </div>
        <div style={{ alignSelf: "center" }}>
          <img src={saved} />
        </div>
      </div>
    </>
  );
};

export default Header;
