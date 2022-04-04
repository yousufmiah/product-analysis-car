import React from "react";
import "./Dashboard.css";
import LChart from "../LChart/LChart";
import AChart from "../AChart/AChart";

const Dashboard = () => {
  return (
    <div className="container mt-5 chart-container">
      <div className="chart">
        <LChart></LChart>
        <AChart></AChart>
      </div>
    </div>
  );
};

export default Dashboard;
