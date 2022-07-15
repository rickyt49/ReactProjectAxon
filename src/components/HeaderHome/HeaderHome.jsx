import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function HeaderHome() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="./img/logo.png" alt="logo" />
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0 d-flex justify-content-between">
              <li className="nav-item active">
                <Link className="nav-link" to="/underconstruction">
                  How We Work <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/phones">
                  Phones
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/underconstruction">
                  Our Fees
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/underconstruction">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-outline-success"
                  to="/underconstruction"
                >
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-success mt-2 mt-md-0 ml-md-2"
                  to="/underconstruction"
                >
                  Login
                </Link>
              </li>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
