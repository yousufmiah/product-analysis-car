import React from "react";
import "./AChart.css";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Mar",
    investment: 100000,
    sell: 200041,
    revenue: 10401,
  },
  {
    month: "Apr",
    investment: 200000,
    sell: 400023,
    revenue: 24500,
  },
  {
    month: "May",
    investment: 500000,
    sell: 726000,
    revenue: 67010,
  },
  {
    month: "Jun",
    investment: 500000,
    sell: 500029,
    revenue: 40405,
  },
  {
    month: "Jul",
    investment: 600000,
    sell: 601000,
    revenue: 50900,
  },
  {
    month: "Aug",
    investment: 700000,
    sell: 600070,
    revenue: 61000,
  },
];

const AChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <div className="container ">
        <div>
          <h4 className="mb-5">Investment vs Sell vs Revenue</h4>
        </div>
        <AreaChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#8884d8"
            fill="green"
          />
          <Area type="monotone" dataKey="sell" stroke="orange" fill="orange" />
          <Area type="monotone" dataKey="revenue" stroke="red" fill="red" />
        </AreaChart>
      </div>
    </ResponsiveContainer>
  );
};

export default AChart;
