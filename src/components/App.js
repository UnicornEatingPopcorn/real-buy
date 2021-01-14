import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import MyPage from "./MyPage/MyPage";
import Header from "./Header/Header";
import RegisterInvestInfo from "./RegisterInvestInfo/RegisterInvestInfo";
import CompleteInvestInfo from "./RegisterInvestInfo/CompleteInvestInfo/CompleteInvestInfo";
import "./App.sass";

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
      })
      .catch((err) => {
        console.warn("Error occured", err);
      });
  }, []);

  return (
    <BrowserRouter>
      {isLoading && (
        <div className="d-flex justify-content-center align-items-center app-spinner">
          <div className="spinner-grow text-primary" role="status"></div>
        </div>
      )}
      <div>
        <Header />
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
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
