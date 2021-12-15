import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import Nav from "./components/Nav";

function App() {
  const [data, setData] = useState({});
  const [isoCode, setIsoCode] = useState({});

  const api = {
    base: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/",
    worldData: "world",
    isoList: "countries-name-ordered",
    countryData: "country-report-iso-based/",
  };

  useEffect(() => {
    getData(`${api.base}${api.worldData}`);
    getIsoList(`${api.base}${api.isoList}`);
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

  const getIsoList = (par) => {
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

  return (
    <div className="container">
      <Header />
      <Home data={data} />
      <Search getData={getData} api={api} data={data} isoCode={isoCode} />
      <Nav />
    </div>
  );
}

export default App;
