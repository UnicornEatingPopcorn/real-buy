import React from "react";
import { Link } from "react-router-dom";
import "./RegisterSuccess.sass";
import close from "./../../assets/icons/close.png";
import smile from "./../../assets/icons/smile.png";

const RegisterSuccess = () => {
  return (
    <div className="register-success">
      <div className="register-success__block">
        <div className="register-success__box">
          <div className="register-success__close-container">
            <img src={close} alt="close" className="register-success__close" />
          </div>
          <p className="register-success__box-title">
            홍길동님 리얼바이 회원이 된것을 축하 드립니다.
          </p>
          <div className="register-success__smile-container">
            <img src={smile} alt="smile" className="register-success__smile" />
          </div>
          <p className="register-success__box-subtitle">
            리얼바이의 다양한 혜택과 정보를 담아가세요
          </p>
          <div className="register-success__button-container">
            <Link to="/mypage/dashboard">
              <button className="register-success__button">
                가상계좌 계설하기
              </button>
            </Link>
          </div>
        </div>
      </div>
      <p className="register-success__end">메인 페이지</p>
    </div>
  );
};

export default RegisterSuccess;
