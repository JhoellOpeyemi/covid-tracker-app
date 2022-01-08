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
        label: "# of New Cases",
        data: reversedData.map((data) => data.new_cases),
        borderColor: ["#05CE91"],
        borderWidth: 1,
        pointRadius: 1,
      },
    ],
  };

  return (
    <div className="chart-group">
      <Line data={data} />
      <p className="chart-desc">
        This chart shows the data of new cases recorded for the past 2 months
      </p>
    </div>
  );
};

export default DataChart;
