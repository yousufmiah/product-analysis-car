import React from "react";
import "./Item.css";

const Item = (props) => {
  const { name, description, rating, img } = props.item;
  return (
    <div>
      <div className=" container review-item review-img d-flex justify-content-center ">
        <img src={img} alt="" />
        <div className="review-text d-flex">
          <h4>{name}</h4>
          <p>{description}</p>
          <h6>rating: {rating}</h6>
        </div>
      </div>
    </div>
  );
};

export default Item;
