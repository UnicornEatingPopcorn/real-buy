import React, { useState } from "react";
import "./MyAccount.sass";
import bank from "./../../../assets/icons/bank.png";
import logoGray from "./../../../assets/icons/logo-gray.svg";
import NoAccount from "./NoAccount/NoAccount";

const MyAccount = () => {
  const [isAccount, setIsAccount] = useState(false);

  return (
    <div className="container my-account-container">
      <div className="row">
        {isAccount ? (
          <div className="my-account-box">
            <div className="row my-account-header">
              <div className="col-12 col-md-10">
                <p className="header-title">보유 예치금</p>
                <div className="bank-info">
                  <img src={bank} className="bank-picture" alt="bank" />
                  <span className="header-subtitle">
                    고객님의 예치금과 투자금은 신한은행 신탁관리시스템에 의해
                    보호받고 있습니다.
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-2">
                <span className="sum">0 원</span>
              </div>
            </div>
            <div className="row account-info">
              <div className="col-12 col-md-4">
                <span className="account-info-title">나의 가상계좌</span>
              </div>
              <div className="col-12 col-md-8">
                <div className="icon-input-container">
                  <input
                    type="text"
                    className="account-info-input"
                    value="신한은행"
                  />
                  <img src={bank} className="icon" alt="icon" />
                </div>
                <input
                  type="text"
                  className="account-info-input"
                  value="834-9273-2323-45"
                />
                <input
                  type="text"
                  className="account-info-input"
                  value="리얼바이 (홍길동)"
                />
              </div>
            </div>
            <div className="row account-info">
              <div className="col-12 col-md-4">
                <span className="account-info-title">나의 출금계좌</span>
              </div>
              <div className="col-12 col-md-8">
                <div className="icon-input-container">
                  <input
                    type="text"
                    className="account-info-input"
                    value="신한은행"
                  />
                  <img src={bank} className="icon" alt="icon" />
                </div>
                <input
                  type="text"
                  className="account-info-input"
                  value="234847363***4"
                />
                <div className="input-button-container">
                  <input
                    type="text"
                    className="account-info-input"
                    value="홍길동"
                  />
                  <button type="button">변경하기</button>
                </div>
              </div>
            </div>
            <div className="row account-info">
              <div className="col-12 col-md-4">
                <span className="account-info-title">출금 신청금액</span>
              </div>
              <div className="col-12 col-md-8">
                <div className="input-button-container-last">
                  <input type="text" className="amount-input" value="0 원" />
                  <button type="button" className="whole">
                    전액
                  </button>
                  <button type="button" className="withdrawal">
                    출금신청
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <NoAccount />
        )}
      </div>
      <div className="row account-row">
        <div className="col">
          <p className="text">
            ※ 고객님의 가상계좌로 예치금 입금 후 투자신청이 가능합니다.
          </p>
          <p className="text">
            ※ 가상계좌 예치금은 입금시간 기준으로 24시간 동안 출금이 제한됩니다.
          </p>
          <p className="text">
            ※ 가상계좌 예치금은 고객님의 출금계좌로 환급 받으실 수 있습니다.
          </p>
          <p className="text">
            ※ 출금신청금액은 신청 후 1분 이내에 고객님의 출금계좌로 이체됩니다.
          </p>
          <p className="text text-align">
            (단, 은행 전산망 점검시간(23:25~00:35)에는 출금 불가)
          </p>
        </div>
        <div className="col account-column">
          <img src={logoGray} alt="gray logo" className="grayLogo" />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
