import React from 'react';
import './App.css';
import Home from './component/pages/HomePage/Home';
import Services from './component/pages/Services/Services';
import Products from './component/pages/Products/Product';
import SignUp from './component/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;