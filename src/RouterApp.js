import React, { lazy, Suspense, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "";
import About from "./pages/About/index";
import Blog from "./pages/Blogs/index";
import Contact from "./pages/Contact/index";
import NotFound from "./pages/NotFound/index";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signin";
import Cart from "./pages/Home/cart";
import Header from "./Components/header/header";
import Footer from "./Components/Footer/footer";
import PrivateRoute from "./pages/NotAuthorised/index";
import { cartsAtom } from "./Recoil/atom";
import { useAtom } from "jotai";
const Home = lazy(() => import('./pages/Home/index'));

function RoutesApp() {

  const email = sessionStorage.getItem("email");

  const auth = useMemo(() => {
    return !email ? (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Suspense>
    ) : (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <div className="container mt-3">
            <Routes>
              <Route path="/About" element={<About />} />
              <Route path="/Blogs" element={<Blog />} />
              <Route path="/Contact" element={<Contact />} />
              <Route
                path="/cart"
                element={<Cart />}
              />
              <Route
                path="/"
                element={
                  <Home
                  />
                }
              />
              <Route path="/unauthorized" element={<PrivateRoute />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Suspense>
      </>
    );
  }, [email]);
  return auth;
}

export default RoutesApp;
