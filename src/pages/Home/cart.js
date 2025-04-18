import React, { useEffect, useState } from "react";
import Slider from "../Home/slider/index.js";
import CatSlider from "../../Components/catSlider/index.js";
import ProductCard from "../../Components/Product/ProductCard.js";
import { useLocation, useParams } from "react-router-dom";

// search https://dummyjson.com/products/search?limit=200&q=popular
// category

const Cart = ({setCart, cart}) => {
  return (
    <>
      <section className="product-section container-fluid py-4">
        <h2 className="mb-4">Carts</h2>
        <div className="row">
          {cart?.map((item) => (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4"
              key={item.id}
            >
              
              <ProductCard prod={item} isCart={true} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Cart;
