import React, { useState } from "react";
import SearchResultButton from "./SearchResultButton";
import "../styles/search.css";

const Search = ({ getData, api, data, isoCode, getDataForChart }) => {
  const [query, setQuery] = useState("");

  let allCountriesList = [];
  let filter;

  const popularCountries = [
    "USA",
    "France",
    "Nigeria",
    "China",
    "Germany",
    "Italy",
  ];

  isoCode.forEach((code) => {
    allCountriesList.push(code.Country);
  });

  for (let i = 0; i < allCountriesList.length; i++) {
    if (query) {
      filter = allCountriesList.filter((country) =>
        country.includes(`${query}`)
      );
    }
  }

  return (
    <section className="search-page main">
      <div className="input-group">
        <input
          type="text"
          className="search-input"
          placeholder="Type a country to search"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          //   onKeyUp={filterSearch}
        />
        <div className="input-stick"></div>
      </div>

      <div className="country-result">
        <div className="result-button-group">
          {query ? (
            <>
              <h3 className="country-result-heading">
                Searched results for '{`${query}`}'
              </h3>

              {filter.map((result) => {
                return (
                  <SearchResultButton
                    key={result}
                    country={result}
                    getData={getData}
                    api={api}
                    data={data}
                    isoCode={isoCode}
                    getDataForChart={getDataForChart}
                  />
                );
              })}
            </>
          ) : (
            <>
              <h3 className="country-result-heading">Some popular countries</h3>
              {popularCountries.map((country) => {
                return (
                  <SearchResultButton
                    key={country}
                    country={country}
                    getData={getData}
                    api={api}
                    data={data}
                    isoCode={isoCode}
                    getDataForChart={getDataForChart}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
