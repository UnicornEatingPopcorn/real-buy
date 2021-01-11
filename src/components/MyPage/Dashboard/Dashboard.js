import React from "react";
import FullInvestmentInfo from "./FullInvestmentInfo";
import "./Dashboard.sass";
import ReturnCount from "./ReturnCount";
import Graph from "./Graph";
import Deposit from "./Deposit";
import InvestmentLimit from "./InvestmentLimit";
import InvestmentStatus from "./InvestmentStatus";

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
    <div className="container">
      <div className="row dashboard-full-investment-info">
        <div className="col-12">
          <FullInvestmentInfo />
        </div>
      </div>
      {/*<div className="row">
        <div className="col-4">
          <ReturnCount returnAmount={dividedReturn} />
        </div>
        <div className="col-4">
          <ReturnCount returnAmount={totalReturn} />
        </div>
        <div className="col-4">
          <Graph />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <Deposit />
        </div>
        <div className="col-4">
          <InvestmentLimit />
        </div>
        <div className="col-4">
          <InvestmentStatus />
        </div>
      </div>*/}
    </div>
  );
};

export default Dashboard;
