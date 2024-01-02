import React from 'react';

const Categories = ({filterMenuItems}) => {
  return <div className='btn-container'>
    <button className='filter-btn' onClick={() => filterMenuItems('all')}>All</button>
    <button className='filter-btn' onClick={() => filterMenuItems('breakfast')}>Breakfast</button>
    <button className='filter-btn' onClick={() => filterMenuItems('lunch')}>Lunch</button>
    <button className='filter-btn' onClick={() => filterMenuItems('shakes')}>Shakes</button>
  </div>
};

export default Categories;
