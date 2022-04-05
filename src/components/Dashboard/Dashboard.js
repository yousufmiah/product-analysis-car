import React from "react";
import "./Dashboard.css";
import LChart from "../LChart/LChart";
import AChart from "../AChart/AChart";

const Dashboard = () => {
  return (
    <div className="container mt-5 chart-container">
      <div className="chart">
        <div className="chart-L">
          <LChart></LChart>
        </div>
        <div className="chart-A">
          <AChart></AChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
