import React from "react";
import "./LogoutModal.sass";

const LogoutModal = ({ displayModal, modalOpenValue }) => {
  const onCloseModal = (event) => {
    if (event.target.id !== "box") {
      displayModal(!modalOpenValue);
    }
  };

  return (
    <div className="logout-modal row" id="bluredBody" onClick={onCloseModal}>
      <p className="logout-modal__title">로그아웃 하시겠습니까?</p>
        <div className="logout-modal__box col" id="box">
        <div className="row logout-modal__row">
          <p className="logout-modal__text">
            현재 홍길동 님의 로그인 계정은 <span className="logout-modal__blue-text">Hong123@gmail.com</span> 입니다.
          </p>
        </div>
        <div className="row logout-modal__buttons">
          <button className="logout-modal__button">취소 하기</button>
          <button className="logout-modal__button">로그아웃 하기</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
