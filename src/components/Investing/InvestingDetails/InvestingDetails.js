import React, { useState } from "react";
import AssetOverview from "./AssetOverview/AssetOverview";
import "./InvestingDetails.sass";
import Points from "./Points/Points";
import PresentationBlock from "./PresentationBlock/PresentationBlock";
import ProfitGraph from "./ProfitGraph/ProfitGraph";
import QuickInvest from "./QuickInvest/QuickInvest";
import PurchaseAnalysis from "./PurchaseAnalysis/PurchaseAnalysis";
import TenantAnalysis from "./TenantAnalysis/TenantAnalysis";
import Structure from "./Structure/Structure";
import Management from "./Management/Management";
import FundOverview from "./FundOverview/FundOverview";
import AssetManagement from "./AssetManagement/AssetManagement";
import Precautions from "./Precautions/Precautions";
import Dividend from "./Dividend/Dividend";
import Rent from "./Rent/Rent";
import Footer from "./../../Footer/Footer";
import SellingScenario from "./SellingScenario/SellingScenario";
import KeyRisks from "./KeyRisks/KeyRisks";
import RiskDetails from "./RiskDetails/RiskDetails";

const links = [
  {
    title: "매입 분석",
    component: <PurchaseAnalysis />,
  },
  {
    title: "임차인 분석",
    component: <TenantAnalysis />,
  },
  {
    title: "투자구조",
    component: <Structure />,
  },
  {
    title: "공동투자자 및 운용사",
    component: <Management />,
  },
];

const profitLinks = [
  {
    title: "배당수익",
    component: <Dividend />,
  },
  {
    title: "임대료 상승",
    component: <Rent />,
  },
];

const riskLinks = [
  {
    title: "매각 시나리오",
    component: <SellingScenario />,
  },
  {
    title: "주요 리스크",
    component: <KeyRisks />,
  },
  {
    title: "상세 정보",
    component: <RiskDetails />,
  },
];

const InvestingDetails = () => {
  const [activeSafeIndex, setActiveSafeIndex] = useState(0);
  const [activeProfitIndex, setActiveProfitIndex] = useState(0);
  const [activeRiskIndex, setActiveRiskIndex] = useState(0);

  const handleSafetyClick = (index) => {
    setActiveSafeIndex(index);
  };

  const renderedSafetyLinks = links.map((link, index) => {
    const active = index === activeSafeIndex ? "renderedLinks-active" : "";
    return (
      <span
        key={index}
        className={`investing-details__link ${active}`}
        onClick={() => handleSafetyClick(index)}
      >
        {link.title}
      </span>
    );
  });

  const renderedSafetyRoutes = links.map((link, index) => {
    const active = index === activeSafeIndex ? "renderedRoutes-active" : "";
    return (
      <div key={index} className={`renderedRoutes ${active}`}>
        {link.component}
      </div>
    );
  });

  const handleProfitClick = (index) => {
    setActiveProfitIndex(index);
  };

  const renderedProfitLinks = profitLinks.map((link, index) => {
    const active = index === activeProfitIndex ? "renderedLinks-active" : "";
    return (
      <span
        key={index}
        className={`investing-details__link ${active}`}
        onClick={() => handleProfitClick(index)}
      >
        {link.title}
      </span>
    );
  });

  const renderedProfitRoutes = profitLinks.map((link, index) => {
    const active = index === activeProfitIndex ? "renderedRoutes-active" : "";
    return (
      <div key={index} className={`renderedRoutes ${active}`}>
        {link.component}
      </div>
    );
  });

  const handleRiskClick = (index) => {
    setActiveRiskIndex(index);
  };

  const renderedRiskLinks = riskLinks.map((link, index) => {
    const active = index === activeRiskIndex ? "renderedRoutes-active" : "";
    return (
      <span
        key={index}
        className={`investing-details__link ${active}`}
        onClick={() => handleRiskClick(index)}
      >
        {link.title}
      </span>
    );
  });

  const renderedRiskRoutes = riskLinks.map((link, index) => {
    const active = index === activeRiskIndex ? "renderedRoutes-active" : "";
    return (
      <div key={index} className={`renderedRoutes ${active}`}>
        {link.component}
      </div>
    );
  });

  return (
    <>
      <PresentationBlock />
      <QuickInvest />
      <Points />
      <ProfitGraph />
      <AssetOverview />
      <div className="investing-details__safety">안전성 분석</div>
      <div className="investing-details__links-block">
        <div className="investing-details__links investing-details__links-safety">
          {renderedSafetyLinks}
        </div>
      </div>
      {renderedSafetyRoutes}

      <div className="investing-details__safety">수익성 분석</div>
      <div className="investing-details__links-block">
        <div className="investing-details__links investing-details__links-profit">
          {renderedProfitLinks}{" "}
        </div>
      </div>
      {renderedProfitRoutes}
      <div className="investing-details__safety">리스크 분석</div>
      <div className="investing-details__links-block">
        <div className="investing-details__links investing-details__links-risk">
          {renderedRiskLinks}{" "}
        </div>
      </div>
      {renderedRiskRoutes}
      <FundOverview />
      <AssetManagement />
      <Precautions />
      <Footer mode={"dark"} />
    </>
  );
};

export default InvestingDetails;
