import React from "react";
import AssetOverview from "./AssetOverview/AssetOverview";
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
      <AssetOverview />
    </>
  );
};

export default InvestingDetails;
