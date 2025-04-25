import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { BrowserRouter, Routes, Route, Router, Switch } from "react-router-dom";
// import ReactDOM from "react-dom/client";
// import About from "./pages/About";
import RoutesApp from "./RouterApp";
import { productsAtom } from "./Recoil/atom";
import { useAtom } from "jotai";

function App() {

  return (
    <>
      {/* <Home products={products} setProducts={setProducts}/> */}
      {/* <ElectronicsListing/> */}
      <RoutesApp/>
    {/* </Router> */}
    </>
  );
}

export default App;
