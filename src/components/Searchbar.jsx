import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('topic');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, searchType);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
      />
     
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;