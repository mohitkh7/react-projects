import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterMenuItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const filteredItems = items.filter((item) => item.category === category);
    setMenuItems(filteredItems);
  }

  return <main className='menu'>
    <section className='section'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories filterMenuItems={filterMenuItems}/>
      <Menu items={menuItems}/>
    </section>
  </main>;
}

export default App;
