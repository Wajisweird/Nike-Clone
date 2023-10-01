import React from "react";
import ship from "../img/shipping.png";
import easyReturn from "../img/return.png";
import gift from "../img/gift.png";
import contact from "../img/contact.png";

export default function Feature() {
  return (
    <div>
      <div className="container-fluid">
        <div className="container" id="fbackground">
          <div className="row mt-5 text-center d-flex justify-content-evenly" id="fdata">
            <div className="col-3" id="f1">
              <img src={ship} alt="/" />
              <br /><br />
              <h6>FREE SHIPPING</h6>
              <p>Free worldwide shipping on all orders</p>
            </div>
            <br />
            <div className="col-3" id="f2">
              <img src={easyReturn} alt="/" />
              <br /><br />
              <h6>30 DAYS RETURN</h6>
              <p>Easy Return and Refund in 14 days</p>
            </div>
            <br />
            <div className="col-3" id="f3">
              <img src={gift} alt="/" />
              <br /><br />
              <h6>GIFT CARD</h6>
              <p>Buy Gift Cards and use Coupon Codes easily</p>
            </div>
            <br />
            <div className="col-3" id="f4">
              <img src={contact} alt="/" />
              <br /><br />
              <h6>CONTACT US</h6>
              <p>Keep in touch via email and ticket system</p>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
