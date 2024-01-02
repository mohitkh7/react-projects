import React from 'react';

const Menu = ({items}) => {
  return <section className='section-center'>
    {items.map((item) => {
      return (
        <div className='menu-item' key={item.id}>
          <img className='photo' src={item.img} alt={item.title}></img>
          <div className='item-info'>
            <header>
              <h4>{item.title}</h4>
              <h4 className='price'>${item.price}</h4>
            </header>
            <p className='item-text'>{item.desc}</p>
          </div>
        </div>
      )
    })}
  </section>
};

export default Menu;
