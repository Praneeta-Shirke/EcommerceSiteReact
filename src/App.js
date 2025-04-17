import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Header from './Components/header/header';
import Home from './pages/Home';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Footer/>

    </>  
  );
}

export default App;
