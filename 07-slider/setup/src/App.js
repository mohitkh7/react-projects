import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0);

  const changeReview = (newIndex) => {
    console.log(index);
    if (newIndex < 0) {
      newIndex = reviews.length - 1;
    }
    else if (newIndex >= reviews.length) {
      newIndex = 0;
    }
    setIndex(newIndex);
  }

  useEffect(() => {
    let slider = setInterval(() => {
      changeReview(index + 1);
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])
  
  const getClassName = (i) => {
    let className = 'nextSlide'
    if (i === index) {
      className = 'activeSlide';
    } else if (i === index - 1 || (index === 0 && i === reviews.length - 1)) {
      className = 'lastSlide'
    }
    return className;
  }

  return <div className='section'>
    <div className='title'>
      <h2><span>/</span>Reviews</h2>
    </div>
    <div className='section-center'>
      {reviews.map((review, i) => {
        return <article key={review.id} className={getClassName(i)}>
          <img className='person-img' src={review.image}></img>
          <h4>{review.name}</h4>
          <p className='title'>{review.title}</p>
          <p className='text'>{review.quote}</p>
          <FaQuoteRight className='icon'></FaQuoteRight>
        </article>
      })}
      <button className="prev" onClick={() => changeReview(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => changeReview(index + 1)}>
        <FiChevronRight />
      </button>
    </div>
  </div>;
}

export default App;
