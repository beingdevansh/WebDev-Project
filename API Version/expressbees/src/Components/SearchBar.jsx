import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <form className="search-box" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleInputChange}
      />
      {query && (
        <button type="button" className="clear-btn" onClick={handleClear}>
          ×
        </button>
      )}
      <button type="submit" className="search-btn">
        🔍
      </button>
    </form>
  );
}