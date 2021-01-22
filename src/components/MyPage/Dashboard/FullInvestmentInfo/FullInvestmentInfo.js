import React from "react";
import "./FullInvestmentInfo.sass";

const info = [
  {
    title: "현재 투자중인 금액",
    amount: "0원",
  },
  {
    title: "총 투자 금액",
    amount: "0원",
  },
  {
    title: "예상 배당 수익률 ",
    subtitle: "(연환산 수익률)",
    amount: "0,00%",
  },
  {
    title: "예상 총 수익률",
    subtitle: "(연환산 수익률)",
    amount: "0,00%",
  },
  {
    title: "총 투자 수익",
    amount: "0원",
  },
  {
    title: "플랫폼 이용료",
    amount: "0원",
  },
];

const FullInvestmentInfo = () => {
  return (
    <div className="info-container container">
      <div className="row info-container-mobile">
        {info.map((el, index) => {
          return (
            <div className="info-block col" key={index}>
              <p className="info-block__title">{el.title}</p>
              {el.subtitle && (
                <p className="info-block__subtitle">{el.subtitle}</p>
              )}
              <p className="info-block__amount">{el.amount}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FullInvestmentInfo;
