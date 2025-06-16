import React, {  } from 'react';
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Users from "./pages/Users";


function App() {

  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users"  element={ <Users /> } 
        />
      </Routes>
    </>
  );
}

export default App;

