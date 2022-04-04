import React from "react";
import useReviews from "../../hooks/useReviews";
import Item from "../Item/Item";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  // console.log(reviews);

  return (
    <div className=" container text-center all-items">
      <h2>All Reviews</h2>
      <div className="all-item">
        {reviews.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
