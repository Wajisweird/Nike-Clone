import React from "react";
import Add from "../video/newone.mp4";

export default function Ad() {
  return (
    <div>
      <div className="container austraila text-center mt-5" id="member">
        <p>Biggest sale of the year!!!</p>
        <br />
        <h6>" 2023 "</h6>
      </div>

      {/* ____________________________________________________________________________________________________ */}

      <div className="container-fluid mt-5 text-center" id="adVideo">
        <video src={Add} autoPlay loop muted playsInline preload="auto"></video>
      </div>
    </div>
  );
}
