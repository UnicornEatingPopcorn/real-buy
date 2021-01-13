import React from "react";
import "./CompleteInvestInfo.sass";

const CompleteInvestInfo = () => {
  return (
    <div className="container complete-register-container">
      <div className="row complete-register__block">
        <div className="col complete-register-box">
          <div className="row">
            <div className="col-12 complete-register__title">
              투자정보 등록 완료
            </div>
            <div className="col-12 complete-register__subtitle">
              <p className="complete-register__subtitle-align">
                투자정보가 정상적으로 등록되었고,
              </p>
              <p className="complete-register__subtitle-align">
                투자를 위한 가상계좌가 발급되었습니다.
              </p>
            </div>
            <div className="col-12 complete-register__blue-box">
              <p className="complete-register__blue-box_text">
                테라펀딩 가상계좌
              </p>
              <p className="complete-register__blue-box_text">
                국민은행 238-3765-8252-12
              </p>
              <p className="complete-register__blue-box_text">
                리얼바이 (홍길동)
              </p>
            </div>
            <div className="col-12 complete-register__button-column">
              <button className="complete-register__button">
                투자상품 둘러보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteInvestInfo;
