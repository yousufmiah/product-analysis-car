import React from "react";
import "./NotFound.css";
import notFoundImage from "../../images/404-error-page-not-found.jpg";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src={notFoundImage} alt="" />
    </div>
  );
};

export default NotFound;
