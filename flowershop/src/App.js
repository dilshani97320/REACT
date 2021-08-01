import React from 'react';
import './App.css';
import About from './components/about';
import Header from './components/header';
import Product from './components/product';
import Offer from './components/offer';
import Packages from './components/packages';
import Feedback from './components/feedback';
import Footer from './components/footer';

function App() {
  return (
    <div>
     <Header />
     <About />
     <Product />
     < Offer />
     <Packages />
     <Feedback />
     <Footer />
    </div>
  );
}

export default App;
