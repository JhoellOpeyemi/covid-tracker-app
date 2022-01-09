import React from "react";

const DataFigures = ({ data }) => {
  // function to add commas to number
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="data-figures-wrapper">
      <div className="data-pair">
        <h3 className="data-heading">Total Number of Recorded Cases</h3>
        {typeof data[0] != "undefined" ? (
          <p className="data-figure">{numberWithCommas(data[0].TotalCases)}</p>
        ) : (
          "--"
        )}
      </div>

      <div className="data-pair">
        <h3 className="data-heading">Total Number of Recoveries</h3>
        {typeof data[0] != "undefined" ? (
          <p className="data-figure">
            {numberWithCommas(data[0].TotalRecovered)}
          </p>
        ) : (
          "--"
        )}
      </div>

      <div className="data-pair">
        <h3 className="data-heading">Total Number of Active Cases</h3>
        {typeof data[0] != "undefined" ? (
          <p className="data-figure">{numberWithCommas(data[0].ActiveCases)}</p>
        ) : (
          "--"
        )}{" "}
      </div>

      <div className="data-pair">
        <h3 className="data-heading">Total Number of Deaths</h3>
        {typeof data[0] != "undefined" ? (
          <p className="data-figure">{numberWithCommas(data[0].TotalDeaths)}</p>
        ) : (
          "--"
        )}{" "}
      </div>
    </div>
  );
};

export default DataFigures;
