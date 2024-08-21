import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Home from './assets/pages/Home';
import Aboutus from './assets/pages/Aboutus';
import Book from './assets/pages/Book';
import ContactUs from './assets/pages/ContactUs';
import SpecialOffers from './assets/pages/SpecialOffers';
import Tours from './assets/pages/Tours';

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
      <Body />
      <Footer />
    </Router>
  );
}

export default App;

