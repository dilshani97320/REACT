import react ,{useState,useEffect}  from 'react';
import Form from './components/Form';
import Todolist from './components/Todolist';
import './App.css';

function App() {

  


  //state stuff

  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
const [status,setStatus]=useState("all");
const [filteredtodo,setFilteredTodo]=useState([]);

//use effect
useEffect(() =>{
  console.log("hey");
},[todos,status]);

//functions

const filterHandler =()=>{
  switch (status)
  {
    case 'completed':
      setFilteredTodo(todos.filter(todo => todos.completed === true));
      break;
      case 'uncompleted':
        setFilteredTodo(todos.filter(todo => todos.completed === false));
      break;
      default:
        setFilteredTodo(todos);
        break;

  }
}
  return (
    <react.Fragment>
<header>
      <h1>Dilshani's Todo List</h1>
    </header>
    
      <Form 
      inputText={inputText} 
      todos={todos}
       setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
         />
      <Todolist filteredtodo={filteredtodo} setTodos={setTodos} todos={todos}/>
    </react.Fragment>
    
    
      
  );
}

export default App;
