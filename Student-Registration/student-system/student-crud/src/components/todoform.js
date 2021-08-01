import React,{useEffect,useState} from 'react';
import firebase from '../firebase';


export default function todoform(){
    const [title,setTitle] = useState('');

    const handleOnChange = (e) =>{
        setTitle(e.target.value);
    };

    const createTodo =()=>{
        const todoRef = firebase.database().ref("Todo");
    
    const todo ={
        title,
        complete:false,
    };

    todoRef.push(todo);
    
    };

    return (
        <div className="container d-flex justify-content-center">
            <input type="text" onChange={handleOnChange} />
            <button onClick={createTodo}>Add Todo</button>
        </div>
    );
}


