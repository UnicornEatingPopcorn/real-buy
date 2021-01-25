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
    let context = document.getElementById("fourthGraph");
    if (context) {
      let gradient = context.getContext("2d");
      barBackground = gradient.createLinearGradient(0, 0, 50, 300);
      barBackground.addColorStop(0, "rgba(154, 227, 255, 0.6)");
      barBackground.addColorStop(1, "rgba(180, 231, 254, 0)");
    }
  }

  const data = {
    labels: ["0", "10", "12", "13", "14", "15", "16", "17", "18", "19"],
    datasets: [
      {
        label: [],
        fill: true,
        lineTension: 0.1,
        borderColor: "#3769fc",
        backgroundColor: barBackground,
        borderCapStyle: "butt",
        pointBackgroundColor: "#fff",
        pointRadius: 0,
        borderWidth: 1,
        data: [11, 11, 11, 11, 10, 7.5, 7, 5, 2],
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
            stepSize: 3,
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
    <div style={{ padding: "30px 20px 20px 20px" }}>
      <Line data={data} id="fourthGraph" options={options} />
    </div>
  );
};

export default connect(mapStateToProps, null)(Graph4);
