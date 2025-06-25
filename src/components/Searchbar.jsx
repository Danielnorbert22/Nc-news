import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [selectedItem, setSelectedItem] = useState('slide-item-1'); // Default to Home

  const handleRadioChange = (e) => {
    setSelectedItem(e.target.id);
  };

  return (
    <nav className="slidemenu">
      
      <input
        type="radio"
        name="slideItem"
        id="slide-item-1"
        className="slide-toggle"
        checked={selectedItem === 'slide-item-1'}
        onChange={handleRadioChange}
      />
      <label htmlFor="slide-item-1">
        <p className="icon">🏠</p>
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
        <p className="icon">📝</p>
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
        <p className="icon">👤</p>
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
        <p className="icon">+</p>
        <span>Add  An Article</span>
      </label>
      
      <div className="clear"></div>
      
      {/* Slider Bar */}
      <div className="slider">
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default SearchBar;