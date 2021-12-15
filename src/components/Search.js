import React from "react";
import SearchResultButton from "./SearchResultButton";

const Search = ({ getData, api, data, isoCode }) => {
  const popularCountries = [
    "USA",
    "France",
    "Nigeria",
    "China",
    "Germany",
    "Italy",
  ];

  return (
    <section className="search-page main">
      <div className="input-group">
        <input
          type="text"
          className="search-input"
          placeholder="Type a country to search"
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
