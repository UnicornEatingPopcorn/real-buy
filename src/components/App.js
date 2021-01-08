import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import MainPage from "./MainPage";
import MyPage from "./MyPage/MyPage";
import Header from "./Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component={MainPage} />
        <Route path="/mypage" component={MyPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
