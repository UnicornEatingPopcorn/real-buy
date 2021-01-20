import React from "react";
import "./Management.sass";
import franchise from "./../../../../assets/icons/AssetManagement/franchise.png";
import shinhan from "./../../../../assets/icons/shinhan-gr.png";
import management from "./../../../../assets/icons/management-img.png";
import police from "./../../../../assets/icons/police.png";

const assetManagement = [
  {
    title: "설립연도 / 소재지",
    definition: "1975년 / 프랑스 파리",
  },
  {
    title: "AUM (투자 자산 규모)",
    definition: "약 87.4 조원",
  },
  {
    title: "신용등급",
    definition: "S&P 기준 A 등급",
  },
  {
    title: "사업영역",
    definition: "증권업, 부동산 투자/개발, 자산운용 등",
  },
];

const domesticOperator = [
  {
    title: "설립연도 / 소재지",
    definition: "2004년 / 한국 서울",
  },
  {
    title: "AUM (투자 자산 규모)",
    definition: "약 3.8 조원",
  },
  {
    title: "사업영역",
    definition: "부동산 투자/개발, 자산운용 등",
  },
];

const managementInv = [
  {
    title: "기금 개요",
    definition: "국토교통부 산하 투자 기관",
  },
  {
    title: "기금 조성 재원",
    definition: "국민주택채권, 청약저축 등",
  },
  {
    title: "기금 용도",
    definition: "정책성 주택 건설자금, 민간 지원 자금 등",
  },
  {
    title: "투자 금액",
    helper: "(2019년 기준)",
    definition: "약 38.4 조원",
  },
];

const jointInvestor = [
  {
    title: "공제회 개요",
    definition: "경찰행정 발전에 기여하기 위한 복지 기관",
  },
  {
    title: "조성 재원",
    definition: "경찰공무원의 연금",
  },
  {
    title: "기금 용도",
    definition: "경찰공무원의 생활안정과 복지 증진 목적",
  },
  {
    title: "투자 금액",
    helper: "(2019년 기준)",
    definition: "약 3.0 조원",
  },
];

const Management = () => {
  return (
    <div className="management__container">
      <div className="management__row">
        <div className="management__box">
          <span className="management__title">현지 자산관리 회사</span>
          <div className="management__info">
            <img
              src={franchise}
              alt="franchise"
              className="management__info-pic"
            />
          </div>
          <table className="management__table">
            <tbody>
              {assetManagement.map((tableRow, index) => {
                return (
                  <tr className="management__table-row" key={index}>
                    <td width="40%">{tableRow.title}</td>
                    <td width="60%">{tableRow.definition}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="management__box">
          <span className="management__title">국내 운용사</span>
          <div className="management__info">
            <img
              src={shinhan}
              alt="franchise"
              className="management__info-pic-big"
            />
          </div>
          <table className="management__table">
            <tbody>
              {domesticOperator.map((tableRow, index) => {
                return (
                  <tr className="management__table-row" key={index}>
                    <td width="40%">{tableRow.title}</td>
                    <td width="60%">{tableRow.definition}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="management__row">
        <div className="management__box">
          <span className="management__title">현지 자산관리 회사</span>
          <div className="management__info">
            <img
              src={management}
              alt="franchise"
              className="management__info-pic-large management__info-pic-large-margin"
            />
          </div>
          <table className="management__table">
            <tbody>
              {managementInv.map((tableRow, index) => {
                return (
                  <tr className="management__table-row" key={index}>
                    <td width="40%">
                      {tableRow.title} <br />
                      <span className="management__helper">
                        {tableRow.helper}
                      </span>
                    </td>
                    <td width="60%">{tableRow.definition}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="management__box">
          <span className="management__title">공동 투자자</span>
          <div className="management__info">
            <img
              src={police}
              alt="franchise"
              className="management__info-pic-large"
            />
          </div>
          <table className="management__table">
            <tbody>
              {jointInvestor.map((tableRow, index) => {
                return (
                  <tr className="management__table-row" key={index}>
                    <td width="40%">
                      {tableRow.title} <br />
                      <span className="management__helper">
                        {tableRow.helper}
                      </span>
                    </td>
                    <td width="60%">{tableRow.definition}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Management;
