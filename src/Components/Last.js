import React from "react";
import Last1 from "../img/last1.jpg";
import Last2 from "../img/last2.jpg";

export default function Last() {
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="container d-flex justify-content-center">
          <div className="row" id="lastRrow">
            <div className="col-4" id="last1">
              <img src={Last1} alt="/" />
            </div>
            <div className="col-4 text-center" id="mid3">
              <h2 className="text-white mt-5">FALL NEW ARRIVALS</h2>
              <br />
              <h6 className="text-white-50 mt-5">NEW SEASON</h6>
              <h6 className="text-white-50">NEW COLLECTION</h6>
              <br />
              <br />
              <a className="btn btn-success mt-4" id="sss" href="#ShoesList">
                SHOP NOW
              </a>
            </div>
            <div className="col-4" id="last2">
              <img src={Last2} alt="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
