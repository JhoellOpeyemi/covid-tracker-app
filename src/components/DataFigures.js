import React from "react";

const DataFigures = ({ data }) => {
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="data-figures-wrapper">
      <div className="data-pair">
        <h3 className="data-heading">Total Number of Recorded Cases</h3>
        {typeof data[0] != "undefined" ? (
          <p className="data-figure">{numberWithCommas(data[0].confirmed)}</p>
        ) : (
          "--"
        )}
      </div>

      <div className="data-pair">
        <h3 className="data-heading">Total Number of Recoveries</h3>
        {typeof data[0] != "undefined" ? (
          <p className="data-figure">{numberWithCommas(data[0].recovered)}</p>
        ) : (
          "--"
        )}
      </div>

      <div className="data-pair">
        <h3 className="data-heading">Total Number of Critical Cases</h3>
        {typeof data[0] != "undefined" ? (
          <p className="data-figure">{numberWithCommas(data[0].critical)}</p>
        ) : (
          "--"
        )}{" "}
      </div>

      <div className="data-pair">
        <h3 className="data-heading">Total Number of Deaths</h3>
        {typeof data[0] != "undefined" ? (
          <p className="data-figure">{numberWithCommas(data[0].deaths)}</p>
        ) : (
          "--"
        )}{" "}
      </div>
    </div>
  );
};

export default DataFigures;
