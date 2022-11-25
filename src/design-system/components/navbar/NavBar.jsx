import React from "react";
import './navbaar.css'
const NavBar = () => {
  return (

      <nav className="navbar navbar-expand-lg  bg-dark text-uppercase position-fixed w-100 top-0 start-0" >
        <div className="container">
          <a className="navbar-brand" href="#">
            New <span className="text-danger">Event</span> 
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Intro
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
              overview
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
              speakers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
             programs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
              register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
              venue
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
              sponsors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
             contact
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
  
  );
};

export default NavBar;
