import React from "react";
import "./AllInfo.sass";
import image1 from "./../../../../assets/icons/all-info-card1.png";
import image2 from "./../../../../assets/icons/all-info-card2.png";
import image3 from "./../../../../assets/icons/all-info-card3.png";
import stars5 from "./../../../../assets/icons/5_stars.png";
import stars4 from "./../../../../assets/icons/4_stars.png";
import InvestmentCard from "./../../../ui-kit/InvestmentCard/InvestmentCard";

const all = [
  {
    year: "2024년",
    dividendYield: "8.6",
    totalReturn: "8.6",
    image: image1,
  },
  {
    year: "2025년",
    dividendYield: "7.9",
    totalReturn: "9.3",
    image: image2,
  },
  {
    year: "2024년",
    dividendYield: "6.7",
    totalReturn: "8.7",
    image: image3,
  },
];

const AllInfo = () => {
  return (
    <div className="container all-info-container">
      <div className="row all-info-row">
        <div className="col all-info-box">
          <p className="all-info-title">총 투자 금액</p>
          <p className="all-info-count">&nbsp; 0원</p>
        </div>
      </div>
      <div className="row all-info-row">
        {all.map((el, index) => {
          return (
            <InvestmentCard
              investmentObject={el}
              index={index}
              stars5={stars5}
              stars4={stars4}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllInfo;
