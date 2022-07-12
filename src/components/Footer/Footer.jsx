import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="pt-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h5 className="display-5">About</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink className="nav-link text-dark" to="/underconstruction">
                  About us
                </NavLink>
                <NavLink className="nav-link text-dark" to="/underconstruction">
                  Contact us
                </NavLink>
                <NavLink className="nav-link text-dark" to="/underconstruction">
                  Guidance
                </NavLink>
                <NavLink className="nav-link text-dark" to="/underconstruction">
                  Update
                </NavLink>
                <NavLink className="nav-link text-dark" to="/underconstruction">
                  Recruitment
                </NavLink>
                <NavLink className="nav-link text-dark" to="/underconstruction">
                  Privacy
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h5 className="display-5">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fa fa-phone" aria-hidden="true" />
                090909090909
              </li>
              <li>
                <i className="fa fa-envelope" aria-hidden="true" />
                ponponmanagement@gmail.com
              </li>
            </ul>
            <img src="./img/logo.png" alt="logo" />
          </div>
          <div className="col-4">
            <h5 className="display-5">Address</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fa fa-map-marker" aria-hidden="true" />
                39B Truong Son street Ward 2 Tan Binh district
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="copyright-content text-center">
          <p className="mb-0">
            Copyright <i className="fa fa-copyright" aria-hidden="true" />
            PonPon phone store management program
          </p>
          <p>All right reserved.</p>
        </div>
      </div>
    </footer>
  );
}
