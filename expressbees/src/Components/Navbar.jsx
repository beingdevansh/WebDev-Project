import React, { useState } from 'react';

export default function Navbar({ categories, cartCount, onOpenCart, onSearch, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    onSearch(val);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => onNavigate('shop')} style={{ cursor: 'pointer' }}>
        ExpressBees
      </div>

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

        <button type="submit" className="search-btn">🔍</button>
      </form>

      <div className="categories-menu-wrapper">
        <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰ <span className="menu-text">Categories</span>
        </button>

        {menuOpen && (
          <ul className="categories-dropdown">
            {categories.map((cat) => (
              <li key={cat.id}>
                <a href={`#${cat.id}`} onClick={() => setMenuOpen(false)}>
                  {cat.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <ul className="nav-links">
        <li>
          <a
            href="#signin"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('signin');
            }}
          >
            Sign in
          </a>
        </li>
        <li><a href="contact.html">Contact</a></li>
        <li>
          <button className="cart-icon-btn" onClick={onOpenCart}>
            🛒 <span className="cart-badge">{cartCount}</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}