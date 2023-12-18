import * as React from "react";
import './App.css';
import Navbar from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import About from "./Pages/About";
import Homepage from "./Pages/Home.jsx";
import Products from "./Pages/Products";
import Team from "./Pages/Team";
import Footer from "./components/Footer.jsx";

function App() {
  
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/team" element={<Team/>}/>
        </Routes>


      </div>
      <section>
      <Footer></Footer>
  </section>
    </>
  )
}

export default App
