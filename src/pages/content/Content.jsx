import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Cell,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import './content.css';

function Content() {
  const data = [
    { name: "s1", lastShift: 4000, thisShift: 2400, flow: 12.5 },
    { name: "s2", lastShift: 3000, thisShift: 1398, flow: 10.8 },
    { name: "s3", lastShift: 2000, thisShift: 9800, flow: 15.3 },
    { name: "s4", lastShift: 2780, thisShift: 3908, flow: 13.9 },
    { name: "s5", lastShift: 1890, thisShift: 4800, flow: 11.7 },
    { name: "s6", lastShift: 2390, thisShift: 3800, flow: 14.2 },
    { name: "s7", lastShift: 3490, thisShift: 4300, flow: 13.5 },
    { name: "s8", lastShift: 4000, thisShift: 2400, flow: 12.1 },
    { name: "s9", lastShift: 3000, thisShift: 1398, flow: 9.6 },
    { name: "s10", lastShift: 2000, thisShift: 9800, flow: 16.0 },
    { name: "s11", lastShift: 2780, thisShift: 3908, flow: 14.1 },
    { name: "s12", lastShift: 1890, thisShift: 4800, flow: 11.3 },
    { name: "s13", lastShift: 2390, thisShift: 3800, flow: 12.7 },
    { name: "s14", lastShift: 3490, thisShift: 4300, flow: 14.6 },
  ];

  const pieData = [
    { name: "This shift", value: data.reduce((acc, curr) => acc + curr.pv, 0) },
    { name: "Last shift", value: data.reduce((acc, curr) => acc + curr.uv, 0) },
  ];

  const pieColors = ['#8884d8', '#82ca9d'];

  return (
    <main className="main-container">
      <div className="main-title">
        <a href="/" className="dashboard-link">Dashboard</a>

      </div>
      <h2>Trends and Graphs</h2>
      <div className="pg-charts">

        <div>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="thisShift" fill="#968582" name="This Shift" />
              <Bar dataKey="lastShift" fill="#f3f613" name="Last Shift" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="thisShift"
                stroke="#968582"
                activeDot={{ r: 8 }}
                name="This Shift"
              />
              <Line
                type="monotone"
                dataKey="lastShift"
                stroke="#f3f613"
                name="Last Shift"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div>

          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="flow"
                stroke="#4caf50"
                activeDot={{ r: 8 }}
                name="Flow"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
                isAnimationActive={false}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index]} /> 
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* Data Table Section */}
      <div className="data-table">
        <h2>Data Table</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>This Shift</th>
              <th>Last Shift</th>
              <th>Flow</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.thisShift}</td>
                <td>{item.lastShift}</td>
                <td>{item.flow}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </main>


  );
}

export default Content;
