import React from "react";
import footballer from "../img/third.png";

export default function About() {
  return (
    <div>
      <div className="container">
        <br />
        <br />
        <div className="row  d-flex align-items-center mt-5" id="responsive">
          <div className="col-6" data-aos="fade-right" id="football">
            <img src={footballer} alt="/" />
          </div>
          <br />
          <br />
          <div className="col-6 text-center" id="ballText">
            <p className="austraila mt-5 text-white">Be legendary!</p>
            <br />
            <p className="textera text-white-50">
              Impossible is just a big word thrown around by small men who find
              it easier to the world they’ve been given than to explore the
              power they have to change it. Impossible is not a fact. It’s an
              opinion. Impossible is not a declaration. <br />
              It’s a dare. Impossible is potential. Impossible is temporary.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
