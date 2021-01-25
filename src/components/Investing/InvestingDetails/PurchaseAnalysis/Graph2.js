import React from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

export const mapStateToProps = (state) => {
  return {
    stopSpinner: state.stopSpinner,
  };
};

const Graph2 = ({ stopSpinner }) => {
  let barBackground;
  let hover;
  if (stopSpinner) {
    let context = document.getElementById("secondGraph");
    if (context) {
      let gradient = context.getContext("2d");
      hover = gradient.createLinearGradient(0, 0, 0, 300);
      hover.addColorStop(0, "#3769fc");
      hover.addColorStop(1, "#43cbff");
      barBackground = gradient.createLinearGradient(0, 0, 0, 300);
      barBackground.addColorStop(0, "#7597fb");
      barBackground.addColorStop(1, "#62cef7");
    }
  }

  const data = {
    labels: ["베를린", "뒤셀도르프", "프랑크 프르트", " 함부르크", " 뮌헨"],
    datasets: [
      {
        backgroundColor: barBackground,
        data: [380, 390, 300, 200, 360, 600],
        maxBarThickness: 17,
        hoverBackgroundColor: hover,
      },
    ],
  };

  const options = {
    type: "bar",
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
            zeroLineColor: "black",
          },
          ticks: {
            beginAtZero: true,
            stepSize: 200,
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
    <div style={{ padding: "20px" }}>
      <Bar data={data} id="secondGraph" options={options} />
    </div>
  );
};

export default connect(mapStateToProps, null)(Graph2);
