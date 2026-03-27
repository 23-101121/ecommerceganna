import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Filters from "../components/Filters"; // 1. Import Filters
import ProductCard from "../components/ProductCard";
import "./home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res.products);
        setLoaded(false);
      });
  }, []);

  if (loaded) return <h1 className="loading">Loading ShopHub...</h1>;

  return (
    <div className="home-page">
      <Nav />
      {/* 2. Place Filters here */}
      <Filters /> 
      
      <div className="content">
        <h2 className="section-title">Products</h2>
        <div className="product-grid">
          {data.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;