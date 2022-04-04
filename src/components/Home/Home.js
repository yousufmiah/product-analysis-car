import React from "react";
import "./Home.css";
import carImage from "../../images/car.png";
import { Card, Col, Row } from "react-bootstrap";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  const navigate = useNavigate;
  console.log(reviews);
  return (
    <div className=" container home-contain">
      <div className="text-contain">
        <h1>Choose Your Best Car</h1>
        <p>
          On behalf of Happy New Year. We are going to lunching a new car show
          room for valuable customer. which will be highly appreciated if you
          visit our site to see. By the by enjoying with us a memorable
          environment. Thanks and best of Luck.
        </p>
        <div>
          <button className="display-inline">Live Demo</button>
        </div>
      </div>
      <div className="image-contain">
        <img className="mt-4" src={carImage} alt="" />
      </div>
      <div className="text-center">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Home;
