import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import navbarItems from './data.js';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Component/Home';
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs';
import Service from './Component/Service';
import Login from './Component/Login';
import Error12 from './Component/Error12';
import Dashboard from './Component/Dashboard';
import Blog from './Component/Blog';
import Footer from './Component/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <NavbarWithCondition />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/contactus" element={<ContactUs />} />
                  <Route path="/services" element={<Service />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="*" element={<Error12 />} />
                </Routes>
                <FooterWithCondition />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const NavbarWithCondition = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isDashboardPage = location.pathname === '/dashboard';

  if (isLoginPage || isDashboardPage) {
    return null; // Return null to hide the navbar on login and dashboard pages
  }

  return <Navbar navItems={navbarItems} />;
};

const FooterWithCondition = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isDashboardPage = location.pathname === '/dashboard';

  if (isLoginPage || isDashboardPage) {
    return null; // Return null to hide the footer on login and dashboard pages
  }

  return <Footer />;
};

export default App;
