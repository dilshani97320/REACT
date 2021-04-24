import react,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App =()=>{

const APP_ID = "c428fb5a";
const APP_KEY = "a78ebe92a68166fb37c7e2ea6b2a5fe3";

//const exampleReq="";

const [recipes,setRecipes]=useState([]);

useEffect(() => {
//console.log("Effect has been run");
getRecipes();

},[]);

const getRecipes =async ()=>{
const respose=await fetch('https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}')
const data= await respose.json();
setRecipes(data.hits);
console.log(data.hits);
}

  return(
   <div className="App">
     <form className="search-form">
       <input className="search-bar" type="text"/>
       <button className="search btn" type="submit"> Search
        </button>
     </form>
     {recipes.map(recipes=>(

       <Recipe/>
     ))}

     
    
   </div>


  );
};

export default App;
