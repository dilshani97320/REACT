
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/pages/HomePage/Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <switch>
        <Route path='/' exact component={Home}/>
      </switch>
    </Router>

  );
}

export default App;
