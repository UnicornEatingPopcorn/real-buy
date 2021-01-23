import React from "react";
import { Line } from "react-chartjs-2";
import won from "./../../../../assets/icons/won.svg";
import "./Graph.sass";

const graphInfo = [
  {
    title: "예상 배당 수익률",
    subtitle: "(연환산 수익률)",
    amount: "0,00%",
  },
  {
    title: "예상 총 수익률",
    subtitle: "(연환산 수익률)",
    amount: "0,00%",
  },
];

const Graph = () => {
  const data = {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
    ],

    datasets: [
      {
        label: [],
        fill: false,
        lineTension: 0.4,
        borderColor: "white",
        pointBackgroundColor: "#fff",
        pointRadius: 0,
        borderWidth: 1,
        data: [75, 60, 50, 75, 80, 100, 80, 90, 100, 133, 100, 105, 110, 100],
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
            userCallback() {
              return "";
            },
          },
        },
      ],

      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            userCallback() {
              return "";
            },
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
    <div className="graph-container">
      <div className="graph-info">
        <div className="graph-info__money">
          <span className="graph-info__title">예상 총 수익률</span>
          <div>
            <span className="graph-info__amount">153.93</span>
            <span className="graph-info__won">₩</span>
          </div>
          <p className="graph-info__period">20.11.09 ~ 21.02.11(현재)</p>
        </div>
        <Line data={data} options={options} />
      </div>

      <div className="graph-decoration"></div>
        <span className="graph-data__price">
          <span className="graph-data__price-sum">+133.2</span>
            <img src={won} alt="won" className="graph-data__price-won" />
              <span className="graph-data__price-tick"></span>
                <span className="graph-data__price-pointer"></span>
        </span>
      <div className="container graph__text-container">
        <div className="row">
          {graphInfo.map((graph, index) => {
            return (
              <div className="col graph-block" key={index}>
                <p className="graph-block__title">{graph.title}</p>
                <p className="graph-block__subtitle">{graph.subtitle}</p>
                <div className="graph-block__divider"></div>
                <p className="graph-block__amount">{graph.amount}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Graph;
