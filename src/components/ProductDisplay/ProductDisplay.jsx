import React from "react";

const ProductDisplay = ({ imageName, productName1, productName2 }) => {
  return (
    <div>
      <div></div>
      <div>
        <div>
          <img src={imageName} alt="Image" />
        </div>
        <div>
          <h4>{productName1}</h4>
          <h4>{productName2}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
