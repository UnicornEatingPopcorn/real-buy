import React from "react";
import graph from "./../../../assets/icons/graph.png";
import won from "./../../../assets/icons/won.svg";

const graphInfo = [
  {
    title: "예상 배당 수익률",
    subtitle: "(연환산 수익률)",
    amount: "0,00%",
  },
  {
    title: "예상 총 수익률",
    subtitle: "(연환산 수익률)",
    amount: "0,00%",
  },
];

const Graph = () => {
  return (
    <div className="graph-container">
      <div className="graph-info">
        <div className="graph-info__money">
          <span className="graph-info__title">예상 총 수익률</span>
          <div>
            <span className="graph-info__amount">153.93</span>
            <span className="graph-info__won">₩</span>
          </div>
          <p className="graph-info__period">20.11.09 ~ 21.02.11(현재)</p>
        </div>
      </div>
      <div className="graph-decoration"></div>
      <div className="graph-data">
        <img className="graph-data__picture" alt="graphic" src={graph} />
        <span className="graph-data__price">
          <span className="graph-data__price-sum">+133.2</span>
          <img src={won} alt="won" className="graph-data__price-won" />
        </span>
      </div>
      <div className="container">
        <div className="row">
          {graphInfo.map((graph, index) => {
            return (
              <div className="col graph-block" key={index}>
                <p className="graph-block__title">{graph.title}</p>
                <p className="graph-block__subtitle">{graph.subtitle}</p>
                <div className="graph-block__divider"></div>
                <p className="graph-block__amount">{graph.amount}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Graph;
