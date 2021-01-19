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

const links = [
  {
    title: "매입 분석",
    path: "/investing/details/purchase-analysis",
  },
  {
    title: "임차인 분석",
    path: "/investing/details/tenant-analysis",
  },
  {
    title: "투자구조",
    path: "/investing/details/structure",
  },
  {
    title: "공동투자자 및 운용사",
    path: "/investing/details/management",
  },
];

const profitLinks = [
  {
    title: "배당수익",
    path: "/investing/details/dividend-income",
  },
  {
    title: "임대료 상승",
    path: "/investing/details/rent-increase",
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
      <Route exact path={match.url} component={PurchaseAnalysis} />
      <Switch>
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
      <Route exact path={match.url} component={Dividend} />
      <Switch>
        <Route path="/investing/details/dividend-income" component={Dividend} />
        <Route path="/investing/details/rent-increase" component={Rent} />
      </Switch>
      <FundOverview />
      <AssetManagement />
      <Precautions />
      <Footer mode={"dark"} />
    </>
  );
};

export default InvestingDetails;
