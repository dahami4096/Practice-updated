// Comp2.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Comp2.css'; // CSS file for styling

const dataRecovery = [
  { name: 'PY', value: 3.94 },
  { name: 'YTD', value: 3.75 },
  { name: 'APR', value: 3.93 },
  { name: 'MAY', value: 3.93 },
  { name: 'JUNE', value: 4.23 },
  { name: 'JULY', value: 3.35 },
  { name: 'AUG', value: 3.56 },
  { name: 'SEP', value: 3.26 },
  { name: 'OCT', value: 0 },
  { name: 'NOV', value: 0 },
  { name: 'DEC', value: 0},
];

const dataConsumption = [
  { name: 'PY', value: 2.49 },
  { name: 'YTD', value: 2.38 },
  { name: 'APR', value: 2.45 },
  { name: 'MAY', value: 2.37 },
  { name: 'JUNE', value: 2.47 },
  { name: 'JULY', value: 2.11 },
  { name: 'AUG', value: 2.35 },
  { name: 'SEP', value: 2.49 },
  { name: 'OCT', value: 0 },
  { name: 'NOV', value: 0 },
  { name: 'DEC', value: 0},
];

const dataSectional = [
  { name: 'B&P', target: 1.50, actual: 1.43 },
  { name: 'F&G', target: 1.05, actual: 1.04 },
];

const Comp2 = () => {
  return (
    <div className="comp2-wrapper">
      <div className="comp2-conatinerg">
        <div className="comp2-card">
          <h4>CO2 Recovery Index - kg/hl</h4>
          <BarChart width={250} height={200} data={dataRecovery}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={0} tick={{ fontSize: 7 }}/>
            <YAxis domain={[0, 4.5]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#800080" />
          </BarChart>
{/*           <div className="red-line" style={{ top: '20px' }}>4.0</div> */}
        </div>

        <div className="comp2-card">
          <h4>CO2 Consumption Index - kg/hl</h4>
          <BarChart width={250} height={200} data={dataConsumption}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={0} tick={{ fontSize: 7 }}/>
            <YAxis domain={[0,3]}/>
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#000000" />
          </BarChart>
{/*           <div className="red-line" style={{ top: '30px' }}>2.55</div> */}
        </div>

        <div className="comp2-card">
          <h4>Sectional Indices - kg/hl</h4>
          <BarChart width={250} height={200} data={dataSectional}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0,1.6]}/>
            <Tooltip />
            <Legend />
            <Bar dataKey="target" fill="#36454F" />
            <Bar dataKey="actual" fill="#A9A9A9" />
          </BarChart>
        </div>
      </div>

      <div className="descriptions-container">
        <h3>Reasons for less recovery</h3>
        <ul>
          <li>Excessive Foaming in FVs - 14, 54, 3, 46, 21, 22, 4, 12, 43, 44, 49, 12</li>
          <li>Less recovery due to FV top ups - 47, 48, 10, 5, 18, 6, 55, 18, 52</li>
        </ul>

        <h3>Reasons for less consumption</h3>
        <ul>
          <li>Both sections consumptions are within the targets</li>
        </ul>
      </div>
    </div>
  );
};

export default Comp2;
