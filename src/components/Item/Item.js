import React from "react";
import "./Item.css";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = (props) => {
  const { name, description, rating, img } = props.item;
  return (
    <div className="item-img img-fluid">
      <div className="card-deck">
        <div className="card">
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

export default Item;
