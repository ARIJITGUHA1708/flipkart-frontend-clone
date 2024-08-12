import React from "react";
import Mobile_1 from "../../../../assets/mobile-1.jpg";
import "./Offer.css";

const Offer = () => {
  return (
    <div className="main-offer-container">
      <div className="item_1">
        <div className="offer-content-1">
          <p>Add. 2000 off On Excx.</p>
          <h6>Moto Edge 50 Fusion</h6>
          <h6>From 20,000*</h6>
        </div>
        <div>
          <img className="image-1" src={Mobile_1} alt="Offer-1" />
        </div>
      </div>
      <div className="item_2">
        <div className="offer-content-2">
          <h6>4K Smart TVs</h6>
          <p>LG,Hisense & more</p>
          <h6>From 10,000*</h6>
        </div>
        <div>
          <img className="image-2" src={Mobile_1} alt="Offer-2" />
        </div>
      </div>
      <div className="item_3">
        <div className="offer-content-3">
          <p>Add. 2000 off On Exch.</p>
          <h6>Moto Edge 50 Fusion</h6>
          <h6>From 20,000</h6>
        </div>
        <div>
          <img className="image-3" src={Mobile_1} alt="Offer-1" />
        </div>
      </div>
    </div>
  );
};

export default Offer;
