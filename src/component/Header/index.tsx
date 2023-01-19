import React from "react";
import { useNavigate } from "react-router-dom";

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
  rel="stylesheet"
></link>;

import logo from "../../assets/img/logo.png";

export default function Header() {
  const navigate = useNavigate();

  const redirectToSchedule = () => {
    navigate("/schedule");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div className="container-fluid">
        <img className="navbar-brand" width={100} src={logo} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarColor02">
          <ul className="navbar-nav me-auto ms-auto text-center">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#workers">
                Barbeiros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={redirectToSchedule}>
                Agende
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Depoimentos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contato
              </a>
            </li>
          </ul>
          <ul className="navbar-nav  ms-auto text-center">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
