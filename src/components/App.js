import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import MyPage from "./MyPage/MyPage";
import Header from "./Header/Header";
import RegisterInvestInfo from "./RegisterInvestInfo/RegisterInvestInfo";
import CompleteInvestInfo from "./RegisterInvestInfo/CompleteInvestInfo/CompleteInvestInfo";

const App = () => {
  return (
    <BrowserRouter>
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
