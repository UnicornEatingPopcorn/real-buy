import React from "react";
import "./Investing.sass";
import bell from "./../../assets/icons/bell.png";
import image1 from "./../../assets/icons/all-info-card1.png";
import image2 from "./../../assets/icons/all-info-card2.png";
import image3 from "./../../assets/icons/all-info-card3.png";
import stars5 from "./../../assets/icons/5_stars.png";
import stars4 from "./../../assets/icons/4_stars.png";
import InvestmentCard from "./../../components/ui-kit/InvestmentCard/InvestmentCard";
import Footer from "./../../components/Footer/Footer";

const allObjects = [
  {
    year: "2024년",
    dividendYield: "8.6",
    totalReturn: "8.6",
    image: image1,
    text: "Amazon의 장기 임차 안정적이며 높은 배당 수익률",
  },
  {
    year: "2025년",
    dividendYield: "7.9",
    totalReturn: "9.3",
    image: image2,
    text: "(주) 쿠팡의 장기 임차 안정적이며 높은 배당 수익률",
  },
  {
    year: "2024년",
    dividendYield: "6.7",
    totalReturn: "8.7",
    image: image3,
    text: "(주)삼성 SDS의 본사 사옥 안정적이며 높은 배당 수익률",
  },
];

const Investing = () => {
  return (
    <>
      <div className="investing-container">
        <div className="row">
          <div className="col investing__title-col">
            <p className="investing__title">신규 투자 상품</p>
            <div className="investing__notify">
              <img src={bell} alt="bell" className="investing__bell" />
              <p className="investing__notify-title">투자 알림</p>
            </div>
          </div>
        </div>
        <div className="row investing__row">
          {allObjects.map((el, index) => {
            return (
              <InvestmentCard
                investmentObject={el}
                index={index}
                stars5={stars5}
                stars4={stars4}
                style={{ maxHeight: "390px" }}
              >
                <div className="investing__info">{el.text}</div>
              </InvestmentCard>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Investing;
