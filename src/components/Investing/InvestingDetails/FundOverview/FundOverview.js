import React from "react";
import "./FundOverview.sass";

const column1 = [
  "상품명",
  "운용사",
  "상품유형",
  "투자대상",
  "설정금액",
  "설정일",
  "설정기간",
  "이익분배 일정",
  "법률실사 기관",
  "재무실사 기관",
  "공동 투자자",
];

const column2 = [
  "신한AIM부동산 전문투자형사모투자신탁 제12호",
  "신한대체투자운용",
  "투자신탁 / 사모형 / 폐쇄형 / 단위형",
  "독일 뒤셀도르프 인근 뮌헨글라드바흐-레인달렌 소재 물류센터(Freehold) 소유권",
  "1,187억원",
  "2019년 06월 21일",
  "펀드 설정일로부터 5.5년",
  "매 6개월 단위 분배금 지급 (6월 말, 12월 말)",
  "㈜ 율촌",
  "KPMG",
  "주택도시기금, 경찰공제회",
];

const FundOverview = () => {
  return (
    <div className="fund-overview__container">
      <div className="fund-overview__col">
        <p className="fund-overview__title">펀드개요</p>
        <table className="fund-overview__table">
          <tbody>
            <tr className="fund-overview__row">
              <td>{column1[0]}</td>
              <td>{column2[0]}</td>
            </tr>
            <tr className="fund-overview__row">
              <td>{column1[1]}</td>
              <td>{column2[1]}</td>
            </tr>
            <tr className="fund-overview__row">
              <td>{column1[2]}</td>
              <td>{column2[2]}</td>
            </tr>
            <tr className="fund-overview__row">
              <td>{column1[3]}</td>
              <td>{column2[3]}</td>
            </tr>
            <tr className="fund-overview__row">
              <td>{column1[4]}</td>
              <td>{column2[4]}</td>
            </tr>
            <tr className="fund-overview__row">
              <td>{column1[5]}</td>
              <td>{column2[5]}</td>
            </tr>
            <tr className="fund-overview__row">
              <td>{column1[6]}</td>
              <td>{column2[6]}</td>
            </tr>
            <tr className="fund-overview__row">
              <td>{column1[7]}</td>
              <td>{column2[7]}</td>
            </tr>
            <tr className="fund-overview__row">
              <td>{column1[8]}</td>
              <td>{column2[8]}</td>
            </tr>
            <tr className="fund-overview__row">
              <td>{column1[9]}</td>
              <td>{column2[9]}</td>
            </tr>
            <tr className="fund-overview__row">
              <td>{column1[10]}</td>
              <td>{column2[10]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FundOverview;
