import { render } from '@testing-library/react';
import React ,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Index from './components/layouts/Index';
import './App.css';
import Navbar from './components/layouts/Navbar';
import {Provider} from './context';

class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
      <React.Fragment>
       <Navbar/>
     <div className="container">
          <switch>
            <Route exact path="/" component={Index}/>
          </switch>
     </div>
  
       </React.Fragment>
      </Router>
      </Provider>
    );
  }
  
}

export default App;
