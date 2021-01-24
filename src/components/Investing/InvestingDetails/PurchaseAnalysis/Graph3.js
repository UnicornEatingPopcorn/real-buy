import React from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import "chartjs-plugin-datalabels";

export const mapStateToProps = (state) => {
  return {
    stopSpinner: state.stopSpinner,
  };
};

const Graph1 = ({ stopSpinner }) => {
  let barBackground;
  if (stopSpinner) {
    let context = document.getElementById("firstGraph");
    let gradient = context.getContext("2d");
    barBackground = gradient.createLinearGradient(0, 0, 50, 300);
    barBackground.addColorStop(0, "#43cbff");
    barBackground.addColorStop(1, "#3769fc");
  }

  const data = {
    labels: ["15", "16", "17", "18", "19"],
    datasets: [
      {
        backgroundColor: barBackground,
        data: [341, 280, 452, 280, 157],
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
        },
      ],

      yAxes: [
        {
          gridLines: {
            display: true,
          },
          ticks: {
            beginAtZero: true,
            stepSize: 100,
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
        display: true,
        color: "black",
        anchor: "end",
        align: "top",
      },
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <Bar data={data} id="firstGraph" options={options} />
    </div>
  );
};

export default connect(mapStateToProps, null)(Graph1);
