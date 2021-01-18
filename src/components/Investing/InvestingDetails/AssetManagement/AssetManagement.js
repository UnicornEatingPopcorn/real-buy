import React from "react";
import "./AssetManagement.sass";
import franchise from "./../../../../assets/icons/AssetManagement/franchise.png";
import shinhan from "./../../../../assets/icons/AssetManagement/shinhan.png";
import people from "./../../../../assets/icons/AssetManagement/people.png";
import arrowRight from "./../../../../assets/icons/AssetManagement/arrow-right.svg";

const AssetManagement = () => {
  return (
    <div className="asset-management__container">
      <p className="asset-management__title">자산관리 구조</p>
      <div className="asset-management__icons-box">
        <span className="asset-management__square">
          <img
            src={franchise}
            alt="franchise"
            className="asset-management__image"
          />
        </span>
        <div className="asset-management__method">
          <p className="asset-management__subtitle">현황보고</p>
          <img src={arrowRight} className="asset-management__arrow-right" />
          <p className="asset-management__subtitle-last asset-management__subtitle">
            업무지시
          </p>
          <img src={arrowRight} className="asset-management__arrow-left" />
        </div>
        <span className="asset-management__circle">
          <img
            src={shinhan}
            alt="franchise"
            className="asset-management__image"
          />
        </span>
        <div className="asset-management__method-next">
          <p className="asset-management__subtitle">결과 보고</p>
          <img src={arrowRight} className="asset-management__arrow-right" />
        </div>
        <span className="asset-management__square-last asset-management__square">
          <p className="asset-management__investor">투자자</p>
          <img
            src={people}
            alt="franchise"
            className="asset-management__image"
          />
        </span>
      </div>
      <div className="asset-management__box">
        <p className="asset-management__box_p">
          - 프랑스 Top-tier 부동산 자산관리 회사 ( La Francaise Group) 에서 자산
          관리
        </p>
        <p className="asset-management__box_p">
          - 신한대체투자운용 (대체투자 전문 자산운용사) 에서 운용 전략 및 집행
        </p>
        <p className="asset-management__box_p">
          - 글로벌 부동산 전문 회사에서 투자자들의 자산을 안전하게 관리합니다.
        </p>
      </div>
    </div>
  );
};

export default AssetManagement;
