import React from "react";
import Slider from "../Home/slider/index.js";
import CatSlider from "../../Components/catSlider/index.js";
import ProductCard from '../../Components/ProductCard.js';

const products = [
  {
    id: 1,
    title: "Purepet catFood",
    price: 899,
    image: "https://images-eu.ssl-images-amazon.com/images/I/61rrqJmufiL._AC_UL450_SR450,320_.jpg",
  },
  {
    id: 2,
    title: "Bluetooth Speaker",
    price: 3499,
    image: "https://m.media-amazon.com/images/I/61yeC+2-dIL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 4999,
    image: "https://m.media-amazon.com/images/I/51QuGmNq-RL._SR480,440_.jpg",
  },
  {
    id: 5,
    title: "Lamp",
    price: 899,
    image: "https://m.media-amazon.com/images/I/818yDyo4ciL._AC_UL480_QL65_.jpg",
  },
  {
    id: 6,
    title: "Women Kurtis",
    price: 899,
    image: "https://m.media-amazon.com/images/I/6194qVgwjuL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 7,
    title: "Samsung Galaxy Phone",
    price: 28899,
    image: "https://m.media-amazon.com/images/I/61-g46cjguL._SX679_.jpg",
  },
];

const Home = () => {
  return (
    <>
      <Slider />
      <CatSlider />

      <section className="product-section container-fluid py-4">
        <h2 className="mb-4">Latest Products</h2>
        <div className="row">
          {products.map((item) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4" key={item.id}>
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
