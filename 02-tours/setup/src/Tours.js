import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  return <>
    {tours.map((tour) => <Tour tour={tour} key={tour.id} removeTour={removeTour}></Tour>)}
  </>
};

export default Tours;
