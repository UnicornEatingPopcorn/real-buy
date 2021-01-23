import React from "react";
import "./PaymentSchedule.sass";
import goBack from "./../../../assets/icons/go-back.png";
import goFurther from "./../../../assets/icons/go-further.png";
import grayPointer from "./../../../assets/icons/gray-pointer.png";
import bluePointer from "./../../../assets/icons/blue-pointer.png";
import { Line } from "react-chartjs-2";

const PaymentSchedule = () => {
  const data = {
    labels: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],

    datasets: [
      {
        fill: false,
        data: [0, 500, 1000],
        borderColor: "transparent",
        pointRadius: 0,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    layout: {
      padding: {
        top: 30,
        bottom: 40,
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],

      yAxes: [
        {
          gridLines: {
            display: true,
          },
          ticks: {
            userCallback(value) {
              if (value / 500 === 2 || value / 500 === 1 || value / 500 === 0) {
                return `${value}원`;
              }
            },
          },
          stacked: true,
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
    <div className="container schedule-container">
      <div className="row schedule-row no-gutters">
        <div className="col-6 col-md-3 col-lg-2 schedule-date">
          <img src={goBack} alt="go back" className="schedule_arrow" />
          <span className="schedule-year">&nbsp; 2020 &nbsp;</span>
          <img src={goFurther} alt="go further" className="schedule_arrow" />
        </div>
        <div className="col-6 col-md-3 schedule-graph-name">
          <span className="graph-name">월별 상환 그래프</span>
        </div>
        <span className="schedule-divider"></span>
        <div className="col-md-3 info-column-center">
          <img src={bluePointer} alt="blue pointer" className="pointer-blue" />
          <span className="legend">확정금액</span>
          <img src={grayPointer} alt="gray pointer" className="pointer-gray" />
          <span className="legend">예정금액</span>
        </div>
        <div className="col-md-3 offset-lg-0 col-lg-4 info-column">
          <span className="profit-repayment">수익금 상환</span>
          <span className="principal-payment">원금상환</span>
        </div>
        <div className="col-6 mobile-visible">
          <span className="profit-repayment">수익금 상환</span>
          <span className="principal-payment">원금상환</span>
        </div>
        <div className="col-6 mobile-visible">
          <img src={bluePointer} alt="blue pointer" className="pointer-blue" />
          <span className="legend">확정금액</span>
          <img src={grayPointer} alt="gray pointer" className="pointer-gray" />
          <span className="legend">예정금액</span>
        </div>
      </div>
      <div className="row schedule-row">
        <div className="col graph">
          <Line data={data} options={options} />
        </div>
      </div>
      <div className="row schedule-row">
        <div className="col today">
          <img src={goBack} alt="go back" className="schedule_arrow" />
          <span className="schedule-year">&nbsp; 2020년 12월 &nbsp;</span>
          <img src={goFurther} alt="go further" className="schedule_arrow" />
        </div>
      </div>
      <div className="row schedule-row">
        <div className="col add-block">
          <div className="row graph-row">
            <div className="graph-title">투자 상품</div>
            <div className="graph-title">지급일</div>
            <div className="graph-title">예상 배당금액</div>
            <div className="graph-title">실현 배당금액</div>
            <div className="graph-title">세후 수익금</div>
          </div>
          <div className="row">
            <div className="col">
              <p className="description">현재 투자한 상품이 없습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSchedule;
