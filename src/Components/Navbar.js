import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <p className="navLogo ms-3"></p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="gilroy navbar-nav ms-4">
              <a className="nav-link active text-white-50" aria-current="page" href="/" id="nav">
                Home
              </a>
              <a className="nav-link text-white-50" href="./First.js" id="nav">
                Products
              </a>
              <a className="nav-link text-white-50" href="/" id="nav">
                Pricing
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
