import React from 'react';
import './filters.css';

const Filters = () => {
  return (
    <div className="filters-container">
      <input 
        type="text" 
        placeholder="Search products..." 
        className="search-input" 
      />
      
      <div className="select-group">
        <select className="filter-select">
          <option value="">All Categories</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
        </select>

        <select className="filter-select">
          <option value="az">Sort By: Title (A-Z)</option>
          <option value="za">Sort By: Title (Z-A)</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;