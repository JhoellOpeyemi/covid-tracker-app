import React from "react";
import SearchInputBox from "./SearchInputBox";
import SearchResultButton from "./SearchResultButton";
import "../styles/search.css";

const Search = ({
  getCountryData,
  api,
  isoCode,
  getDataForChart,
  setQuery,
  query,
}) => {
  let allCountriesList = [];
  let filter;

  const popularCountries = [
    "USA",
    "France",
    "Nigeria",
    "China",
    "Germany",
    "Italy",
    "Singapore",
  ];

  if (isoCode.length >= 1) {
    isoCode.forEach((code) => {
      allCountriesList.push(code.Country);
    });
  }

  for (let i = 0; i < allCountriesList.length; i++) {
    if (query) {
      filter = allCountriesList.filter((country) =>
        country.includes(`${query}`)
      );
    }
  }

  return (
    <section className="search-page main">
      <SearchInputBox setQuery={setQuery} query={query} />

      <div className="country-result">
        <div className="result-button-group">
          {query ? (
            <>
              <h3 className="country-result-heading">
                Searched results for '{`${query}`}'
              </h3>

              {filter.map((result, index) => {
                return (
                  <SearchResultButton
                    key={index}
                    country={result}
                    getCountryData={getCountryData}
                    api={api}
                    isoCode={isoCode}
                    getDataForChart={getDataForChart}
                    setQuery={setQuery}
                  />
                );
              })}
            </>
          ) : (
            <>
              <h3 className="country-result-heading">Some popular countries</h3>
              {popularCountries.map((country, index) => {
                return (
                  <SearchResultButton
                    key={index}
                    country={country}
                    getCountryData={getCountryData}
                    api={api}
                    isoCode={isoCode}
                    getDataForChart={getDataForChart}
                    setQuery={setQuery}
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
