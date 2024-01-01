import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Review = () => {
  const [reviews, setReviews] = useState(people);
  const [index, setIndex] = useState(0);

  const changeReview = (index) => {
    if (index < 0) {
      index = reviews.length - 1;
    }
    else if (index >= reviews.length) {
      index = 0;
    }
    setIndex(index);
  }

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    changeReview(randomNumber);
  };

  return <div className='container'>
    <div className='review'>
      <div className='img-container'>
        <img src={reviews[index].image} className='person-img'/>
      </div>
      <h2 className='author'>{reviews[index].name}</h2>
      <h4 className='job'>{reviews[index].job}</h4>
      <p className='info'>{reviews[index].text}</p>
      <div>
        <button className='prev-btn' onClick={() => changeReview(index-1)}><FaChevronLeft /></button>
        <button className='random-btn' onClick={() => randomReview()}>Surprise Me</button>
        <button className='next-btn' onClick={()=>changeReview(index+1)}><FaChevronRight /></button>
      </div>
    </div>
  </div>
};

export default Review;
