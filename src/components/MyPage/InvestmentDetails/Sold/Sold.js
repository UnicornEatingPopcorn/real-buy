import React from "react";
import "./Sold.sass";

const Sold = () => {
  return (
    <div className="container sold-container">
      <div className="row sold-row">
        <div className="col sold-box">
          <p className="sold-title">매각 완료 금액 </p>
          <p className="sold-count">&nbsp; 0원</p>
        </div>
      </div>
      <div className="row sold-row">
        <div className="col">
          <p className="sold-products">매각 완료 상품이 없습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Sold;
