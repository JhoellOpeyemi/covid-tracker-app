import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import SearchResultData from "./components/SearchResultData";
import News from "./components/News";
import Nav from "./components/Nav";

import "./styles/lightMode.css";

function App() {
  const [worldData, setWorldData] = useState({});
  const [countryData, setCountryData] = useState({});
  const [isoCode, setIsoCode] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [lightMode, setLightMode] = useState(false);
  const [query, setQuery] = useState("");
  const [userCountry, setUserCountry] = useState("");

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
    getUserCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const getCountryData = (figures) => {
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
        setChartData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  let lastOneMonth = [];
  chartData?.forEach((data, index) => {
    if (index <= 60) {
      lastOneMonth.push(data);
    }
  });

  const toggleTheme = () => {
    setLightMode(!lightMode);
  };

  const getUserCountry = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        fetch(
          `https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${position.coords.latitude}%2C${position.coords.longitude}&language=en`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "trueway-geocoding.p.rapidapi.com",
              "x-rapidapi-key":
                "652c66e0famsh0aadcac5e5a938fp196d32jsn0fe9e2225e0f",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            let splitData = data.results[0].address.split(", ").at(-1);
            setUserCountry(splitData);
          })
          .catch((err) => {
            console.error(err);
          });
      });
    }
  };

  return (
    <Router>
      <div className={lightMode ? "container light" : "container"}>
        <Header toggleTheme={toggleTheme} lightMode={lightMode} />
        <Routes>
          <Route path="/" element={<Home data={worldData} />} />

          <Route
            path="search"
            element={
              <Search
                getCountryData={getCountryData}
                api={api}
                userCountry={userCountry}
                isoCode={isoCode}
                getDataForChart={getDataForChart}
                setQuery={setQuery}
                query={query}
              />
            }
          />

          <Route
            path="search/:country"
            element={
              <SearchResultData
                chartData={lastOneMonth}
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

          <Route path="news" element={<News newsList={newsList} />} />
        </Routes>
        <Nav />
      </div>
    </Router>
  );
}

export default App;
