
import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
    </Router>

  );
}

export default App;
