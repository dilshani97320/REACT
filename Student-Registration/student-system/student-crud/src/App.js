import { useEffect,useState } from 'react';
import './App.css';
import Todoform from './components/todoform';


function App() {
  return (
    <div className="row">
<h3 className="text-center my-5">Todo App</h3>
<Todoform />
    </div>
  );
}

export default App;
