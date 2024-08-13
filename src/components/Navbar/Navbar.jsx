import React, { useState } from "react";
import FlipkartLogo from "../../assets/flipkart-logo.webp";
import "./Navbar.css";
import Login from "../Login/Login";

const Navbar = () => {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const handleLogin = () => {
    setShowLoginPage(true);
  };
  return (
    <div className="navbar-container">
      <div className="main-logo-container">
        <img src={FlipkartLogo} alt="Main Logo" className="main-logo" />
      </div>
      <div className="search-bar-container">
        <input
          className="search-bar"
          type="text"
          name="search-bar"
          placeholder="Search For Products, Brands and More"
        />
      </div>
      <div className="option-container">
        <ul className="options">
          <li className="option">
            <a href="#" onClick={handleLogin}>
              Login
            </a>
          </li>
          <li className="option">
            <a href="#">Cart</a>
          </li>
          <li className="option">
            <a href="#">Become a Seller</a>
          </li>
        </ul>
      </div>
      {showLoginPage ? (
        <Login setShowLoginPage={setShowLoginPage} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Navbar;
