import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import News from "./components/News";
import Nav from "./components/Nav";

import "./styles/lightMode.css";

function App() {
  const [data, setData] = useState({});
  const [isoCode, setIsoCode] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [lightMode, setLightMode] = useState(false);

  const api = {
    base: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/",
    worldData: "npm-covid-data/world",
    isoList: "npm-covid-data/countries-name-ordered",
    countryData: "npm-covid-data/country-report-iso-based/",
    news: "news/get-coronavirus-news/1",
    sixMonths: "covid-ovid-data/sixmonth/",
  };

  useEffect(() => {
    getData(`${api.base}${api.worldData}`);
    getIsoCodeList(`${api.base}${api.isoList}`);
    getNews(`${api.base}${api.news}`);
    getDataForChart(`${api.base}${api.sixMonths}`);
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

  const getNews = (api) => {
    fetch(api, {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
        "x-rapidapi-key": "652c66e0famsh0aadcac5e5a938fp196d32jsn0fe9e2225e0f",
      },
    })
      .then((res) => res.json())
      .then((news) => {
        // console.log(news.news);
        setNewsList(news.news);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getIsoCodeList = (par) => {
    fetch(par, {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
        "x-rapidapi-key": "652c66e0famsh0aadcac5e5a938fp196d32jsn0fe9e2225e0f",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsoCode(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getDataForChart = (api) => {
    fetch(api, {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
        "x-rapidapi-key": "652c66e0famsh0aadcac5e5a938fp196d32jsn0fe9e2225e0f",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setChartData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  let lastOneMonth = [];
  chartData.forEach((data, index) => {
    if (index <= 30) {
      lastOneMonth.push(data);
    }
  });

  const toggleTheme = () => {
    setLightMode(!lightMode);
  };

  return (
    <Router>
      <div className={lightMode ? "container light" : "container"}>
        <Header toggleTheme={toggleTheme} lightMode={lightMode} />
        <Routes>
          <Route
            path="/"
            element={<Home data={data} chartData={lastOneMonth} />}
          />

          <Route
            path="search"
            element={
              <Search
                getData={getData}
                api={api}
                data={data}
                isoCode={isoCode}
                getDataForChart={getDataForChart}
              />
            }
          />

          <Route path="news" element={<News newsList={newsList} />} />
        </Routes>
        <Nav />
      </div>
    </Router>
  );
}

export default App;
