import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchId.sass";

const SearchId = () => {
  const [isFound] = useState(false);

  return (
    <div className="search-id">
      <p className="search-id__title">ID 찾기</p>
      <div className="search-id__block">
        <div className="search-id__box">
          <p className="search-id__box-title">
            회원가입 시 입력한 이름과 핸드폰번호를 입력해주세요.
          </p>
          <input className="search-id__input" value="이름을 입력해 주세요" />
          <input
            className="search-id__input"
            value="휴대폰번호를 입력해 주세요"
          />

          {isFound ? (
            <Link to="/id-found">
              <button className="search-id__button">ID 찾기</button>
            </Link>
          ) : (
            <Link to="/id-not-found">
              <button className="search-id__button">ID 찾기</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchId;
