import React from "react";
import { Link } from "react-router-dom";
import "./SearchPassword.sass";

const SearchPassword = () => {
  return (
    <div className="search-password">
      <p className="search-password__title">비밀번호 찾기</p>
      <div className="search-password__block">
        <div className="search-password__box">
          <p className="search-password__box-title">
            회원가입 시 입력한 이메일 계정을 입력해주세요.
            <br /> 비밀번호 인증 메일을 보내드립니다.
          </p>
          <input
            className="search-password__input"
            value="E-mail 주소를 입력해 주세요"
          />
          <button className="search-password__button">인증 메일 받기</button>
        </div>
      </div>
    </div>
  );
};

export default SearchPassword;
