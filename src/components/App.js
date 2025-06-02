// App.js
import React, { useState } from 'react';
import Menu from './components/Menu';
import './styles.css';
import menuItems from './components/data';


function App() {
  const [items, setItems] = useState(menuItems);
  const [category, setCategory] = useState('All');

  const handleFilter = (cat) => {
    setCategory(cat);
    if (cat === 'All') {
      setItems(menuItems);
    } else {
      setItems(menuItems.filter(item => item.category === cat));
    }
  };

  return (
    <div id="main">
      <h1>Menu</h1>
      <div className="button-container">
        <button id="filter-btn-1">Breakfast</button>
  <button id="filter-btn-2">Lunch</button>
  <button id="filter-btn-3">Shakes</button>
      </div>
      <Menu items={items} />
    </div>
  );
}

export default App;
