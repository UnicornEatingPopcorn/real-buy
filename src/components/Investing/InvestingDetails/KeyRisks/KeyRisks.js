import React from "react";
import "./KeyRisks.sass";

const KeyRisks = () => {
  return (
    <div className="key-risks">
      <div className="key-risks__container">
      <div className="key-risks__row">
        <div className="key-risks__col">
          <div className="key-risks__box">
            <p className="key-risks__number">risk 01.</p>
            <p className="key-risks__title">
              실현 배당수익률이 예상 배당수익률보다 낮은 경우는?
            </p>
            <ul className="key-risks__ul">
              <li>
                실질 CPI가 예상 CPI보다 낮게 상승한 경우에 배당 수익률이 낮아질
                수 있습니다.
              </li>
              <li>
                아마존이 채무 불이행 상태가 되어 임대료를 납부하지 못할 경우에
                배당 수익이 발생하지 않을 수 있습니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="key-risks__row">
        <div className="key-risks__col">
          <div className="key-risks__box">
            <p className="key-risks__number">risk 02.</p>
            <p className="key-risks__title">매각 손실이 발생할 경우는?</p>
            <ul className="key-risks__ul">
              <li>
                실질 CPI가 예상 CPI보다 낮게 상승할 경우에 발생할 수 있습니다.
              </li>
              <li>
                시장 상황이 좋지 않아 Valuation이 낮아진 경우에 발생할 수
                있습니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="key-risks__row">
        <div className="key-risks__col">
          <div className="key-risks__box">
            <p className="key-risks__number">risk 03.</p>
            <p className="key-risks__title">그 밖의 리스크가 발생할 경우는?</p>
            <ul className="key-risks__ul">
              <li>
                현지 국가의 세금 규제, 환 변동, 천재지변 등으로 손실이 발생할 수
                있습니다.
                <br /> ☞ 국내 운용사와 현지 자산관리회사에서 지속적으로 운용 및
                관리를 진행하고 있습니다.
              </li>

              <li>또한, 투자자의 손실을 최소화하기 위해 노력하고 있습니다.</li>
            </ul>
          </div>
        </div>
          </div></div>
    </div>
  );
};

export default KeyRisks;
