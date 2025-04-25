import React, { useEffect, useMemo, useState } from "react";
import Slider from "../Home/slider/index.js";
import ProductCard from "../../Components/Product/ProductCard.js";
import { useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cartsAtom, productsAtom } from "../../Recoil/atom.js";
import { useAtom } from "jotai";

// search https://dummyjson.com/products/search?limit=200&q=popular
// category

const Home = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useAtom(productsAtom);
  const [cart, setCart] = useAtom(cartsAtom);

  const paramValue = searchParams.get("category");

  useEffect(() => {
    const url = !paramValue ? "" : `/category/${paramValue}`;
    fetch("https://dummyjson.com/products" + url + "?limit=200")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res?.products || res);
      });
  }, [paramValue]);
  console.log("products", products)
  const displayCard = useMemo(() => {
    return (
      <div className="row">
        {products?.map((item) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4" key={item.id}>
            <ProductCard
              prod={item}
              cart={cart}
              setCart={setCart}
              isCart={false}
            />
          </div>
        ))}
      </div>
    );
  }, [products]);

  return (
    <>
      <Slider />
      <section className="product-section container-fluid py-4">
        <h2 className="mb-4">Latest Products</h2>
        {displayCard}
      </section>
    </>
  );
};

export default Home;
