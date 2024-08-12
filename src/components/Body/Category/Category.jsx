import React from "react";
import "./Category.css";
import TopOffer from "../../../assets/top-offer.png";
import MobileAndTablet from "../../../assets/mobile-logo.webp";
import TvLogo from "../../../assets/tv-logo.jpg";
import Furniture from "../../../assets/furniture.jpg";
import Grocery from "../../../assets/grocery.jpg";
import Travel from "../../../assets/travel.jpg";
import Laptop from "../../../assets/laptop.jpg";
import Beauty from "../../../assets/beauty.jpg";
import HomeAndKitchen from "../../../assets/homeandkitchen.jpg";
const Category = () => {
  return (
    <div className="main-body-container">
      <div className="category-1">
        <img
          className="top-offer-image"
          src={TopOffer}
          alt="Top Offer On Flipkart"
        />
        <h5>Top Offers</h5>
      </div>
      <div className="category-2">
        <img
          className="mobile-tablet-image"
          src={MobileAndTablet}
          alt="Mobile and Tablet On Flipkart"
        />
        <h5>Mobile</h5>
      </div>
      <div className="category-3">
        <img className="tv-image" src={TvLogo} alt="Tv On Flipkart" />
        <h5>TV</h5>
      </div>
      <div className="category-4">
        <img className="laptop-image" src={Laptop} alt="Laptop On Flipkart" />
        <h5>LAPTOP</h5>
      </div>
      <div className="category-5">
        <img
          className="furniture-image"
          src={Furniture}
          alt="Furniture On Flipkart"
        />
        <h5>FURNITURE</h5>
      </div>
      <div className="category-6">
        <img className="travel-image" src={Travel} alt="Travel On Flipkart" />
        <h5>TRAVEL</h5>
      </div>
      <div className="category-7">
        <img
          className="grocery-image"
          src={Grocery}
          alt="Grocery On Flipkart"
        />
        <h5>GROCERY</h5>
      </div>
      <div className="category-8">
        <img className="beauty-image" src={Beauty} alt="Beauty On Flipkart" />
        <h5>BEAUTY</h5>
      </div>
      <div className="category-9">
        <img
          className="home-and-kitchen-image"
          src={HomeAndKitchen}
          alt="Home and kitchen product On Flipkart"
        />
        <h5>HOME & KITCHEN</h5>
      </div>
    </div>
  );
};

export default Category;
