import React, { useState } from 'react';

const Tour = ({tour, removeTour}) => {
  const [readMore, setReadMore] = useState(false);
  return <article className='single-tour' id={tour.id}>
    <img src={tour.image} />
    <footer>
      <div className='tour-info'>
        <h4>{tour.name}</h4>
        <h4 className='tour-price'>{tour.price}</h4>
      </div>
      <p>
        {readMore ? tour.info : tour.info.substring(0, 200)}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? 'Show Less' : '... Show More'}
        </button>
      </p>
      <button className='delete-btn' onClick={() => removeTour(tour.id)}>Not Interested</button>
    </footer>
  </article>
};

export default Tour;
