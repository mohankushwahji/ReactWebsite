import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              All User
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/adduser">
              Add User
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/pagenation">
             Pagenation
            </Link>
            
          </li>  
        </ul>
      </div>
    </nav>
  );
}
