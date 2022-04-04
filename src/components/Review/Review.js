import React from "react";
import "./Review.css";

const Review = (props) => {
  const { id, name, description, rating, img } = props.item;

  // console.log(name);
  return (
    <div className=" container review-item review-img d-flex justify-content-center ">
      <img src={img} alt="" />
      <div className="review-text d-flex">
        <h4>{name}</h4>
        <p>{description}</p>
        <h6>rating: {rating}</h6>
      </div>
    </div>
  );
};

export default Review;
