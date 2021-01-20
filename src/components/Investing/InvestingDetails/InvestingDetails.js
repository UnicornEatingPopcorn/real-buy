import React from "react";
import AssetOverview from "./AssetOverview/AssetOverview";
import "./InvestingDetails.sass";
import Points from "./Points/Points";
import PresentationBlock from "./PresentationBlock/PresentationBlock";
import ProfitGraph from "./ProfitGraph/ProfitGraph";
import QuickInvest from "./QuickInvest/QuickInvest";
import { NavLink, Route, Switch } from "react-router-dom";
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
    path: "/investing/details/purchase-analysis",
    id: 1,
  },
  {
    title: "임차인 분석",
    path: "/investing/details/tenant-analysis",
    id: 2,
  },
  {
    title: "투자구조",
    path: "/investing/details/structure",
    id: 3,
  },
  {
    title: "공동투자자 및 운용사",
    path: "/investing/details/management",
    id: 4,
  },
];

const profitLinks = [
  {
    title: "배당수익",
    path: "/investing/details/dividend-income",
    id: 5,
  },
  {
    title: "임대료 상승",
    path: "/investing/details/rent-increase",
    id: 6,
  },
];

const riskLinks = [
  {
    title: "매각 시나리오",
    path: "/investing/details/selling-scenario",
    id: 7,
  },
  {
    title: "주요 리스크",
    path: "/investing/details/key-risks",
    id: 8,
  },
  {
    title: "상세 정보",
    path: "/investing/details/risk-details",
    id: 9,
  },
];

const InvestingDetails = ({ match }) => {
  return (
    <>
      <PresentationBlock />
      <QuickInvest />
      <Points />
      <ProfitGraph />
      <AssetOverview />
      <div className="investing-details__safety">안전성 분석</div>
      <div className="investing-details__links">
        {links.map((link) => {
          return (
            <NavLink
              to={link.path}
              key={link.title}
              className="investing-details__link"
              activeClassName="investing-details__link-active"
            >
              {link.title}
            </NavLink>
          );
        })}
      </div>
      <Switch>
        <Route exact path={`${match.url}`} component={PurchaseAnalysis} />
        <Route
          path="/investing/details/purchase-analysis"
          component={PurchaseAnalysis}
        />
        <Route
          path="/investing/details/tenant-analysis"
          component={TenantAnalysis}
        />
        <Route path="/investing/details/structure" component={Structure} />
        <Route path="/investing/details/management" component={Management} />
      </Switch>
      <div className="investing-details__safety">수익성 분석</div>
      <div className="investing-details__links">
        {profitLinks.map((link) => {
          return (
            <NavLink
              to={link.path}
              key={link.title}
              className="investing-details__link"
              activeClassName="investing-details__link-active"
            >
              {link.title}
            </NavLink>
          );
        })}
      </div>
      <Switch>
        <Route exact path={`${match.url}`} component={Dividend} />
        <Route path="/investing/details/dividend-income" component={Dividend} />
        <Route path="/investing/details/rent-increase" component={Rent} />
      </Switch>
      <div className="investing-details__safety">리스크 분석</div>
      <div className="investing-details__links">
        {riskLinks.map((link) => {
          return (
            <NavLink
              to={link.path}
              key={link.title}
              className="investing-details__link"
              activeClassName="investing-details__link-active"
            >
              {link.title}
            </NavLink>
          );
        })}
      </div>
      <Switch>
        <Route exact path={`${match.url}`} component={SellingScenario} />
        <Route
          path="/investing/details/selling-scenario"
          component={SellingScenario}
        />
        <Route path="/investing/details/key-risks" component={KeyRisks} />
        <Route path="/investing/details/risk-details" component={RiskDetails} />
      </Switch>
      <FundOverview />
      <AssetManagement />
      <Precautions />
      <Footer mode={"dark"} />
    </>
  );
};

export default InvestingDetails;
