import React from "react";
import "./InvestingDetails.sass";
import Points from "./Points/Points";
import PresentationBlock from "./PresentationBlock/PresentationBlock";
import ProfitGraph from "./ProfitGraph/ProfitGraph";
import QuickInvest from "./QuickInvest/QuickInvest";

const InvestingDetails = () => {
  return (
    <>
      <PresentationBlock />
      <QuickInvest />
      <Points />
      <ProfitGraph />
    </>
  );
};

export default InvestingDetails;
