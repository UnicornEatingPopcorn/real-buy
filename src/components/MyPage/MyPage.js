import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./MyPage.sass";
import InvestmentDetails from "./InvestmentDetails/InvestmentDetails";
import NavigateBar from "./NavigateBar/NavigateBar";
import PaymentSchedule from "./PaymentSchedule/PaymentSchedule";
import MyAccount from "./MyAccount";
import MemberInfo from "./MemberInfo";
import Dashboard from "./Dashboard/Dashboard";

const MyPage = () => {
  return (
    <BrowserRouter>
      <div className="mypage-container container">
        <div className="mypage row">
          <div className="col-2">
            <NavigateBar />
          </div>
          <div className="col-10 ">
            <Route path="/mypage/dashboard" component={Dashboard} />
            <Route
              path="/mypage/investment-details"
              component={InvestmentDetails}
            />
            <Route path="/mypage/schedule" component={PaymentSchedule} />
            <Route path="/mypage/my-account" component={MyAccount} />
            <Route path="/mypage/member-information" component={MemberInfo} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default MyPage;
