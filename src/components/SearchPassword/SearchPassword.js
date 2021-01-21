import React from "react";
import { Link } from "react-router-dom";
import "./SearchPassword.sass";

const SearchPassword = () => {
  return (
    <div className="login">
      <p className="login__title">로그인</p>
      <div className="login__block">
        <div className="login__box">
          <div className="login__row">
            <label className="login__input-title">이메일 계정 아이디</label>
            <input
              className="login__input"
              type="text"
              value="이메일 계정을 입력해 주세요"
            />
          </div>
          <div className="login__row">
            <label className="login__input-title">비밀번호</label>
            <input
              className="login__input-password login__input"
              type="text"
              value="대/소문자, 숫자, 기호 조합 8자 이상"
            />
          </div>
          <div className="login__button-container">
            <Link to="/mypage/dashboard">
              <button className="login__button">로그인 하기</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="login__buttons">
        <button className="login__add-button">ID 찾기</button>
        <button className="login__add-button">비밀번호 찾기</button>
        <Link to="/register">
          <button className="login__add-button">회원 가입하기</button>
        </Link>
      </div>
    </div>
  );
};

export default SearchPassword;
