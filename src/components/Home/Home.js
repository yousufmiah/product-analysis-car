import React from "react";
import "./Home.css";
import carImage from "../../images/car.png";
import { Card, Col, Row } from "react-bootstrap";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  console.log(reviews);
  const review = reviews.slice(0, 3);

  const navigate = useNavigate();

  const handleShowAllReviews = () => {
    console.log("clicked");
    const path = "/reviews";
    navigate(path);
  };

  // console.log(reviews);
  return (
    <div>
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
            <button className="display-inline btn btn-primary py-3 px-4">
              Live Demo
            </button>
          </div>
        </div>
        <div className="image-contain align-item-center">
          <img className="mt-4" src={carImage} alt="" />
        </div>
      </div>
      <div className="reviews">
        <h2>Customer Reviews: {review.length}</h2>
        {review.map((item) => (
          <Review key={item.id} item={item}></Review>
        ))}
      </div>
      <div className=" all-reviews-btn text-center py-5">
        <button
          onClick={handleShowAllReviews}
          className="btn btn-primary px-5 py-2"
        >
          See All Reivews
        </button>
      </div>
    </div>
  );
};

export default Home;
