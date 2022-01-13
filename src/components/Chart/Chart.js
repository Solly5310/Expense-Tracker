import ChartBar from "./ChartBar.js";
import "./Chart.css";
import React from 'react';

function Chart(props) {
   
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.key}
          value={dataPoints.value}
          max={props.max}
          label={dataPoints.label}
        ></ChartBar>
      ))}
    </div>
  );
}

export default Chart;
