import React from "react";
import "./AllInfo.sass";
import image1 from "./../../../../assets/icons/all-info-card1.png";
import image2 from "./../../../../assets/icons/all-info-card2.png";
import image3 from "./../../../../assets/icons/all-info-card3.png";
import stars5 from "./../../../../assets/icons/5_stars.png";
import stars4 from "./../../../../assets/icons/4_stars.png";

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
            <div
              className="col-10 col-sm-6 col-lg-4 all-info__card"
              key={index}
            >
              <img
                src={el.image}
                alt="main"
                className="all-info__card-picture"
              />
              <div className="all-info__card-body container">
                <div className="row">
                  <div className="col-4 all-info__card-small-box">
                    <p className="card-small-title">수익성</p>
                    <img src={stars5} alt="5 stars" className="card-picture" />
                  </div>
                  <div className="col-4 all-info__card-small-box">
                    <p className="card-small-title">수익성</p>
                    <img src={stars4} alt="4 stars" className="card-picture" />
                  </div>
                  <div className="col-4 all-info__card-small-box">
                    <p className="card-small-title">투자 만기</p>
                    <p>{el.year}</p>
                  </div>
                  <div className="col-6 all-info__card-large-box">
                    <p className="card-small-title">배당수익률</p>
                    <div className="card-info">
                      <p className="count">연&nbsp; &nbsp;</p>
                      <p className="percentage">{el.dividendYield}</p>
                      <p className="count">%</p>
                    </div>
                  </div>
                  <div className="col-6 all-info__card-large-box">
                    <p className="card-small-title">총 수익률</p>
                    <div className="card-info">
                      <p className="count">연&nbsp; &nbsp;</p>
                      <p className="percentage">{el.totalReturn}</p>
                      <p className="count">%</p>
                    </div>
                  </div>
                  <p className="comment">(매각차이 포함)</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllInfo;
