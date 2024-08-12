import React from "react";
import "./Mobile.css";
import Mobile_1 from "../../../../assets/mobile-1.jpg";
import Mobile_2 from "../../../../assets/mobile-2.jpg";
import Mobile_3 from "../../../../assets/mobile-3.png";
import Mobile_4 from "../../../../assets/mobile-4.webp";
import Mobile_5 from "../../../../assets/mobile-5.webp";
import Mobile_6 from "../../../../assets/mobile-6.avif";

const Mobile = () => {
  return (
    <div className="main-mobile-container">
      <div className="heading">
        <h2>Best Deals On Smartphones</h2>
      </div>
      <div className="items">
        <div className="item-1">
          <img className="Mobile_1" src={Mobile_1} alt="Mobile-1" />
          <h4>VIVO Y10</h4>
          <h4>From 20,000*</h4>
        </div>
        <div className="item-2">
          <img className="Mobile_2" src={Mobile_2} alt="Mobile-2" />
          <h4>REDMI 12pro</h4>
          <h4>From 15,000*</h4>
        </div>
        <div className="item-3">
          <img className="Mobile_3" src={Mobile_3} alt="Mobile-3" />
          <h4>MICROMAX</h4>
          <h4>From 10,000*</h4>
        </div>
        <div className="item-4">
          <img className="Mobile_4" src={Mobile_4} alt="Mobile-4" />
          <h4>LAVA</h4>
          <h4>From 13,000*</h4>
        </div>
        <div className="item-5">
          <img className="Mobile_5" src={Mobile_5} alt="Mobile-5" />
          <h4>IPHONE 13</h4>
          <h4>From 50,000*</h4>
        </div>
        <div className="item-6">
          <img className="Mobile_6" src={Mobile_6} alt="Mobile-6" />
          <h4>ONEPLUS</h4>
          <h4>From 40,000*</h4>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
