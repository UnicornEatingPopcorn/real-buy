import React from "react";
import "./TenantAnalysis.sass";
import arrowRight from "./../../../../assets/icons/AssetManagement/arrow-right.svg";
import amazon from "./../../../../assets/icons/amazon.png";

const table1 = [
  {
    title: "임차인",
    definition: "Amazon Logistik Mönchengladbach GmbH",
  },
  {
    title: "임대차 계약 체결일",
    definition: "2017년 07월 06일",
  },
  {
    title: "임차 기간",
    definition: "임대차 개시일 (2019년 8월 1일)로 부터 20년",
  },
  {
    title: "중도해지 옵션",
    definition: "없음",
  },
  {
    title: "연장 옵션",
    definition: "임차인이 각 5년씩 총 2회 연장 옵션 보유",
  },
];

const table2 = [
  {
    title: "임대료",
    definition: "1년차 임대료 EUR 8,606,585",
  },
  {
    title: "임대료 조정 조건",
    definition: "3년차 이후부터 매년 CPI의 75%에 연동",
  },
  {
    title: "임차인 부담 비용",
    definition: "보험료, 수선 유지비, 관리비, 수도광열비",
  },
  {
    title: "임대인 부담 비용",
    definition: "외부 수선 비용 (Capex)",
  },
  {
    title: "임차 보증",
    definition:
      "보증한도: EUR 211,707,621.44 보증기간: 임대차 종료 후 18개월 까지",
  },
];

const table3 = [
  {
    money: "(십억 달러)",
    prev: "2019년",
    last: "2020년 (예상)",
  },
  {
    money: "매출액",
    prev: "281",
    last: "322",
  },
  {
    money: "영업이익",
    prev: "14.5",
    last: "16.9",
  },
  {
    money: "시가총액",
    prev: "920",
    last: "1,590",
  },
];

const TenantAnalysis = () => {
  return (
    <div className="tenant-analysis__container">
      <p className="tenant-analysis__lessor">임대인 개요</p>
      <div className="tenant-analysis__icons-box_container">
        <div className="tenant-analysis__icons-box">
          <span className="tenant-analysis__square">Amazon.com, Inc.</span>
          <div className="tenant-analysis__method">
            <img
              src={arrowRight}
              className="tenant-analysis__arrow"
              alt="arrow"
            />
            <span className="tenant-analysis__label">100% 소유</span>
          </div>
          <span className="tenant-analysis__square">
            Amazon Europe Core S.a.r.l
          </span>
          <div className="tenant-analysis__method">
            <img
              src={arrowRight}
              className="tenant-analysis__arrow"
              alt="arrow"
            />
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
      <p className="tenant-analysis__tables-name">임대차 계약 개요</p>
      <div className="tenant-analysis__tables">
        <table className="tenant-analysis__table">
          <tbody>
            {table1.map((tableRow) => {
              return (
                <tr className="tenant-analysis__row">
                  <td>{tableRow.title}</td>
                  <td>{tableRow.definition}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table className="tenant-analysis__table">
          <tbody>
            {table2.map((tableRow) => {
              return (
                <tr className="tenant-analysis__row">
                  <td>{tableRow.title}</td>
                  <td>{tableRow.definition}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="tenant-analysis__tables-name">Amazon 개요</p>
      <div className="tenant-analysis__amazon-box">
        <div className="tenant-analysis__amazon-pic-container">
          <img
            src={amazon}
            alt="amazon"
            className="tenant-analysis__amazon-pic"
          />
        </div>
        <table className="tenant-analysis__amazon-table">
          <tbody>
            {table3.map((tableRow) => {
              return (
                <tr className="tenant-analysis__row tenant-analysis__amazon-row">
                  <td>{tableRow.money}</td>
                  <td>{tableRow.prev}</td>
                  <td>{tableRow.last}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TenantAnalysis;
