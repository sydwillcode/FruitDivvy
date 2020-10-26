import React from "react";
import "../scss/navbar";
import { Link } from "react-router-dom";
// import $ from 'jquery';
declare var $: any;

const Navbar: React.FC<{}> = () => {
  

  const handleClick = (e) => {
    console.log("Click")
    $("#navbarSupportedContent").collapse('hide');
  }

  return (
    <>
      <nav id="main-nav" className="navbar">
        <Link id="logo" className="navbar-brand" to="/">
          <img src="/assets/navbar-logo-01.svg" alt=""/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="/assets/img.svg" alt="" />
        </button>
      </nav>
      <div className="collapse" id="navbarSupportedContent">
        <Link onClick={handleClick} className="dropdown-item drop-nav" to="">
          PROFILE
        </Link>
        <div className="dropdown-divider" />
        <Link onClick={handleClick} className="dropdown-item drop-nav" to="/login">
          LOGIN
        </Link>
        <Link onClick={handleClick} className="dropdown-item drop-nav" to="/provider">
          PROVIDER SIGN UP{" "}
        </Link>
        <Link onClick={handleClick} className="dropdown-item drop-nav" to="/collector">
          COLLECTOR SIGN UP
        </Link>
        <Link onClick={handleClick} className="dropdown-item drop-nav" to="">
          SIGN OUT
        </Link>
      </div>

      
    </>
  );
};

export default Navbar;
