import React from "react";
import DataChart from "./DataChart";
import DataFigures from "./DataFigures";
import "../styles/home.css";

const Home = ({ data }) => {
  return (
    <main className="home-page main active">
      <div className="main-wrapper">
        <div className="location-time-chart">
          <div className="location-time-frame">
            {typeof data[0] != "undefined" ? (
              <p className="location">{data[0].Country}</p>
            ) : (
              ""
            )}

            <select name="time-frame" id="time-frame" className="time-frame">
              <option value="all-time">All Time</option>
              <option value="last-7-days">Last 7 days</option>
              <option value="last-month">Last month</option>
            </select>
          </div>

          <DataChart />
        </div>

        <DataFigures data={data} />
      </div>
    </main>
  );
};

export default Home;
