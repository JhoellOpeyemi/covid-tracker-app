import React from "react";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

const DataChart = ({ chartData }) => {
  let reversedData = [].concat(chartData).reverse();
  console.log(reversedData);
  const data = {
    labels: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: reversedData.map((data) => data.new_cases),
        backgroundColor: ["rgba(255, 255, 255, 0.1)"],
        borderColor: ["lightgreen"],
        borderWidth: 1,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div className="chart-group">
      <Line data={data} />
      <p className="chart-desc">
        This chart shows the data of new cases recorded for the past 1 month
      </p>
    </div>
  );
};

export default DataChart;
