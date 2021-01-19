import React from "react";
import "./MainPage.sass";
import main from "./../../assets/icons/MainPage/main.jpg";
import Offers from "./Offers/Offers";
// import toBuy1 from "./../../assets/icons/MainPage/to-buy-1.svg";
// import toBuy2 from "./../../assets/icons/MainPage/to-buy-2.svg";
// import toBuy3 from "./../../assets/icons/MainPage/to-buy-3.svg";

const MainPage = () => {
  return (
    <div className="main__container">
      <img className="main__image" src={main} alt="main" />
      <div className="main__titles-centered">
        <div className="main__titles-block">
          <p className="main__title">꿈에 그리던 투자</p>
          <p className="main__subtitle">
            상상하는 세상! 현실이 되는 투자! <br />
            글로벌 랜드마크의 주인이 될 수 있는 기회
          </p>
        </div>
      </div>
      {/*<img className="main__to-buy-first" src={toBuy1} alt="main" />
      <img className="main__to-buy-second" src={toBuy2} alt="main" />
      <img className="main__to-buy-third" src={toBuy3} alt="main" />*/}
      <Offers />
    </div>
  );
};

export default MainPage;
