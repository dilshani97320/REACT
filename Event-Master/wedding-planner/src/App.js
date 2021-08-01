import Navbar from './components/navbar';
import './App.css';
import Home from './components/Home';
import About from './components/about';
import Service from './components/service';
import Galary from './components/galary';
import Feedback from './components/feedback';
import Footer from './components/footer';

function App() {
  return (
    <div>
    
      <Navbar />
      <Home />
      <About />
      <Service />
      < Galary />
      <Feedback />
     <Footer/>
    </div>
  );
}

export default App;
