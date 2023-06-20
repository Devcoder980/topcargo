import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import navbarItems from './data.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs';
import Service from './Component/Service';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar navItems={navbarItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/blog" element={<h1>Blog</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
