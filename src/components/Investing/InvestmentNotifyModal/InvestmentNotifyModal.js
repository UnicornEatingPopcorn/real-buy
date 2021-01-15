import React from "react";
import "./InvestmentNotifyModal.sass";
import close from "./../../../assets/icons/close.png";

const InvestmentNotifyModal = ({ displayModal, modalOpenValue }) => {
  const onCloseModal = (event) => {
    if (event.target.id !== "box") {
      displayModal(!modalOpenValue);
    }
  };

  return (
    <div
      className="investment-notify-modal row"
      id="bluredBody"
      onClick={onCloseModal}
    >
      <p className="investment-notify-modal__title">투자 알림 신청</p>
      <div className="investment-notify-modal__box col" id="box">
        <span className="investment-notify-modal__close-button">
          <img
            src={close}
            alt="close button"
            className="investment-notify-modal__close"
            onClick={onCloseModal}
          />
        </span>
        <div className="row investment-notify-modal__row">
          <div className="col-6 investment-notify-modal__first-col">
            <p className="investment-notify-modal__name">투자상품 알림 신청</p>
            <p className="investment-notify-modal__text">
              리얼바이의 투자 상품 알림은 카카오톡으로 받아볼 수 있습니다.
            </p>
            <p className="investment-notify-modal__text">
              지금 카카오톡 친구를 추가하고, 빠른투자 알림과 다양한 이벤트
              소식을 받아보세요.
            </p>
            <button className="investment-notify-modal__kakao-button">
              카카오톡 알람받기
            </button>
          </div>
          <div className="col">
            <p className="investment-notify-modal__name">리얼바이 회원가입</p>
            <p className="investment-notify-modal__text">
              아직 리얼바이 회원이 아니신가요?
            </p>
            <p className="investment-notify-modal__text">
              간단한 회원 가입만으로, 투자에 대한 정보를 받아보고 투자할 수
              있습니다.
            </p>
            <button className="investment-notify-modal__member">
              회원가입하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentNotifyModal;
