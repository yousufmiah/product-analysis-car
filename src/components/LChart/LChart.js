import React from "react";
import "./LChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Mar",
    investment: 100000,
    sell: 241,
    revenue: 10401,
  },
  {
    month: "Apr",
    investment: 200000,
    sell: 423,
    revenue: 24500,
  },
  {
    month: "May",
    investment: 500000,
    sell: 726,
    revenue: 67010,
  },
  {
    month: "Jun",
    investment: 500000,
    sell: 529,
    revenue: 40405,
  },
  {
    month: "Jul",
    investment: 600000,
    sell: 601,
    revenue: 50900,
  },
  {
    month: "Aug",
    investment: 700000,
    sell: 670,
    revenue: 61000,
  },
];

const LChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <div className="container">
        <div>
          <h4 className="mb-5">Investment vs Sell vs Revenue</h4>
        </div>
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
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="investment"
            stroke="Green"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="revenue" stroke="Red" />
          <Line type="monotone" dataKey="sell" stroke="Blue" />
        </LineChart>
      </div>
    </ResponsiveContainer>
  );
};

export default LChart;
