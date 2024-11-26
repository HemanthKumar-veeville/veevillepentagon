
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

const MainLayout = ({ children }) => (
  <div className="main-layout">
    <Header />
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
