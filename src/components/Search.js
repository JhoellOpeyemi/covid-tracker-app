import React from "react";
import SearchResultButton from "./SearchResultButton";

const Search = ({ getData, api, data }) => {
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
          <SearchResultButton
            country_name={"USA"}
            getData={getData}
            api={api}
            data={data}
          />
          <SearchResultButton
            country_name={"France"}
            getData={getData}
            api={api}
            data={data}
          />
          <SearchResultButton
            country_name={"Nigeria"}
            getData={getData}
            api={api}
            data={data}
          />
          <SearchResultButton
            country_name={"China"}
            getData={getData}
            api={api}
            data={data}
          />
          <SearchResultButton
            country_name={"Germany"}
            getData={getData}
            api={api}
            data={data}
          />
        </div>
      </div>
    </section>
  );
};

export default Search;
