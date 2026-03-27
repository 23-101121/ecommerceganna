import React from 'react';
import './nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">ShopHub</div>
      <div className="nav-actions">
        <button className="add-btn-top">+ Add Product</button>
      </div>
    </nav>
  );
};

export default Nav;