import React from 'react';
import './productCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="card-content">
        <span className="category-tag">{product.category}</span>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        
        <div className="card-footer">
          <button className="btn-edit">Edit</button>
          <button className="btn-delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;