import React from "react";
import SearchInputBox from "./SearchInputBox";
import SearchResultButton from "./SearchResultButton";
import DataFigures from "./DataFigures";
import DataChart from "./DataChart";
import { Link } from "react-router-dom";

const SearchResultData = ({
  chartData,
  setQuery,
  query,
  countryData,
  getCountryData,
  isoCode,
  api,
  getDataForChart,
}) => {
  let allCountriesList = [];
  let filter;

  isoCode?.forEach((code) => {
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
    <section className="search-result">
      <Link to="/search">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="arrow-left"
          className="svg-inline--fa fa-arrow-left fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
          ></path>
        </svg>
      </Link>
      <SearchInputBox setQuery={setQuery} query={query} />
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
          ""
        )}
      </div>
      <>
        {typeof countryData[0] != "undefined" ? (
          <p className="location search-result-heading">
            {countryData[0].Country}
          </p>
        ) : (
          ""
        )}
      </>
      <DataChart chartData={chartData} />
      <DataFigures data={countryData} />
    </section>
  );
};

export default SearchResultData;
