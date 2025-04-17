import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductCard from '../../Components/ProductCard';
import '../ElectronicsListing/electronics.css';

const electronicsProducts =

[
  {
    title: 'Smartphone',
    price: 15000,
    image: 'https://m.media-amazon.com/images/I/41zxe8LzGrL._SX300_SY300_QL70_FMwebp_.jpg',
  },
  {
    title: 'Laptop',
    price: 55000,
    image: 'https://m.media-amazon.com/images/I/412UMSXXm-L._SX300_SY300_QL70_FMwebp_.jpg',
  },
  {
    title: 'Headphones',
    price: 1200,
    image: 'https://m.media-amazon.com/images/I/41GMgZG6zdL.AC_SX250.jpg',
  },
  {
    title: 'Smartwatch',
    price: 3500,
    image: 'https://m.media-amazon.com/images/I/419VgiWUHXL.AC_SX250.jpg',
  },
  {
    title: 'Bluetooth Speaker',
    price: 2200,
    image: 'https://m.media-amazon.com/images/I/61yeC+2-dIL._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    title: 'Tablet',
    price: 18000,
    image: 'https://m.media-amazon.com/images/I/51vSFNMTfEL._AC_UY327_FMwebp_QL65_.jpg',
  },
];

const ElectronicsListing = () => {
  return (
    <div className="electronics-section container-fluid">
      {/* <h2 className="section-heading">Electronics</h2>
      <div className="product-grid">
        {electronicsProducts.map((item) => (
          <ProductCard {...item} />
        ))}
      </div> */}
    </div>
  );
};

export default ElectronicsListing;
