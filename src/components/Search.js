import React, { useState, useEffect } from "react";
import SearchResultButton from "./SearchResultButton";
import "../styles/search.css";

const Search = ({ getData, api, data }) => {
  const [isoCode, setIsoCode] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getIsoCodeList(`${api.base}${api.isoList}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const popularCountries = [
    "USA",
    "France",
    "Nigeria",
    "China",
    "Germany",
    "Italy",
  ];

  const filterSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <section className="search-page main">
      <div className="input-group">
        <input
          type="text"
          className="search-input"
          placeholder="Type a country to search"
          onChange={filterSearch}
        />
        <div className="input-stick"></div>
      </div>

      <div className="country-result">
        <h3 className="country-result-heading">Some popular countries</h3>

        <div className="result-button-group">
          {popularCountries.map((country) => {
            return (
              <SearchResultButton
                key={country}
                country={country}
                getData={getData}
                api={api}
                data={data}
                isoCode={isoCode}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Search;
