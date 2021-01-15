import React from "react";
import "./Dividend.sass";

const Dividend = () => {
  return (
    <div className="container dividend-container">
      <div className="row dividend-row">
        <div className="col dividend-box">
          <p className="dividend-title">배당 발생 금액 </p>
          <p className="dividend-count">&nbsp; 0원</p>
        </div>
      </div>
      <div className="row dividend-row">
        <div className="col">
          <p className="dividend-products">배당 발생 상품이 없습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Dividend;
