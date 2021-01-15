import React from "react";
import "./InvestmentCard.sass";

const InvestmentCard = ({
  investmentObject,
  index,
  stars4,
  stars5,
  children,
  style,
}) => {
  return (
    <div style={style}>
      <div
        className="col-10 col-sm-6 col-lg-4 investment-card__card"
        key={index}
      >
        <img
          src={investmentObject.image}
          alt="main"
          className="investment-card__card-picture"
        />
        <div className="investment-card__card-body container">
          <div className="row">
            <div className="col-4 investment-card__card-small-box">
              <p className="card-small-title">수익성</p>
              <img src={stars5} alt="5 stars" className="card-picture" />
            </div>
            <div className="col-4 investment-card__card-small-box">
              <p className="card-small-title">수익성</p>
              <img src={stars4} alt="4 stars" className="card-picture" />
            </div>
            <div className="col-4 investment-card__card-small-box">
              <p className="card-small-title">투자 만기</p>
              <p>{investmentObject.year}</p>
            </div>
            <div className="col-6 investment-card__card-large-box">
              <p className="card-small-title">배당수익률</p>
              <div className="card-info">
                <p className="count">연&nbsp; &nbsp;</p>
                <p className="percentage">{investmentObject.dividendYield}</p>
                <p className="count">%</p>
              </div>
            </div>
            <div className="col-6 investment-card__card-large-box">
              <p className="card-small-title">총 수익률</p>
              <div className="card-info">
                <p className="count">연&nbsp; &nbsp;</p>
                <p className="percentage">{investmentObject.totalReturn}</p>
                <p className="count">%</p>
              </div>
            </div>
            <p className="comment">(매각차이 포함)</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default InvestmentCard;
