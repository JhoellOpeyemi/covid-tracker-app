import React from "react";
import DataFigures from "./DataFigures";
import "../styles/home.css";

const Home = ({ data }) => {
  return (
    <main className="home-page main active">
      <div className="main-wrapper">
        <div className="location-chart">
          <>
            {typeof data[0] != "undefined" ? (
              <p className="location">{data[0].Country} Data</p>
            ) : (
              ""
            )}
          </>
        </div>

        <DataFigures data={data} />
      </div>
    </main>
  );
};

export default Home;
