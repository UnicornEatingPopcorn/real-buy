import React from "react";
import { Link } from "react-router-dom";
import "./LoginSuccess.sass";
import close from "./../../assets/icons/close.png";

const LoginSuccess = () => {
  return (
    <div className="login-success">
      <div className="login-success__block">
        <div className="login-success__box">
          <div className="login-success__close-container">
            <img src={close} alt="close" className="login-success__close" />
          </div>
          <p className="login-success__box-title">홍길동님 반갑습니다.</p>
          <ul className="login-success__box-sub">
            <li>
              <p>
                <span>3 </span>
                건의 투자 예약 알람
              </p>
            </li>
            <li>
              <p>
                <span>2 </span>
                건의 투자 변동
              </p>
            </li>
          </ul>
          <p className="login-success__box-subtitle">
            내역이 있습니다. 마이페이지에서 확인해보세요
          </p>
          <div className="login-success__button-container">
            <Link to="/mypage/dashboard">
              <button className="login-success__button">
                마이페이지 확인 하기
              </button>
            </Link>
          </div>
        </div>
      </div>
      <p className="login-success__end">로그인 완료시 로그인 직전 페이지</p>
    </div>
  );
};

export default LoginSuccess;
