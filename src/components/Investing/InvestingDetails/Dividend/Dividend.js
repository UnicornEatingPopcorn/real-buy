import React from "react";
import "./Dividend.sass";

const futureFirst = [
  {
    title: "배당수익률",
    firstYear: "1년차",
    secondYear: "2년차",
    thirdYear: "3년차",
    fourthYear: "4년차",
    fifthYear: "5년차",
    average: "평균 배당수익률",
    averageComment: "(매각차익 제외)",
    averageSecond: "평균 배당수익률",
    averageSecondComment: "(매각차익 포함)",
  },
  {
    title: "환 헷지 전",
    firstYear: "6.92%",
    secondYear: "7.80%",
    thirdYear: "6.92%",
    fourthYear: "8.08%",
    fifthYear: "8.94%",
    average: "8.94%",
    averageSecond: "7.89%",
  },
  {
    title: "환 헷지 후",
    firstYear: "7.89%",
    secondYear: "8.52%",
    thirdYear: "8.52%",
    fourthYear: "8.53%",
    fifthYear: "9.31%",
    average: "8.55%",
    averageSecond: "8.58%",
  },
];

const futureSecond = [
  {
    title: "연 CPI 상승률",
    zero: "0.0%",
    zeroComment: "(최악 시나리오)",
    one: "0.5%",
    two: "1.0%",
    three: "1.23%",
    threeComment: "(IMF 예상)",
    four: "1.5%",
    fourComment: "(현재 가정)",
    five: "2.0%",
    six: "2.5%",
    sixComment: "(최고 시나리오)",
  },
  {
    title: "배당수익률",
    titleComment: "(매각차익 제외)",
    zero: "8.43%",
    one: "8.47%",
    two: "8.51%",
    three: "8.54%",
    four: "8.55%",
    five: "8.60%",
    six: "8.65%",
  },
  {
    title: "배당수익률",
    titleComment: "(매각차익 포함)",
    zero: "6.85%",
    one: "7.43%",
    two: "8.01%",
    three: "8.35%",
    four: "8.58%",
    five: "9.14%",
    six: "9.70%",
  },
];

const Dividend = () => {
  return (
    <div className="dividend">
      <div className="dividend__row">
        <div className="dividend__first-tables-col">
          <p className="dividend__title">향후 배당 수익률</p>
          <table className="dividend__table">
            <tbody>
              {futureFirst.map((row, index) => {
                return (
                  <tr className="dividend__table-row" key={index}>
                    <td width="30%">{row.title}</td>
                    <td width="2%">{row.firstYear}</td>
                    <td width="2%">{row.secondYear}</td>
                    <td width="2%">{row.thirdYear}</td>
                    <td width="2%">{row.fourthYear}</td>
                    <td width="2%">{row.fifthYear}</td>
                    <td width="30%">
                      {row.average} <br />
                      <span className="dividend__comment">
                        {row.averageComment}
                      </span>
                    </td>
                    <td width="30%">
                      {row.averageSecond}
                      <br />
                      <span className="dividend__comment">
                        {row.averageSecondComment}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table className="dividend__table-small">
            <tbody>
              {futureFirst.map((row, index) => {
                return (
                  <tr className="dividend__table-row" key={index}>
                    <td width="30%">{row.title}</td>
                    <td width="2%">{row.firstYear}</td>
                    <td width="2%">{row.secondYear}</td>
                    <td width="2%">{row.thirdYear}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table className="dividend__table-small">
            <tbody>
              {futureFirst.map((row, index) => {
                return (
                  <tr className="dividend__table-row" key={index}>
                    <td width="2%">{row.fourthYear}</td>
                    <td width="2%">{row.fifthYear}</td>
                    <td width="30%">
                      {row.average} <br />
                      <span className="dividend__comment">
                        {row.averageComment}
                      </span>
                    </td>
                    <td width="30%">
                      {row.averageSecond}
                      <br />
                      <span className="dividend__comment">
                        {row.averageSecondComment}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="dividend__row">
        <p className="dividend__title">향후 배당 수익률</p>
        <div className="dividend__box">
          <p className="dividend__box-text">
            - 현재 독일 소비자 물가 상승률을 1.5% 수준으로 가정
            <br /> - 물가 상승률 변동에 따라 배당수익률이 변화할 수 있음
            <br /> - 물가 상승률이 변동하지 않을 경우
            <span className="dividend__box-blue-text">최소 8.4%</span>의
            배당수익률 가능
          </p>
        </div>
      </div>
      <div className="dividend__row">
        <div className="dividend__second-tables-col">
          <table className="dividend__table">
            <tbody>
              {futureSecond.map((row, index) => {
                return (
                  <tr className="dividend__table-row" key={index}>
                    <td width="25%">
                      {row.title}
                      <br />
                      <span className="dividend__comment">
                        {row.titleComment}
                      </span>
                    </td>
                    <td width="15%">
                      {row.zero}
                      <br />
                      <span className="dividend__comment">
                        {row.zeroComment}
                      </span>
                    </td>
                    <td width="5%">{row.one}</td>
                    <td width="5%">{row.two}</td>
                    <td width="15%">
                      {row.three}
                      <br />
                      <span className="dividend__comment">
                        {row.threeComment}
                      </span>
                    </td>
                    <td width="15%">
                      {row.four}
                      <br />
                      <span className="dividend__comment">
                        {row.fourComment}
                      </span>
                    </td>
                    <td width="5%">{row.five}</td>
                    <td width="15%">
                      {row.six}
                      <br />
                      <span className="dividend__comment">
                        {row.sixComment}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <table className="dividend__table-small">
            <tbody>
              {futureSecond.map((row, index) => {
                return (
                  <tr className="dividend__table-row" key={index}>
                    <td width="25%">
                      {row.title}
                      <br />
                      <span className="dividend__comment">
                        {row.titleComment}
                      </span>
                    </td>
                    <td width="15%">
                      {row.zero}
                      <br />
                      <span className="dividend__comment">
                        {row.zeroComment}
                      </span>
                    </td>
                    <td width="5%">{row.one}</td>
                    <td width="5%">{row.two}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table className="dividend__table-small">
            <tbody>
              {futureSecond.map((row, index) => {
                return (
                  <tr className="dividend__table-row" key={index}>
                    <td width="15%">
                      {row.three}
                      <br />
                      <span className="dividend__comment">
                        {row.threeComment}
                      </span>
                    </td>
                    <td width="15%">
                      {row.four}
                      <br />
                      <span className="dividend__comment">
                        {row.fourComment}
                      </span>
                    </td>
                    <td width="5%">{row.five}</td>
                    <td width="15%">
                      {row.six}
                      <br />
                      <span className="dividend__comment">
                        {row.sixComment}
                      </span>
                    </td>
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

export default Dividend;
