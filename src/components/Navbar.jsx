import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function NavBar() {
  const [selectedItem, setSelectedItem] = useState('slide-item-1'); 

  const handleRadioChange = (e) => {
    setSelectedItem(e.target.id);
  };

  return (
    <nav className="slidemenu">
      
      <input
        href="http://localhost:5173/articles"
        type="radio"
        name="slideItem"
        id="slide-item-1"
        className="slide-toggle"
        checked={selectedItem === 'slide-item-1'}
        onChange={handleRadioChange}
      />
      <label htmlFor="slide-item-1">
        <a  href="/" className="icon">🏠</a>
        <span>Home</span>
      </label>
    
     
      <input
        type="radio"
        name="slideItem"
        id="slide-item-2"
        className="slide-toggle"
        checked={selectedItem === 'slide-item-2'}
        onChange={handleRadioChange}
      />
      <label htmlFor="slide-item-2">
        <a href="/topics" className="icon">📝</a>
        <span>Topics</span>
      </label>
      
     
      <input
        type="radio"
        name="slideItem"
        id="slide-item-3"
        className="slide-toggle"
        checked={selectedItem === 'slide-item-3'}
        onChange={handleRadioChange}
      />
      <label htmlFor="slide-item-3">
     
        <a href="/users" className="icon">👤</a>
          <span>Users</span>
       
        </label>

            
            <input
        type="radio"
        name="slideItem"
        id="slide-item-4"
        className="slide-toggle"
        checked={selectedItem === 'slide-item-4'}
        onChange={handleRadioChange}
      />
      
      <label htmlFor="slide-item-4">
        <a href="/search-articles"className="icon">A</a>
       
        <span>Articles</span>
      </label>
      
      <div className="clear"></div>
      
     
      <div className="slider">
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default NavBar;