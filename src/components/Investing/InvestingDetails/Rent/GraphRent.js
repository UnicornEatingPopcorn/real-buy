import React from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import "chartjs-plugin-datalabels";

export const mapStateToProps = (state) => {
  return {
    stopSpinner: state.stopSpinner,
  };
};

const Graph4 = ({ stopSpinner }) => {
  let barBackground;
  if (stopSpinner) {
    let context = document.getElementById("newGraph");
    let gradient = context.getContext("2d");
    barBackground = gradient.createLinearGradient(0, 0, 0, 300);
    barBackground.addColorStop(0, "rgba(154, 227, 255, 0.6)");
    barBackground.addColorStop(1, "rgba(180, 231, 254, 0)");
  }

  const data = {
    labels: [
      "0",
      "10",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20F",
      "21F",
      "22F",
      "23F",
      "24F",
      "25F",
    ],
    datasets: [
      {
        label: [],
        fill: true,
        lineTension: 0.1,
        borderColor: "#3769fc",
        backgroundColor: barBackground,
        borderCapStyle: "butt",
        pointBackgroundColor: "#fff",
        pointRadius: 2,
        pointBackgroundColor: "#3769fc",
        borderWidth: 1,
        data: [
          1.0,
          2.7,
          2.2,
          1.8,
          0.9,
          0.7,
          0.5,
          1.6,
          2.3,
          1.6,
          0.7,
          1.0,
          1.3,
          1.4,
          1.6,
          2.0,
        ],
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
            display: true,
            color: "white",
          },
        },
      ],

      yAxes: [
        {
          gridLines: {
            display: true,
            color: "white",
          },
          ticks: {
            beginAtZero: true,
            stepSize: 0.5,
          },
        },
      ],
    },
    tooltips: {
      enabled: true,
      mode: "index",
      intersect: true,
    },
    plugins: {
      datalabels: {
        display: false,
      },
    },
  };

  return (
    <div style={{ padding: "10px 20px 20px" }}>
      <Line data={data} id="newGraph" options={options} />
    </div>
  );
};

export default connect(mapStateToProps, null)(Graph4);
