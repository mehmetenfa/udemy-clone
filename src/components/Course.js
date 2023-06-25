import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StartRating from "../components/StarRating";
import { useCartContext } from "../context/cart_context";

const Course = (props) => {
  const {
    id,
    image,
    course_name,
    creator,
    actual_price,
    discounted_price,
    rating_count,
    rating_start,
    category,
  } = props;
  const { addToCart } = useCartContext();
  return (
    <CourseCard>
      <div className="item-img">
        <img src={image} alt={course_name} />
      </div>
      <div className="item-body">
        <h5 className="item-name">{course_name}</h5>
        <span className="item-creator">{creator}</span>
        <div className="items-rating flex">
          <span className="rating-star-val">{rating_start}</span>
          <StartRating rating_start={rating_start} />
          <span className="rating-count">({rating_count})</span>
        </div>
        <div className="actual-price">
          <span className="item-price-new">${discounted_price}</span>
          <span className="item-price-old">${actual_price}</span>
        </div>
      </div>
      <div>
        <Link to={`/courses/${id}`} className="item-btn see-details-btn">
          See Details
        </Link>
        <Link
          to="/cart"
          className="item-btn add-to-card-btn"
          onClick={() =>
            addToCart(
              id,
              image,
              course_name,
              creator,
              discounted_price,
              category
            )
          }
        >
          Add to cart
        </Link>
      </div>
    </CourseCard>
  );
};

const CourseCard = styled.div``;

export default Course;
