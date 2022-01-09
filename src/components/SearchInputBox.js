import React from "react";

const SearchInputBox = ({ setQuery, query }) => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="search-input"
        placeholder="Type a country to search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <div className="input-stick"></div>
    </div>
  );
};

export default SearchInputBox;
