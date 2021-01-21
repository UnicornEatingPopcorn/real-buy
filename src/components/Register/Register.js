import React from "react";
import "./Register.sass";
import arrowRight from "./../../assets/icons/arrow-right.svg";

const Register = () => {
  return (
    <div className="register">
      <p className="register__title">회원가입</p>
      <div className="register__align">
        <div className="register__box">
          <div className="register__row">
            <label className="register__input-title">이메일 계정 아이디</label>
            <input
              className="register__input-main register__input-additional-rule"
              type="text"
              value=""
            />
            <button className="register__input-button">중복확인</button>
          </div>
          <div className="register__row">
            <label className="register__input-title">비밀번호</label>
            <input
              className="register__input-main"
              type="text"
              value="대/소문자, 숫자, 기호 조합 8자 이상"
            />
          </div>
          <div className="register__row">
            <label className="register__input-title">비밀번호 확인</label>
            <input
              className="register__input-main"
              type="text"
              value="비밀번호를 다시 한번 입력해주세요"
            />
          </div>
          <div className="register__row">
            <label className="register__input-title">이름</label>
            <input className="register__input-main" type="text" value="" />
          </div>
          <div className="register__row register__row-last">
            <label className="register__input-title">휴대폰 번호</label>
            <div className="register__input-align">
              <input
                className="register__input-main is-invalid"
                type="text"
                value=""
              />
              <div className="invalid-feedback register__error">
                * 휴대폰 인증은 쿠폰 제공을 위해 진행합니다.
              </div>
            </div>
            <button className="register__input-button-last register__input-button">
              인증하기
            </button>
            <label className="register__input-title-last register__input-title">
              인증번호 입력
            </label>
            <input className="register__input" type="text" value="" />
          </div>
          <div className="register__first-checkbox-block">
            <input
              type="checkbox"
              className="form-check-input register-check "
              id="allTerms"
            />
            <label
              className="form-check-label register__checkbox-label"
              for="allTerms"
            >
              아래의 약관에 모두 동의 하고 투자 회원 가입 하기
            </label>
          </div>

          <div className="row no-gutters register__row-final">
            <div className="col-12 col-sm-6">
              <div className="register__row-col">
                <input
                  type="checkbox"
                  className="form-check-input register-check "
                  id="personal"
                />
                <label
                  className="form-check-label register__small-label"
                  for="personal"
                >
                  개인정보 수집/이용
                </label>
                <p className="register__message">필수</p>
                <img
                  src={arrowRight}
                  alt="arrow right"
                  className="register__arrow"
                />
              </div>
              <div className="register__row-col">
                <input
                  type="checkbox"
                  className="form-check-input register-check "
                  id="carrier"
                />
                <label
                  className="form-check-label register__small-label"
                  for="carrier"
                >
                  통신사 이용약관
                </label>
                <p className="register__message">필수</p>
                <img
                  src={arrowRight}
                  alt="arrow right"
                  className="register__arrow"
                />
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="register__row-col">
                <input
                  type="checkbox"
                  className="form-check-input register-check "
                  id="service"
                />
                <label
                  className="form-check-label register__small-label"
                  for="service"
                >
                  서비스 이용약관
                </label>
                <p className="register__message">필수</p>
                <img
                  src={arrowRight}
                  alt="arrow right"
                  className="register__arrow"
                />
              </div>
              <div className="register__row-col">
                <input
                  type="checkbox"
                  className="form-check-input register-check "
                  id="party"
                />
                <label
                  className="form-check-label register__small-label"
                  for="party"
                >
                  개인정보 제3자 제공
                </label>
                <img
                  src={arrowRight}
                  alt="arrow right"
                  className="register__arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
