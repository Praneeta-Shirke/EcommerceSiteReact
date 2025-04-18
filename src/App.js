import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { BrowserRouter, Routes, Route, Router, Switch } from "react-router-dom";
// import ReactDOM from "react-dom/client";

import Header from "./Components/header/header";
import Home from "./pages/Home";
// import About from "./pages/About";
import Footer from "./Components/Footer/footer";
import ElectronicsListing from "./pages/ElectronicsListing/electronics";
import RoutesApp from "./RouterApp";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <>
      <Header products={products} setProducts={setProducts}/>
      {/* <Home products={products} setProducts={setProducts}/> */}
      {/* <ElectronicsListing/> */}
      <RoutesApp/>
    {/* </Router> */}
    <Footer/>
    </>
  );
}

export default App;
