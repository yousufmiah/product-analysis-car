import React from "react";
import "./Review.css";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = (props) => {
  const { name, description, rating, img } = props.item;

  // console.log(name);
  return (
    <div className=" container review-item d-flex justify-content-center ">
      {/* <img src={img} alt="" />
      <div className="review-text d-flex">
        <h4>{name}</h4>
        <p>{description}</p>
        <Rating
          initialRating={rating}
          emptySymbol={<FontAwesomeIcon icon={faStar} />}
          fullSymbol={
            <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
          }
          readonly
        ></Rating>
      </div> */}
      <div className="item-img img-fluid ">
        <div className="card-deck">
          <img className="card-img-top" src={img} alt="pic" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <Rating
              initialRating={rating}
              emptySymbol={<FontAwesomeIcon icon={faStar} />}
              fullSymbol={
                <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              }
              readonly
            ></Rating>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
