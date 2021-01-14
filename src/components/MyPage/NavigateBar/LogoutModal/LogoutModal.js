import React from "react";
import "./LogoutModal.sass";

const LogoutModal = () => {
  return (
    <div className="logout-modal" tabIndex="-1">
      <div className="logout-modal__box">
        <div className="row logout-modal__row">
          <p>현재 홍길동 님의 로그인 계정은 Hong123@gmail.com 입니다.</p>
        </div>
        <div className="row logout-modal__buttons">
          <button>취소 하기</button>
          <button>로그아웃 하기</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
