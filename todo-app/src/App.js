import react ,{useState}  from 'react';
import Form from './components/Form';
import Todolist from './components/Todolist';
import './App.css';

function App() {

  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  return (
    <react.Fragment>
<header>
      <h1>Dilshani's Todo List</h1>
    </header>
    
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <Todolist setTodos={setTodos} todos={todos}/>
    </react.Fragment>
    
    
      
  );
}

export default App;
