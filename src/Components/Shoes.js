import React from "react";
import jordan from "../img/jordan.png";
import crater from "../img/crater.png";
import hippie from "../img/hippie.png";

export default function Shoes() {
  return (
    <div>
      <div className="container-fluid">
        <div className="container mt-5" id="ShoesList">
          <h1 className="text-center" id="topHead">
            New Arrivals
          </h1>
          <br />
          <h6 className="text-center" id="slow">
            Pre-booking starts now
          </h6>
          <br />
          <br />
          <br />
          <div className="row d-flex justify-content-evenly" id="rowData">
            <div className="col-3">
              <br />
              <div className="div1 text-center">
                <img src={jordan} alt="/" />
                <h5 className="mt-3" id="head1">
                  Air Jordan
                </h5>
                <p id="t1">$199</p>
                <button className="btn btn-outline-warning">
                  <i className="fa-brands fa-opencart"></i>
                </button>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="col-3">
              <div className="div2 text-center">
                <img src={crater} alt="/" />
                <h5 className="text-center mt-3" id="head2">
                  Crater
                </h5>
                <p className="text-center" id="t1">
                  $140
                </p>
                <button className="btn btn-outline-success">
                  <i className="fa-brands fa-opencart"></i>
                </button>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="col-3">
              <div className="div3 text-center">
                <img src={hippie} alt="/" />
                <h5 className="text-center mt-3" id="head3">
                  Hippie
                </h5>
                <p className="text-center" id="t1">
                  $149
                </p>
                <button className="btn btn-outline-danger">
                  <i className="fa-brands fa-opencart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
