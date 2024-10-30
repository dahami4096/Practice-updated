// Comp3.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './comp3.css'; // Import your CSS file

const electricityData = [
  { name: 'PY', value: 11.28 },
  { name: 'YTD', value: 11.3 },
  { name: 'APR', value: 12.76 },
  { name: 'MAY', value: 10.82 },
  { name: 'JUNE', value: 10.49 },
  { name: 'JULY', value: 10.73 },
  { name: 'AUG', value: 10.21 },
  { name: 'SEP', value: 11.32 },
];

const foIndexData = [
  { name: 'PY', value: 1.83 },
  { name: 'YTD', value: 1.79 },
  { name: 'APR', value: 1.87 },
  { name: 'MAY', value: 1.75 },
  { name: 'JUNE', value: 1.61 },
  { name: 'JULY', value: 1.70 },
  { name: 'AUG', value: 1.63 },
  { name: 'SEP', value: 1.95 },
];

const waterData = [
  { name: 'PY', value: 3.88 },
  { name: 'YTD', value: 3.3 },
  { name: 'APR', value: 3.97 },
  { name: 'MAY', value: 3.3 },
  { name: 'JUNE', value: 3.37 },
  { name: 'JULY', value: 3.78 },
  { name: 'AUG', value: 3.29 },
  { name: 'SEP', value: 4.18 },
];

// Example of additional data like Sectional indices can be added similarly

const Comp3 = () => {
  return (
    <div className="comp3-container">
      <div className="graph-container">
        <div className="graph-card">
          <h3>Electricity Index - KWh/hl</h3>
          <BarChart width={250} height={200} data={electricityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 10 }} />
            <YAxis domain={[0, 15]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#000080" />
          </BarChart>
          <div className="red-line">10.75</div>
        </div>

        {/* Repeat similar components for other indices */}
        <div className="graph-card">
          <h3>FO Index - l/hl</h3>
          <BarChart width={250} height={200} data={foIndexData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 10 }} />
            <YAxis domain={[0, 2.5]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8B4513" />
          </BarChart>
          <div className="red-line">1.50</div>
        </div>

        <div className="graph-card">
          <h3>Water Index - hl/hl</h3>
          <BarChart width={250} height={200} data={waterData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 10 }} />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#008000" />
          </BarChart>
          <div className="red-line">3.50</div>
        </div>
      </div>

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
