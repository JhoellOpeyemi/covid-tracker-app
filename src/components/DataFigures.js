import React from "react";

const DataFigures = () => {
  return (
    <div className="data-figures-wrapper">
      <div className="data-pair">
        <h3 className="data-heading">Total Number of Recorded Cases</h3>
        <p className="data-figure">254,643,029</p>
      </div>

      <div className="data-pair">
        <h3 className="data-heading">Total Number of Recoveries</h3>
        <p className="data-figure">204,959,054</p>
      </div>

      <div className="data-pair">
        <h3 className="data-heading">Total Number of Deaths</h3>
        <p className="data-figure">6,194,287</p>
      </div>
    </div>
  );
};

export default DataFigures;
