import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import Nav from "./components/Nav";

function App() {
  const [data, setData] = useState({});

  const api = {
    base: "https://covid-19-data.p.rapidapi.com/",
    worldData: "totals",
    countryData: "country?name=",
  };

  useEffect(() => {
    getData(`${api.base}${api.worldData}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = (figures) => {
    fetch(figures, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
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
    <div className="container">
      <Header />
      <Home data={data} />
      <Search getData={getData} api={api} data={data} />
      <Nav />
    </div>
  );
}

export default App;
