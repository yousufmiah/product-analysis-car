import React from "react";
import "./Review.css";

const Review = (props) => {
  const { id, name, description, rating, img } = props.review;

  console.log(name);
  return (
    <div className=" container review-item review-img d-flex">
      <img src={img} alt="" />
      <h4>{name}</h4>
      <p>{description}</p>
      <h6>rating: {rating}</h6>
    </div>
  );
};

export default Review;
