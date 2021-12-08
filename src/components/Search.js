import React from "react";
import SearchResultButton from "./SearchResultButton";

const Search = () => {
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
          <SearchResultButton />
          <SearchResultButton />
          <SearchResultButton />
          <SearchResultButton />
        </div>
      </div>
    </section>
  );
};

export default Search;
