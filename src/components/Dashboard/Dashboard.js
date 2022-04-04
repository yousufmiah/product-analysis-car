import React from "react";
import "./Dashboard.css";
import LChart from "../LChart/LChart";
import AChart from "../AChart/AChart";

const Dashboard = () => {
  return (
    <div className="mt-5">
      <div className="container chart-container d-flex">
        <LChart></LChart>
        <AChart></AChart>
      </div>
    </div>
  );
};

export default Dashboard;
