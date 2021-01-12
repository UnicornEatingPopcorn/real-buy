import React from "react";
import { NavLink, BrowserRouter, Route } from "react-router-dom";
import "./InvestmentDetails.sass";
import AllInfo from "./AllInfo/AllInfo";
import Dividend from "./Dividend/Dividend";
import Sold from "./Sold/Sold";

const links = [
  {
    title: "전체[3]",
    path: "/mypage/investment-details/all",
  },
  {
    title: "배당 발생[0]",
    path: "/mypage/investment-details/dividend",
  },
  {
    title: "매각 완료[0]",
    path: "/mypage/investment-details/sold",
  },
];

const InvestmentDetails = () => {
  return (
    <BrowserRouter>
      <div className="container investment-details-container">
        <div className="row">
          {links.map((link, index) => {
            return (
              <div
                className="col-12 col-sm-4 col-md-3 col-lg-2 navlink-column"
                key={index}
              >
                <NavLink
                  to={link.path}
                  className="investment-details-navlink"
                  key={link.title}
                  activeClassName="navlink-active"
                >
                  {link.title}
                </NavLink>
              </div>
            );
          })}
        </div>
        <div>
          <Route path="/mypage/investment-details/all" component={AllInfo} />
          <Route
            path="/mypage/investment-details/dividend"
            component={Dividend}
          />
          <Route path="/mypage/investment-details/sold" component={Sold} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default InvestmentDetails;
