import React from "react";
import DataChart from "./DataChart";
import DataFigures from "./DataFigures";
import "../styles/home.css";

const Home = ({ data, chartData }) => {
  return (
    <main className="home-page main active">
      <div className="main-wrapper">
        <div className="location-chart">
          <>
            {typeof data[0] != "undefined" ? (
              <p className="location">{data[0].Country}</p>
            ) : (
              ""
            )}
          </>

          <DataChart chartData={chartData} />
        </div>

        <DataFigures data={data} />
      </div>
    </main>
  );
};

export default Home;
