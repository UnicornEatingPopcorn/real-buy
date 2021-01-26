import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import MyPage from "./MyPage/MyPage";
import Header from "./Header/Header";
import RegisterInvestInfo from "./RegisterInvestInfo/RegisterInvestInfo";
import CompleteInvestInfo from "./RegisterInvestInfo/CompleteInvestInfo/CompleteInvestInfo";
import Investing from "./Investing/Investing";
import InvestmentInsight from "./InvestmentInsight/InvestmentInsight";
import AboutCompany from "./AboutCompany/AboutCompany";
import CustomerSupport from "./CustomerSupport/CustomerSupport";
import "./App.sass";
import InvestingMethod from "./InvestingMethod/InvestingMethod";
import InvestingDetails from "./Investing/InvestingDetails/InvestingDetails";
import Login from "./Login/Login";
import Register from "./Register/Register";
import SearchId from "./SearchId/SearchId";
import SearchPassword from "./SearchPassword/SearchPassword";
import IdFound from "./IdFound/IdFound";
import IdNotFound from "./IdNotFound/IdNotFound";
import LoginSuccess from "./LoginSuccess/LoginSuccess";
import RegisterSuccess from "./RegisterSuccess/RegisterSuccess";
import { stopSpinner } from "./../actions/index";
import { useDispatch } from "react-redux";

var FontFaceObserver = require("fontfaceobserver");

var fonts = [
  "NanumSquare",
  "NanumSquareLight",
  "NanumSquareRegular",
  "NanumSquareExtraBold",
  "SFProDisplayHeavy",
  "SFProDisplayThin",
  "GmarketSansMedium",
];
var observers = [];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [changeHeader, setChangeHeader] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    fonts.forEach((font) => {
      var obs = new FontFaceObserver(font);
      observers.push(obs.load(null, 200000));
    });

    Promise.all(observers)
      .then((observers) => {
        observers.map((font) => {
          return console.log(`${font.family} has loaded`);
        });
      })
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        dispatch(stopSpinner(isLoading));
      })
      .catch((err) => {
        console.warn("Error occured", err);
      });
  }, []);

  const changeNav = () => {
    if (window.innerWidth >= 768 && window.innerWidth <= 991) {
      if (window.scrollY > 600) {
        setChangeHeader(true);
      } else {
        setChangeHeader(false);
      }
    } else if (window.innerWidth >= 992 && window.innerWidth <= 1199) {
      if (window.scrollY > 800) {
        setChangeHeader(true);
      } else {
        setChangeHeader(false);
      }
    } else if (window.innerWidth >= 1200 && window.innerWidth <= 1919) {
      if (window.scrollY > 1000) {
        setChangeHeader(true);
      } else {
        setChangeHeader(false);
      }
    } else if (window.innerWidth >= 1920) {
      if (window.scrollY > 1500) {
        setChangeHeader(true);
      } else {
        setChangeHeader(false);
      }
    }
  };

  window.addEventListener("scroll", changeNav);

  return (
    <BrowserRouter>
      {isLoading && (
        <div
          id="spinner"
          className="d-flex justify-content-center align-items-center app-spinner"
        >
          <div className="spinner-grow text-primary" role="status"></div>
        </div>
      )}
      <div>
        <Header changeHeader={changeHeader} />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/mypage" component={MyPage} />
          <Route
            path="/register-investment-info"
            exact
            component={RegisterInvestInfo}
          />
          <Route
            path="/complete-invest-info-registration"
            exact
            component={CompleteInvestInfo}
          />
          <Route path="/investing" exact component={Investing} />
          <Route path="/investment-insight" component={InvestmentInsight} />
          <Route path="/company-introduction" component={AboutCompany} />
          <Route path="/customer-support/common" component={CustomerSupport} />
          <Route path="/how-to-invest" component={InvestingMethod} />
          <Route path="/investing/details" component={InvestingDetails} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/search-id" component={SearchId} />
          <Route path="/search-password" component={SearchPassword} />
          <Route path="/id-found" component={IdFound} />
          <Route path="/id-not-found" component={IdNotFound} />
          <Route path="/success" component={LoginSuccess} />
          <Route path="/register-success" component={RegisterSuccess} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
