import React from "react";
import FullInvestmentInfo from "./FullInvestmentInfo";
import "./Dashboard.sass";
import ReturnCount from "./ReturnCount";
import Graph from "./Graph";

const dividedReturn = [
  {
    title: "예상 배당 수익률",
    subtitle: "(연환산 수익률)",
    amount: "0.00%",
  },
  {
    title: "예상 배당 수익금",
    amount: "0.00%",
  },
  {
    title: "배당 수익금",
    subtitle: "(수령 기준)",
    amount: "0.00%",
  },
];

const totalReturn = [
  {
    title: "예상 총 수익률",
    subtitle: "(연환산 수익률)",
    amount: "0.00%",
  },
  {
    title: "예상 총 수익금",
    amount: "0.00%",
  },
  {
    title: "총 수익금",
    subtitle: "(수령 기준)",
    amount: "0.00%",
  },
];

const Dashboard = () => {
  return (
    <div className="ui relaxed grid">
      <div className="row dashboard-full-investment-info">
        <div className="column">
          <FullInvestmentInfo />
        </div>
      </div>
      <div className="three column row">
        <div className="column">
          <ReturnCount returnAmount={dividedReturn} />
        </div>
        <div className="column">
          <ReturnCount returnAmount={totalReturn} />
        </div>
        <div className="column">
          <Graph />
        </div>
      </div>
      <div className="three column row">
        <div className="column">1</div>
        <div className="column">2</div>
        <div className="column">3</div>
      </div>
    </div>
  );
};

export default Dashboard;
