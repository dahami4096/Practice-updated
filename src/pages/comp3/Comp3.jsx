// Comp3.js
import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from "recharts";
import "./Comp3.css"; // Import your CSS file

const electricityData = [
  { name: "PY", value: 11.28 },
  { name: "YTD", value: 11.3 },
  { name: "APR", value: 12.76 },
  { name: "MAY", value: 10.82 },
  { name: "JUNE", value: 10.49 },
  { name: "JULY", value: 10.73 },
  { name: "AUG", value: 10.21 },
  { name: "SEP", value: 11.32 },
  { name: "OCT", value: 0 },
  { name: "NOV", value: 0 },
  { name: "DEC", value: 0 },
];

const foIndexData = [
  { name: "PY", value: 1.83 },
  { name: "YTD", value: 1.79 },
  { name: "APR", value: 1.87 },
  { name: "MAY", value: 1.75 },
  { name: "JUNE", value: 1.61 },
  { name: "JULY", value: 1.70 },
  { name: "AUG", value: 1.63 },
  { name: "SEP", value: 1.95 },
  { name: "OCT", value: 0 },
  { name: "NOV", value: 0 },
  { name: "DEC", value: 0 },
];

const waterData = [
  { name: "PY", value: 3.88 },
  { name: "YTD", value: 3.3 },
  { name: "APR", value: 3.97 },
  { name: "MAY", value: 3.3 },
  { name: "JUNE", value: 3.37 },
  { name: "JULY", value: 3.78 },
  { name: "AUG", value: 3.29 },
  { name: "SEP", value: 4.18 },
  { name: "OCT", value: 0 },
  { name: "NOV", value: 0 },
  { name: "DEC", value: 0 },
];

const sectionalIDkw = [
  { section: "REF", target: 4.01, actual: 4.22 },
  { section: "B&P", target: 1.12, actual: 1.17 },
  { section: "F&P", target: 1.40, actual: 1.40 },
  { section: "COM AIR ", target: 0.85, actual: 0.89 },
];

const sectionalIDkg = [
  { section: "B&P", target: 6.78, actual: 7.86 },
  { section: "F&P", target: 12.00, actual: 14.44 },
];

const sectionalIDhl = [
  { section: "B&P", target: 1.95, actual: 2.52 },
  { section: "F&P", target: 1.10, actual: 1.21 },  
  { section: "Utility", target: 0.45, actual: 0.54 }
];

const Comp3 = () => {
  return (
    <div className="comp3-container">
      <div className="graph-container">
        {/* Electricity Index Graph */}
        <div className="graph-card">
          <h6>Electricity Index - KWh/hl</h6>
          <BarChart width={350} height={200} data={electricityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 15]} />
            <Tooltip />
            <Legend />
            <ReferenceLine y={10.75} label="10.75" stroke="red" />
            <Bar dataKey="value" fill="#000080" />
          </BarChart>
        </div>

        
        {/* Sectional Indices Graph */}
        <div className="graph-card">
          <h6>Sectional Indices - kg/hl</h6>
          <BarChart width={350} height={200} data={sectionalIDkw}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="section" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="target" fill="#1898c1 " name="Target" />
            <Bar dataKey="actual" fill="#d3ebf3 " name="Actual" />
          </BarChart>
        </div>

        {/* FO Index Graph */}
        <div className="graph-card">
          <h6>FO Index - l/hl</h6>
          <BarChart width={350} height={200} data={foIndexData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 2.5]} />
            <Tooltip />
            <Legend />
            <ReferenceLine y={1.5} label="1.50" stroke="red" />
            <Bar dataKey="value" fill="#8B4513" />
          </BarChart>
        </div>


        
        {/* Sectional Indices Graph */}
        <div className="graph-card">
          <h6>Sectional Indices - kg/hl</h6>
          <BarChart width={350} height={200} data={sectionalIDkg}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="section" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 20]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="target" fill="#ba4a00  " name="Target" />
            <Bar dataKey="actual" fill="#ebca90 " name="Actual" />
          </BarChart>
        </div>

        {/* Water Index Graph */}
        <div className="graph-card">
          <h6>Water Index - hl/hl</h6>
          <BarChart width={350} height={200} data={waterData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Legend />
            <ReferenceLine y={3.5} label="3.50" stroke="red" />
            <Bar dataKey="value" fill="#008000" />
          </BarChart>
        </div>

        {/* Sectional Indices Graph */}
        <div className="graph-card">
          <h6>Sectional Indices - kg/hl</h6>
          <BarChart width={350} height={200} data={sectionalIDhl}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="section" tick={{ fontSize: 12 }} />
            <YAxis domain={[0.00, 3.00]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="target" fill="#05770a " name="Target" />
            <Bar dataKey="actual" fill="#bff3c2" name="Actual" />
          </BarChart>
        </div>



      </div>

      {/* Descriptions Section */}
      <div className="descriptions-container">
        <h6>Description</h6>
        <ul>
          <li>Reason 1 for Electricity Index</li>
          <li>Reason 2 for FO Index</li>
          <li>Reason 3 for Water Index</li>
          {/* Add more reasons and details */}
        </ul>
      </div>

      
    </div>
  );
};

export default Comp3;
