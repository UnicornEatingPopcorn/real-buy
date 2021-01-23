import React, { useEffect, useState } from "react";
import "./PurchaseAnalysis.sass";
import graph2 from "./../../../../assets/icons/PurchaseAnalysis/graph2.png";
import graph3 from "./../../../../assets/icons/PurchaseAnalysis/graph3.png";
import graph4 from "./../../../../assets/icons/PurchaseAnalysis/graph4.png";
import arrowLeft from "./../../../../assets/icons/PurchaseAnalysis/arrow-left.png";
import arrowRight from "./../../../../assets/icons/PurchaseAnalysis/arrow-right.png";
import { HorizontalBar } from "react-chartjs-2";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Dot,
  Slide,
  Slider,
} from "pure-react-carousel";
import { connect } from "react-redux";
import "pure-react-carousel/dist/react-carousel.es.css";

export const mapStateToProps = (state) => {
  return {
    stopSpinner: state.stopSpinner,
  };
};

const PurchaseAnalysis = ({ stopSpinner }) => {
  let barBackground;
  if (stopSpinner) {
    let context = document.getElementById("firstGraph");
    let gradient = context.getContext("2d");
    barBackground = gradient.createLinearGradient(150, 200, 80, 0);
    barBackground.addColorStop(0, "#43cbff");
    barBackground.addColorStop(1, "#3769fc");
  }

  const dataHorBar = {
    labels: ["독일", "영국", "프랑스", "네덜란드", "폴란드"],
    datasets: [
      {
        backgroundColor: barBackground,
        data: [8.5, 6.75, 6.2, 4.6, 2.3],
        maxBarThickness: 17,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            userCallback(value) {
              if (!(value % 2)) {
                return value;
              }
            },
            beginAtZero: true,
          },
        },
      ],

      yAxes: [
        {
          gridLines: {
            display: true,
          },
        },
      ],
    },
    tooltips: {
      enabled: true,
      mode: "index",
      intersect: true,
    },
  };
  return (
    <div className="purchase-analysis__container">
      <div className="purchase-analysis__row">
        <div className="purchase-analysis__big-box">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={150}
            totalSlides={4}
          >
            <div>
              <Slider className="purchase-analysis__slider">
                <Slide index={0}>
                  <span className="purchase-analysis__title">
                    유럽 최대의 물류센터 투자 시장
                  </span>
                  <div style={{ padding: "20px" }}>
                    <HorizontalBar
                      data={dataHorBar}
                      id="firstGraph"
                      options={options}
                    />
                  </div>
                </Slide>
                <Slide index={1}>
                  <span className="purchase-analysis__title">
                    독일의 5대 물류센터 투자 시장
                  </span>
                  <img
                    src={graph3}
                    alt="graph"
                    className="purchase-analysis__picture"
                  />
                </Slide>
                <Slide index={2}>
                  {" "}
                  <span className="purchase-analysis__title">
                    뒤셀도르프 시장 분석 (공급 시장)
                  </span>
                  <img
                    src={graph4}
                    alt="graph"
                    className="purchase-analysis__picture"
                  />
                </Slide>
              </Slider>
              <div className="purchase-analysis__dots">
                <Dot slide={0}></Dot>
                <Dot slide={1}></Dot>
                <Dot slide={2}></Dot>
              </div>
              <div className="purchase-analysis__arrows">
                <ButtonBack className="purchase-analysis__arrow">
                  <img
                    src={arrowLeft}
                    alt="arrow left"
                    className="purchase-analysis__pic"
                  />
                </ButtonBack>
                <ButtonNext className="purchase-analysis__arrow">
                  <img
                    src={arrowRight}
                    alt="arrow right"
                    className="purchase-analysis__pic"
                  />
                </ButtonNext>
              </div>
            </div>
          </CarouselProvider>
        </div>
        <div className="purchase-analysis__big-box">
          <span className="purchase-analysis__title">주요 Comments</span>
          <div className="purchase-analysis__block-first">
            <p className="purchase-analysis__subtitle">
              1. 유럽 최대의 물류센터 투자 시장
            </p>
            <p className="purchase-analysis__definition">
              - 독일 물류센터 투자 시장은 안정성과 수익성의 균형 갖춘 시장
            </p>
            <p className="purchase-analysis__definition">
              - 유럽 내 최대의 투자 수요를 보유한 독일 물류센터 시장
            </p>
          </div>
          <div className="purchase-analysis__block">
            <p className="purchase-analysis__subtitle">
              2. 독일 내 5대 물류 시장 (뒤셀도르프 권역)
            </p>
            <p className="purchase-analysis__definition">
              - Rhine-Ruhr권역은 뒤셀도로프, 퀼른, 도르트문트 등이 포함
            </p>
            <p className="purchase-analysis__definition">
              - 독일 내 최대 경제 권역 (Rhine-Ruhr 권역)
            </p>
          </div>
          <div className="purchase-analysis__block">
            <p className="purchase-analysis__subtitle">
              3. 수요 공급 균형 갖춘 뒤셀도르프의 물류센터 시장
            </p>
            <p className="purchase-analysis__definition">
              - 물류센터 공급이 점차 감소 (물류센터에 대해 신규 승인 제한)
            </p>
            <p className="purchase-analysis__definition">
              - 향후 물류센터에 대한 수요는 계속 증가할 것
            </p>
          </div>
        </div>
      </div>
      <div className="purchase-analysis__row">
        <div className="purchase-analysis__small-box">
          <span className="purchase-analysis__title">매입 금액 추이</span>
          <img src={graph2} className="purchase-analysis__graph2" />
        </div>
        <div className="purchase-analysis__small-box">
          <span className="purchase-analysis__title">분석 Comments</span>
          <div className="purchase-analysis__block-first">
            <p className="purchase-analysis__subtitle ">
              1. 독일의 낮은 금리 영향으로 NIY (자본환원율) 지속 하락
            </p>
            <p className="purchase-analysis__definition">
              - 향후 저금리 기조 유지 예상
            </p>
          </div>
          <div className="purchase-analysis__block">
            <p className="purchase-analysis__subtitle">
              2. 투자 수요 증가에 따른 NIY (자본환원율) 하락
            </p>
            <p className="purchase-analysis__definition">
              - 본 건은 시장 평균 NIY 대비 높은 매입 NIY (4.35%)
            </p>
            <p className="purchase-analysis__definition">
              - 매각 시 매각 차익 발생 가능성 높음
            </p>
          </div>
        </div>
      </div>

      <div className="purchase-analysis__row">
        <div className="purchase-analysis__terms">
          <p className="purchase-analysis__terms-title">*용어 정리</p>
          <div className="purchase-analysis__terms-box">
            <p className="purchase-analysis__terms-subtitle">
              Cap rate (한국과 미국 내 자본 환원율): NOI / 부동산 가치 Net
            </p>
            <p className="purchase-analysis__terms-subtitle">
              Initial Yield (유럽 내 자본 환원율): NOI / (부동산 가치 + 취득
              비용)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(PurchaseAnalysis);
