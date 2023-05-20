import React from "react";

const Shimmer = () => {
  console.log("hello");
  return (
    <div className="product-details">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};
export default Shimmer;
