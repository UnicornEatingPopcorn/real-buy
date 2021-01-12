import React from "react";
import FullInvestmentInfo from "./FullInvestmentInfo/FullInvestmentInfo";
import "./Dashboard.sass";
import ReturnCount from "./ReturnCount/ReturnCount";
import Graph from "./Graph/Graph";
import Deposit from "./Deposit/Deposit";
import InvestmentLimit from "./InvestmentLimit/InvestmentLimit";
import InvestmentStatus from "./InvestmentStatus/InvestmentStatus";

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
      <div className="row dashboard-info-row">
        <div className="col-12 dashboard-column">
          <FullInvestmentInfo />
        </div>
      </div>
      <div className="row dashboard-row">
        <div className="col-sm-6 col-md-4 dashboard-info-column">
          <ReturnCount returnAmount={dividedReturn} />
        </div>
        <div className="col-sm-6 col-md-4 dashboard-info-column">
          <ReturnCount returnAmount={totalReturn} />
        </div>
        <div className="col-sm-6 col-md-4 dashboard-info-column">
          <Graph />
        </div>
        <div className="col-sm-6 col-md-4 dashboard-info-column">
          <Deposit />
        </div>
        <div className="col-sm-6 col-md-4 dashboard-info-column">
          <InvestmentLimit />
        </div>
        <div className="col-sm-6 col-md-4 dashboard-info-column">
          <InvestmentStatus />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
