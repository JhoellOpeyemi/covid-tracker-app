import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import News from "./components/News";
import Nav from "./components/Nav";

function App() {
  const [data, setData] = useState({});

  const api = {
    base: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/",
    worldData: "npm-covid-data/world",
    isoList: "npm-covid-data/countries-name-ordered",
    countryData: "npm-covid-data/country-report-iso-based/",
    news: "news/get-coronavirus-news/0",
  };

  useEffect(() => {
    getData(`${api.base}${api.worldData}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = (figures) => {
    fetch(figures, {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
        "x-rapidapi-key": "652c66e0famsh0aadcac5e5a938fp196d32jsn0fe9e2225e0f",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home data={data} />} />

          <Route
            path="/search"
            element={<Search getData={getData} api={api} data={data} />}
          />

          <Route path="/news" element={<News api={api} />} />
        </Routes>
        <Nav />
      </div>
    </Router>
  );
}

export default App;
