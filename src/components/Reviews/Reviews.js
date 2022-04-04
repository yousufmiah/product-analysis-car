import React from "react";
import useReviews from "../../hooks/useReviews";
import Item from "../Item/Item";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  // console.log(reviews);

  return (
    <div className=" all-reviews text-center">
      <h2>All Reviews</h2>
      {reviews.map((item) => (
        <Item key={item.id} item={item}></Item>
      ))}
    </div>
  );
};

export default Reviews;
