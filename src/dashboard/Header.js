import React from "react";
//librerias

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Mis Utilidades
        </a>
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                PNG,WEBP CONVERTER
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/qr-generator">
                QR GENERATOR
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/barcode-generator">
                BAR-CODE GENERATOR
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
