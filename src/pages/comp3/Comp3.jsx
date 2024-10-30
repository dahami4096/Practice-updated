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

const sectionalIndicesData = [
  { section: "B&P", target: 6.78, actual: 7.86 },
  { section: "F&P", target: 12.00, actual: 14.44 },
];

const Comp3 = () => {
  return (
    <div className="comp3-container">
      <div className="graph-container">
        {/* Electricity Index Graph */}
        <div className="graph-card">
          <h3>Electricity Index - KWh/hl</h3>
          <BarChart width={250} height={200} data={electricityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 15]} />
            <Tooltip />
            <Legend />
            <ReferenceLine y={10.75} label="10.75" stroke="red" />
            <Bar dataKey="value" fill="#000080" />
          </BarChart>
        </div>

        {/* FO Index Graph */}
        <div className="graph-card">
          <h3>FO Index - l/hl</h3>
          <BarChart width={250} height={200} data={foIndexData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 2.5]} />
            <Tooltip />
            <Legend />
            <ReferenceLine y={1.5} label="1.50" stroke="red" />
            <Bar dataKey="value" fill="#8B4513" />
          </BarChart>
        </div>

        {/* Water Index Graph */}
        <div className="graph-card">
          <h3>Water Index - hl/hl</h3>
          <BarChart width={250} height={200} data={waterData}>
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
          <h3>Sectional Indices - kg/hl</h3>
          <BarChart width={250} height={200} data={sectionalIndicesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="section" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 20]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="target" fill="#A9A9A9" name="Target" />
            <Bar dataKey="actual" fill="#DAA520" name="Actual" />
          </BarChart>
        </div>

        <div className="graph-card">
          <h3>Water Index - hl/hl</h3>
          <BarChart width={250} height={200} data={waterData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Legend />
            <ReferenceLine y={3.5} label="3.50" stroke="red" />
            <Bar dataKey="value" fill="#008000" />
          </BarChart>
        </div>

      </div>

      {/* Descriptions Section */}
      <div className="descriptions-container">
        <h3>Description</h3>
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
