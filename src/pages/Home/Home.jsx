import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
export default function Home() {
  return (
    <div className="home-content ">
      <section className="jumbotron bg-primary ">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="display-3 text-white font-weight-bold">Pon Pon</h1>
              <h2 className="display-5">Phone store management program</h2>
              <p className="lead">
                PonPon phone store management software helps owners manage all
                aspects of the store: from sales calculation, inventory
                management, money management, customer care to analyzing
                business results.
              </p>
              <hr className="my-2" />
              <p className="text-white">
                SUPER SIMPLE, very easy to use even for non-computer savvy.
              </p>
              <p className="lead">
                <NavLink
                  className="btn btn-warning btn-lg shadow"
                  to="/underconstruction"
                  role="button"
                >
                  Try now for free
                </NavLink>
              </p>
            </div>
            <div className="col-6">
              <img src="./img/demo2.png" alt="demo" className="w-100" />
            </div>
          </div>
        </div>
      </section>
      <section className="introduces-box">
        <div className="container">
          <div className="row introduces-list text-center">
            <div className="col-md-4 introduces-item">
              <i className="fa fa-coffee introduces-icon" aria-hidden="true" />

              <h5 className="introduces-title">Simple &amp; Easy to use</h5>
              <h6 className="introduces-txt mb-0">
                Simple, smart and friendly interface.
              </h6>
            </div>
            <div className="col-md-4 introduces-item">
              <i className="fa fa-check introduces-icon" aria-hidden="true" />

              <h5 className="introduces-title">Suitable for all owners</h5>
              <h6 className="introduces-txt mb-0">
                Owner can easily manange multiple branches within a touch of a
                finger.
              </h6>
            </div>
            <div className="col-md-4 introduces-item">
              <i className="fa fa-money introduces-icon" aria-hidden="true" />

              <h5 className="introduces-title">Cost savings</h5>
              <h6 className="introduces-txt mb-0">
                Free deployment, installment, and maintainance! It's so cheap!
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className="trial-box mt-5 bg-primary pt-5 pb-5">
        <div className="container">
          <div className=" text-center">
            <h3 className="">Let PonPon be by your side on your adventure!</h3>

            <NavLink
              className="btn btn-warning mt-2 shadow"
              to="/underconstruction"
            >
              Try now for free
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
