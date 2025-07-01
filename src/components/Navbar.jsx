import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function NavBar() {
  const [selectedItem, setSelectedItem] = useState('slide-item-1'); 

  const handleRadioChange = (e) => {
    setSelectedItem(e.target.id);
  };

  return (
    // <nav className="slidemenu">
      
    //   <input
    //     href="http://localhost:5173/articles"
    //     type="radio"
    //     name="slideItem"
    //     id="slide-item-1"
    //     className="slide-toggle"
    //     checked={selectedItem === 'slide-item-1'}
    //     onChange={handleRadioChange}
    //   />
    //   <label htmlFor="slide-item-1">
    //     <a  href="/" className="icon">🏠</a>
    //     <span>Home</span>
    //   </label>
    
     
    //   <input
    //     type="radio"
    //     name="slideItem"
    //     id="slide-item-2"
    //     className="slide-toggle"
    //     checked={selectedItem === 'slide-item-2'}
    //     onChange={handleRadioChange}
    //   />
    //   <label htmlFor="slide-item-2">
    //     <a href="/topics" className="icon">📝</a>
    //     <span>Topics</span>
    //   </label>
      
     
    //   <input
    //     type="radio"
    //     name="slideItem"
    //     id="slide-item-3"
    //     className="slide-toggle"
    //     checked={selectedItem === 'slide-item-3'}
    //     onChange={handleRadioChange}
    //   />
    //   <label htmlFor="slide-item-3">
     
    //     <a href="/users" className="icon">👤</a>
    //       <span>Users</span>
       
    //     </label>

            
    //         <input
    //     type="radio"
    //     name="slideItem"
    //     id="slide-item-4"
    //     className="slide-toggle"
    //     checked={selectedItem === 'slide-item-4'}
    //     onChange={handleRadioChange}
    //   />
      
    //   <label htmlFor="slide-item-4">
    //     <a href="/search-articles"className="icon">A</a>
       
    //     <span>Articles</span>
    //   </label>
      
    //   <div className="clear"></div>
      
     
    //   <div className="slider">
    //     <div className="bar"></div>
    //   </div>
    // </nav>


    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Read it Back</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/topics">Topics</a>
        <a className="nav-link" href="/search-articles">Articles</a>
        <a className="nav-link" href="/users">Users</a>
      </div>
    </div>
  </div>
</nav>

    
    
  );
}

export default NavBar;