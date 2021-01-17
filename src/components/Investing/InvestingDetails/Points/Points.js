import React from "react";
import "./Points.sass";

const points = [
  {
    number: "Point 1.",
    title: "유럽 4위 경제권역에 위치",
    subtitle1: "- 본건이 위치한 Rhine-Ruhr 경제 권역",
    comment1: "1위 파리, 2위 런던, 3위 밀라노",
    subtitle2: "- 글로벌 기업이 밀집한 핵심 물류 입지",
    comment2: "ThyssenKrupp, Bayer등의 HQ 위치",
    subtitle3: "- 독일 물류센터의 1⁄4이 집중",
    comment3: "유럽 Logistics 밀집 벨트 중심에 위치",
  },
  {
    number: "Point 2.",
    title: "Amazon 30년 장기 임차",
    subtitle1: "- 글로벌 최대 시가총액 Amazon 임차",
    comment1: "현재 시가총액 USD 1,624 bn",
    subtitle2: "- 글장기 임차 기간 (20+5+5년)",
    comment2: " 중도해지 불가",
    subtitle3: "- Amazon Europe Core의 임대차 보증",
  },
  {
    number: "Point 3.",
    title: "안정적인 수익 창출 가능",
    subtitle1: "- 투자 기간 중 연평균 배당 수익률 8.55% ",
    comment1: "높은 배당 수익성 보유한 자산",
    subtitle2: "- 유럽 Top-tier 운용사가 체계적인 관리",
    comment2: " 현지 운용사 - La Francaise",
    subtitle3: "- 독일 현지 Deka Bank 선순위 대출 제공",
  },
];

const Points = () => {
  return (
    <>
      <div className="row points-container">
        {points.map((point, index) => {
          return (
            <div className="col-12 col-sm-6 points-col" key={index}>
              <p className="points-col__number">{point.number}</p>
              <p className="points-col__title">{point.title}</p>
              <span className="points__divider"></span>
              <p className="points-col__subtitle-first">{point.subtitle1}</p>
              <p className="points-col__comment">{point.comment1}</p>
              <p className="points-col__subtitle">{point.subtitle2}</p>
              <p className="points-col__comment">{point.comment2}</p>
              <p className="points-col__subtitle">{point.subtitle3}</p>
              <p className="points-col__comment">{point.comment3}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Points;
