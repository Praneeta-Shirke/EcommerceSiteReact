import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Blog from "./pages/Blogs/index";
import Contact from "./pages/Contact/index";
import NotFound from "./pages/NotFound/index";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signin";
import Cart from "./pages/Home/cart";

function RoutesApp() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
  
  return (
    <div className="container mt-3">
      <Routes>
        <Route path="/About" element={<About/>} />
        <Route path="/Blogs" element={<Blog/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        {/* <Route path="/beauty" element={<Home products={products} setProducts={setProducts} cart={cart} setCart={setCart}/>} /> */}
        <Route path="/" element={<Home products={products} setProducts={setProducts} cart={cart} setCart={setCart}/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default RoutesApp;