import React from "react";
import "./MemberInfo.sass";

const MemberInfo = () => {
  return (
    <div className="container member-info-container">
      <div className="member-info-box">
        <div className="row">
          <label className="col col-sm-4 form-label member-info__label">
            이름
          </label>
          <div className="col col-sm-8">
            <input type="text" value="홍길동" className="member-info__input" />
          </div>
        </div>
        <div className="row">
          <label className="col col-sm-4 form-label member-info__label">
            아이디
          </label>
          <div className="col col-sm-8">
            <input
              type="text"
              value="hong2@gmail.com"
              className="member-info__input"
            />
          </div>
        </div>
        <div className="row">
          <label className="col col-sm-4 form-label member-info__label">
            비밀번호
          </label>
          <div className="col col-sm-8">
            <input
              type="text"
              value="*****"
              className="member-info__input input-to-change"
            />

            <button className="button-to-change">변경하기</button>
          </div>
        </div>
        <div className="row">
          <label className="col col-sm-4 form-label member-info__label">
            휴대전화
          </label>
          <div className="col col-sm-8">
            <input
              type="text"
              value="010-234-3647"
              className="member-info__input input-to-change"
            />
            <button className="button-to-change">변경하기</button>
          </div>
        </div>
        <div className="row">
          <label className="col col-sm-4 form-label member-info__label">
            이메일
          </label>
          <div className="col col-sm-8">
            <input
              type="text"
              value="hong2@gmail.com"
              className="member-info__input"
            />
          </div>
        </div>
        <div className="row">
          <label className="col col-sm-4 form-label member-info__label">
            주민번호
          </label>
          <div className="col col-sm-8">
            <input
              type="text"
              value="900312-1*****3"
              className="member-info__input"
            />
          </div>
        </div>
        <div className="row checkbox-row">
          <label className="col-7 col-sm-4 form-label member-info__label">
            현금영수증 발행
          </label>
          <div className="col col-sm-8 form-check member-info__form-check">
            <div className="row">
              <div className="col col-md-4">
                <input
                  type="checkbox"
                  className="form-check-input member-info-check "
                  id="발행함"
                />
                <label className="form-check-label checkbox-label" for="발행함">
                  발행함
                </label>
              </div>
              <div className="col">
                <input
                  type="checkbox"
                  className="form-check-input member-info-check"
                  id="발행안함"
                />
                <label
                  className="form-check-label checkbox-label"
                  for="발행안함"
                >
                  발행안함
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row checkbox-row">
          <label className="col-7 col-sm-4 form-label member-info__label">
            마케팅 동의
          </label>
          <div className="col col-sm-8 form-check member-info__form-check">
            <div className="row">
              <div className="col">
                <input
                  type="checkbox"
                  className="form-check-input member-info-check "
                  id="이메일 수신동의"
                />
                <label
                  className="form-check-label checkbox-label"
                  for="이메일 수신동의"
                >
                  이메일 수신동의
                </label>
              </div>
              <div className="col">
                <input
                  type="checkbox"
                  className="form-check-input member-info-check"
                  id="SMS"
                />
                <label className="form-check-label checkbox-label" for="SMS">
                  SMS 수신동의
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row member-info__last-row">
          <div className="col-md-4"></div>
          <div className="col col-sm-7 member-info__comment">
            ※ 알림 수신 동의시 리얼바이 투자상품 오픈 정보/이벤트 소식 등을 제공
            받으실 수 있습니다.
          </div>
        </div>
        <div className="row">
          <div className="col member-info__button-column">
            <button className="member-info__modify-button">수정 완료</button>
          </div>
        </div>
      </div>
      <div className="row member-info__message-row">
        <div className="col-12 col-md-6 col-lg-4 col-xl-5 member-info__message">
          리얼바이의 서비스를 더 이상 이용하지 않는다면
        </div>
        <div className="col-12 col-md-6 col-lg-8 col-xl-7">
          <button className="member-info__withdrawal-button">
            회원 탈퇴하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberInfo;
