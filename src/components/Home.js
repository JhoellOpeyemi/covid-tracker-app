import React from "react";
import DataChart from "./DataChart";
import DataFigures from "./DataFigures";

const Home = () => {
  return (
    <main className="home-page main active">
      <div className="main-wrapper">
        <div className="location-time-frame">
          <p className="location">World</p>
          <select name="time-frame" id="time-frame" className="time-frame">
            <option value="all-time">All Time</option>
            <option value="last-7-days">Last 7 days</option>
            <option value="last-month">Last month</option>
          </select>
        </div>

        <DataChart />
        <DataFigures />
      </div>
    </main>
  );
};

export default Home;
