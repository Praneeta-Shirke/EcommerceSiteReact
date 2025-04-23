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
import Header from "./Components/header/header";
import Footer from "./Components/Footer/footer";

function RoutesApp({products, setProducts}) {
    const [cart, setCart] = useState([]);
  
   const email = sessionStorage.getItem("email");
  return (
    !email?
    <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        </Routes>
    :<>
      <Header products={products} setProducts={setProducts}/>
    <div className="container mt-3">
      <Routes>
        <Route path="/About" element={<About/>} />
        <Route path="/Blogs" element={<Blog/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        <Route path="/" element={<Home products={products} setProducts={setProducts} cart={cart} setCart={setCart}/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default RoutesApp;