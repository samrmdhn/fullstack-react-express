import React from "react";
import "../../src/style.css";

import { useState } from "react";
const Navbar = () => {
  const [btnRs, setBtnRs] = useState(false);
  const buttonRsHandler = () => {
    setBtnRs(!btnRs);
    console.log("dipencet");
  };

  return (
    <>
      {btnRs ? (
        <div class="position-absolute bottom-0 end-0 containerRs">
          <div className="container mt-2">
            <div className="row text-center">
              <div className="col-lg-12">
                <button onClick={buttonRsHandler}>X</button>
              </div>
              <div className="col-lg-12 rs-items">
                <a href="">Home</a>
              </div>
              <div className="col-lg-12 rs-items">
                <a href="">Home</a>
              </div>
              <div className="col-lg-12 rs-items">
                <a href="">Home</a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            onClick={buttonRsHandler}
            className="navbar-toggler"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/*Biar responsive hrs dalem collapse*/}
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            {/*me-auto ngepush ke kanan element lain*/}
            <div class="me-auto"></div>
            <div>
              <a class="navbar-brand" href="#">
                Navbar
              </a>
              <a class="navbar-brand" href="#">
                Navbar
              </a>
              <a class="navbar-brand" href="#">
                Navbar
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
