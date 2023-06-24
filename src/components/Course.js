import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import StartRating from '../components/StarRating'
import { useCartContext } from '../context/cart_context' 

const Course = (props) => {
  const {id, image, course_name, creator, actual_price, discounted_price, rating_count, rating_start, category} = props;
  const {addToCart} = useCartContext();
  return (
    <CourseCard>
      <div className='item-img'>
        <img src={image} alt={course_name} /> 
      </div>
      <div className='item-body'>
        <h5 className='item-name'>{course_name}</h5>
        <span className='item-creator'>{creator}</span>
        <div className='items-rating flex'>
          <span></span>
        </div>
      </div>
    </CourseCard>
  )
}

const CourseCard = styled.div``;

export default Course