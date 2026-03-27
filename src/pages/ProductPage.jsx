import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import './productPage.css';

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching the product as learned in Lecture 4
    fetch('https://dummyjson.com/products/1')
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1 className="loading">Loading...</h1>;

  return (
    <div className="product-page">
      <Nav />
      <div className="container">
        <div className="product-details-wrapper">
          {/* Left Side: Large Image */}
          <div className="image-section">
            <img src={product.thumbnail} alt={product.title} />
          </div>

          {/* Right Side: Info */}
          <div className="info-section">
            <span className="category-badge">{product.category}</span>
            <h1 className="product-title">{product.title}</h1>
            <p className="product-description">{product.description}</p>
            <h2 className="product-price">${product.price}</h2>
            
            <div className="product-meta">
              <span>⭐ {product.rating}</span>
              <span>Stock: {product.stock}</span>
            </div>
            
            <button className="buy-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;