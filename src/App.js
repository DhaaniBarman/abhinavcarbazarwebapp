import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import Taxi from './components/services/Taxi';
import Carbazar from './components/services/Carbazar';
import Tourandtravels from './components/services/Tourandtravels';
import Allcar from './components/cargallery/Allcar';
import Allplace from './components/services/Allplace';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taxi" element={<Taxi />} />
        <Route path="/carbazar" element={<Carbazar/>} />
        <Route path="/tourandtravels" element={<Tourandtravels />} />
        <Route path='/allcar' element={<Allcar />} />
        <Route  path='allplace' element={<Allplace />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
