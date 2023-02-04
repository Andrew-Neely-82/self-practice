import React from "react";
import { RiMenu3Line, RiClosedLine } from "react-icons/ri";
import "./dist/css/navbar.css";
import logo from "../../assets/logo.svg";

const navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links-container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT-3</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
    </div>
  );
};

export default navbar;
