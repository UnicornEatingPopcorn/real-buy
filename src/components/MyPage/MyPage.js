import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./MyPage.sass";
import InvestmentDetails from "./InvestmentDetails/InvestmentDetails";
import NavigateBar from "./NavigateBar/NavigateBar";
import PaymentSchedule from "./PaymentSchedule/PaymentSchedule";
import MyAccount from "./MyAccount/MyAccount";
import MemberInfo from "./MemberInfo/MemberInfo";
import Dashboard from "./Dashboard/Dashboard";
import Cart from "./Dashboard/Cart/Cart";
import LogoutModal from "./NavigateBar/LogoutModal/LogoutModal";
import MyPageMobileNav from "./../MobileVersion/MyPageMobileNav/MyPageMobileNav";

const MyPage = () => {
  const [isLogout, setIsLogout] = useState(false);
  const [isModalOpen, setModalClose] = useState(true);

  return (
    <>
      {(isLogout && isModalOpen) || (!isLogout && !isModalOpen) ? (
        <LogoutModal
          displayModal={setModalClose}
          modalOpenValue={isModalOpen}
        />
      ) : (
        <div></div>
      )}
      <div className="mypage-container container">
        <div className="mypage row">
          <div className="visible-for-mobile">
            <MyPageMobileNav />
          </div>
          <div className="col-4 col-md-2 col-lg-2 visible-for-desktop">
            <NavigateBar logOut={setIsLogout} logOutValue={isLogout} />
          </div>

          <div className="visible-for-mobile">
            <h1>Here will be Routes for mobile components</h1>
          </div>
          <div className="col-8 col-md-10 col-lg-10 visible-for-desktop">
            <Switch>
              <Route path="/mypage/dashboard" component={Dashboard} />
              <Route
                path="/mypage/investment-details"
                component={InvestmentDetails}
              />
              <Route path="/mypage/schedule" component={PaymentSchedule} />
              <Route path="/mypage/my-account" component={MyAccount} />
              <Route path="/mypage/member-information" component={MemberInfo} />
              <Route path="/mypage/cart" component={Cart} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
