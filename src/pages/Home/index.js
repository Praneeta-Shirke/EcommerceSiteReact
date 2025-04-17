import React, { useEffect, useState } from "react";
import Slider from "../Home/slider/index.js";
import CatSlider from "../../Components/catSlider/index.js";
import ProductCard from "../../Components/ProductCard.js";
import { useLocation, useParams } from "react-router-dom";
// search https://dummyjson.com/products/search?limit=200&q=popular
// category

const Home = () => {
  const [products, setProducts] = useState([]);
  const { pathname } = useLocation();
  console.log("path", pathname);
  useEffect(() => {
    const url = pathname === "/" ? "" : `/category${pathname}`;
    fetch("https://dummyjson.com/products" + url+"?limit=200")
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res)
        setProducts(res?.products || res);
      });
  }, [pathname]);
  return (
    <>
      <Slider />
      {/* <CatSlider /> */}

      <section className="product-section container-fluid py-4">
        <h2 className="mb-4">Latest Products</h2>
        <div className="row">
          {products.map((item) => (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4"
              key={item.id}
            >
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
