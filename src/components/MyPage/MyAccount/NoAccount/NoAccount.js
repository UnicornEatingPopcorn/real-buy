import React from "react";
import "./NoAccount.sass";
import { Link } from "react-router-dom";
import noAccount from "./../../../../assets/icons/no-account.png";

const NoAccount = () => {
  return (
    <div className="no-account-box">
      <div className="row">
        <div className="col no-account__col">
          <p className="title">투자정보 입력하고 투자 참여하기</p>
          <p className="subtitle">
            투자 정보를 입력하고 다양한 투자와 이벤트에 참여해보세요.
            마이페이지에서 나의 투자 현황과 포인트를 확인하실 수 있습니다.
          </p>
          <img src={noAccount} alt="no account" className="picture" />
          <Link to="/register-investment-info">
            <button className="no-account__button">계좌 계설하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoAccount;
