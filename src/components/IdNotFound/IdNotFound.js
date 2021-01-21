import React from "react";
import { Link } from "react-router-dom";
import "./IdNotFound.sass";

const IdNotFound = () => {
  return (
    <div className="id-not-found">
      <p className="id-not-found__title">ID를 찾지 못했어요</p>
      <div className="id-not-found__block">
        <div className="id-not-found__box">
          <p className="id-not-found__box-title">
            귀하는 회원가입이 되어 있지 않습니다. <br />
            REAL BUY 와 함께
            <br /> 지금 부동산 투자의 꿈을 실현해보세요!
          </p>
          <Link to="/register">
            <button className="id-not-found__button">가입 하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IdNotFound;
