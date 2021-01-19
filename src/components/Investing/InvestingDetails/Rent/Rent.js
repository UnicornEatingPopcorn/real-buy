import React from "react";
import "./Rent.sass";
import rent from "./../../../../assets/icons/rent.png";

const table = [
  {
    title: "%",
    fiveYears: "과거 5년 평균",
    sevenYears: "과거 7년 평균",
    tenYears: "과거 10년 평균",
    forecast: "향후 5년 평균",
    forecastComment: "(IMF 예상치)",
  },
  {
    title: "CPI 상승률",
    fiveYears: "1.21%",
    sevenYears: "1.20%",
    tenYears: "1.42%",
    forecast: "1.23%",
  },
];

const Rent = () => {
  return (
    <div className="rent">
      <div className="rent__row">
        <div className="rent__col">
          <p className="rent__title">향후 배당 수익률</p>
          <table className="rent__table">
            <tbody>
              {table.map((row, index) => {
                return (
                  <tr className="rent__table-row" key={index}>
                    <td>{row.title}</td>
                    <td>{row.fiveYears}</td>
                    <td>{row.sevenYears}</td>
                    <td>{row.tenYears}</td>
                    <td>
                      {row.forecast} <br />
                      <span className="rent__comment">
                        {row.forecastComment}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table className="rent__table-small">
            <tbody>
              {table.map((row, index) => {
                return (
                  <tr className="rent__table-row" key={index}>
                    <td width="40%">{row.title}</td>
                    <td width="30%">{row.fiveYears}</td>
                    <td width="30%">{row.sevenYears}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table className="rent__table-small">
            <tbody>
              {table.map((row, index) => {
                return (
                  <tr className="rent__table-row" key={index}>
                    <td width="40%">{row.title}</td>
                    <td width="30%">{row.tenYears}</td>
                    <td width="30%">
                      {row.forecast} <br />
                      <span className="rent__comment">
                        {row.forecastComment}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="rent__pic-container">
        <img src={rent} alt="rent" className="rent__pic" />
      </div>
    </div>
  );
};

export default Rent;
