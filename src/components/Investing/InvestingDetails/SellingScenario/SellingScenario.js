import React from "react";
import "./SellingScenario.sass";

const SellingScenario = () => {
  return (
    <div className="selling-scenario">
      <div className="selling-scenario__row">
        <div className="selling-scenario__col">
          <div className="selling-scenario__box">
            <p className="selling-scenario__number">scenario 01.</p>
            <p className="selling-scenario__title">시장 매각</p>
            <ul className="selling-scenario__ul">
              <li>
                투자 만기가 도래하기 1년 전부터 시장 매각 진행 예정할
                예정입니다. (현지 입찰 방식)
              </li>
              <li>
                현재 주변 시세보다 낮은 가격에 매입하여 높은 가격으로 매각
                가능성 높은 자산입니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="selling-scenario__row">
        <div className="selling-scenario__col">
          <div className="selling-scenario__box">
            <p className="selling-scenario__number">scenario 02.</p>
            <p className="selling-scenario__title">시장 매각 불가</p>
            <ul className="selling-scenario__ul">
              <li>
                시장 상황이 좋지 않을 경우 펀드 만기를 연장하여 높은 배당수익
                수취하고 이후 매각으로 진행할 수 있습니다.
              </li>
              <li>국내 다른 매수자 에게 매입금액으로 양도할 수 있습니다. </li>
            </ul>
            <p className="selling-scenario__subtitle">
              ☞ 상황에 따라 원금 상환이 늦춰질 수 있으나 높은 배당수익은 유지가
              될 것입니다.
            </p>
          </div>
        </div>
      </div>
      <div className="selling-scenario__row">
        <div className="selling-scenario__col">
          <div className="selling-scenario__box">
            <p className="selling-scenario__number">scenario 03.</p>
            <p className="selling-scenario__title">REAL BUY 보유 지분만 매각</p>
            <p className="selling-scenario__subtitle">
              시장 상황이 좋지 않을 경우 REAL BUY 지분만 다른 매수자에게
              양도하는 방식으로 매각이 가능합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingScenario;
