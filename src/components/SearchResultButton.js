import React from "react";
import { Link } from "react-router-dom";

const SearchResultButton = ({
  country,
  getCountryData,
  api,
  isoCode,
  getDataForChart,
  setQuery,
}) => {
  let iso;

  // function to run when a result button is clicked
  const getSearchResults = () => {
    if (isoCode.length >= 1) {
      isoCode.forEach((code) => {
        if (code.Country === country) {
          iso = code.ThreeLetterSymbol;
        }
      });
    }

    setQuery("");

    getCountryData(`${api.base}${api.countryData}${country}/${iso}`);
    getDataForChart(`${api.base}${api.sixMonths}${iso}`);
  };

  return (
    <Link to={`/search/${country}`}>
      <button className="result-btn" onClick={getSearchResults}>
        <span className="country-name">{country}</span>
        <span className="right-icon">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.469 6.2205C11.6095 6.0797 11.8001 6.00044 11.999 6.00016C12.1979 5.99988 12.3887 6.07859 12.5295 6.219L20.7555 14.4165C20.8326 14.4932 20.8938 14.5843 20.9356 14.6847C20.9773 14.7851 20.9988 14.8928 20.9988 15.0015C20.9988 15.1102 20.9773 15.2179 20.9356 15.3183C20.8938 15.4187 20.8326 15.5098 20.7555 15.5865L12.5295 23.781C12.4603 23.8525 12.3774 23.9095 12.2859 23.9487C12.1943 23.9879 12.0959 24.0084 11.9963 24.0092C11.8967 24.0099 11.798 23.9908 11.7059 23.9529C11.6137 23.9151 11.5301 23.8593 11.4598 23.7888C11.3894 23.7182 11.3339 23.6344 11.2963 23.5422C11.2587 23.45 11.2399 23.3512 11.2409 23.2516C11.2419 23.152 11.2627 23.0537 11.3021 22.9622C11.3416 22.8708 11.3988 22.7881 11.4705 22.719L19.218 15L11.4705 7.2795C11.3297 7.13905 11.2505 6.94843 11.2502 6.74956C11.2499 6.55069 11.3286 6.35984 11.469 6.219L11.469 6.2205Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </span>
      </button>
    </Link>
  );
};

export default SearchResultButton;
