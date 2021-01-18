import React from "react";
import "./TenantAnalysis.sass";
import arrowRight from "./../../../../assets/icons/AssetManagement/arrow-right.svg";

const TenantAnalysis = () => {
  return (
    <div className="tenant-analysis__container">
      <p className="tenant-analysis__lessor">임대인 개요</p>

      <div className="tenant-analysis__icons-box">
        <span className="tenant-analysis__square">Amazon.com, Inc.</span>
        <div className="tenant-analysis__method">
          <img src={arrowRight} className="tenant-analysis__arrow" />
          <span className="tenant-analysis__label">100% 소유</span>
        </div>
        <span className="tenant-analysis__square">
          Amazon Europe Core S.a.r.l
        </span>
        <div className="tenant-analysis__method">
          <img src={arrowRight} className="tenant-analysis__arrow" />
          <span className="tenant-analysis__label">100% 소유</span>
        </div>
        <span className="tenant-analysis__square-last tenant-analysis__square">
          <p>Amazon</p>
          <p className="tenant-analysis__square-sm">
            Logistik Mönchengladbach GmbH
          </p>
        </span>
      </div>
    </div>
  );
};

export default TenantAnalysis;
