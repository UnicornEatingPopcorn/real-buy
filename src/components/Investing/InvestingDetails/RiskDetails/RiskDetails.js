import React from "react";
import "./RiskDetails.sass";
import detailFirst from "./../../../../assets/icons/RiskDetails/risk-details-1.svg";
import detailSecond from "./../../../../assets/icons/RiskDetails/risk-details-2.svg";
import detailThird from "./../../../../assets/icons/RiskDetails/risk-details-3.svg";

const RiskDetails = () => {
  return (
    <div className="risk-details">
      <p className="risk-details__title">
        자세한 정보를 보고 싶으시다면 아래의 문서를 다운 받아 주세요
      </p>
      <div className="row no-gutters">
        <div className="col-6 col-lg-4 d-flex">
          <img src={detailFirst} alt="detail" className="risk-details__pic" />
        </div>
        <div className="col-6 col-lg-4  d-flex">
          <img src={detailSecond} alt="detail" className="risk-details__pic" />
        </div>
        <div className="col-6 col-lg-4 d-flex">
          <img src={detailThird} alt="detail" className="risk-details__pic" />
        </div>
      </div>
    </div>
  );
};

export default RiskDetails;
