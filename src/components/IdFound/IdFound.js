import React from "react";
import { Link } from "react-router-dom";
import "./IdFound.sass";

const IdFound = () => {
  return (
    <div className="id-found">
      <p className="id-found__title">ID를 찾았어요</p>
      <div className="id-found__block">
        <div className="id-found__box">
          <p className="id-found__box-title">
            귀하의 이메일 계정은
            <br />
            <span className="id-found__box-blue-title">XXX123@gmail.com</span>
            입니다.
          </p>
          <div className="id-found__buttons">
            <Link to="/login">
              <button className="id-found__button">로그인 하기</button>
            </Link>
            <Link to="/search-password">
              <button className="id-found__button">비밀번호 찾기</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdFound;
