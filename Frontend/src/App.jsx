import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/pages/Home';
import Aboutus from './components/pages/Aboutus';
import Book from './components/pages/Book';
import ContactUs from './components/pages/ContactUs';
import SpecialOffers from './components/pages/SpecialOffers';
import Tours from './components/pages/Tours';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/specialoffers" element={<SpecialOffers />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


