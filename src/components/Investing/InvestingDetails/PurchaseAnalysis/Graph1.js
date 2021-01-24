import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { connect } from "react-redux";

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
    plugins: {
      datalabels: {
        display: false,
      },
    },
  };

  return (
    <div style={{ padding: "30px 20px 20px 20px" }}>
      <HorizontalBar data={dataHorBar} id="firstGraph" options={options} />
    </div>
  );
};

export default connect(mapStateToProps, null)(Graph1);
