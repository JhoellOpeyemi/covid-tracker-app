import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// component imports
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import SearchResultData from "./components/SearchResultData";
import News from "./components/News";
import Nav from "./components/Nav";

// styles imports
import "./styles/lightMode.css";
import "./styles/media.css";

function App() {
  const [worldData, setWorldData] = useState({}); // state for world data
  const [countryData, setCountryData] = useState({}); // state for country data
  const [newsList, setNewsList] = useState([]); // state to hold all news
  const [isoCode, setIsoCode] = useState([]); // state for the iso code of all countries
  const [chartData, setChartData] = useState([]); // state to hold data for chart
  const [lightMode, setLightMode] = useState(false); // state to set light or dark mode
  const [query, setQuery] = useState(""); // state to hold the value of input box

  // api object
  const api = {
    base: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/",
    worldData: "npm-covid-data/world",
    isoList: "npm-covid-data/countries-name-ordered",
    countryData: "npm-covid-data/country-report-iso-based/",
    news: "news/get-coronavirus-news/1",
    sixMonths: "covid-ovid-data/sixmonth/",
  };

  useEffect(() => {
    getWorldData(`${api.base}${api.worldData}`);
    getIsoCodeList(`${api.base}${api.isoList}`);
    getNews(`${api.base}${api.news}`);
    getDataForChart(`${api.base}${api.sixMonths}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // function to get the world data and to set the worldData state to the data fetched
  const getWorldData = (figures) => {
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
        setWorldData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // function to get the country data and to set the countryData state to the data fetched
  const getCountryData = (figures) => {
    setCountryData([]);
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
        setCountryData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // function to get the news and to set the newsList state to the news fetched
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

  // function to get the iso code of all countries and to set the isoCode state to the data fetched
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

  // function to get the data for chart and to set the chartData state to the data fetched
  const getDataForChart = (api) => {
    setChartData([]);
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
        setChartData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // the chartData state contains the data for the last six months and we only want data for the last two months
  // loop through chartData then push the data for the last two months into a new array
  let lastTwoMonths = [];
  if (chartData.length >= 1) {
    chartData.forEach((data, index) => {
      if (index <= 60) {
        lastTwoMonths.push(data);
      }
    });
  }

  // function to toggle theme
  const toggleTheme = () => {
    setLightMode(!lightMode);
  };

  return (
    <Router>
      <div className={lightMode ? "container light" : "container"}>
        <div className="wrapper">
          {/* Header component */}
          <Header toggleTheme={toggleTheme} lightMode={lightMode} />

          <Routes>
            {/* Home page component */}
            <Route path="/" element={<Home data={worldData} />} />

            {/* Search page component */}
            <Route
              path="search"
              element={
                <Search
                  getCountryData={getCountryData}
                  api={api}
                  isoCode={isoCode}
                  getDataForChart={getDataForChart}
                  setQuery={setQuery}
                  query={query}
                />
              }
            />

            {/* Search result component */}
            <Route
              path="search/:country"
              element={
                <SearchResultData
                  chartData={lastTwoMonths}
                  getDataForChart={getDataForChart}
                  getCountryData={getCountryData}
                  countryData={countryData}
                  setQuery={setQuery}
                  query={query}
                  isoCode={isoCode}
                  api={api}
                />
              }
            />

            {/* News page component */}
            <Route path="news" element={<News newsList={newsList} />} />
          </Routes>
          {/* Nav component */}
          <Nav />
        </div>
      </div>
    </Router>
  );
}

export default App;
