import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';
import Navbar from './component/Navbar';

const App =()=>{
  

const APP_ID = "c428fb5a";
const APP_KEY = "a78ebe92a68166fb37c7e2ea6b2a5fe3";

//const exampleReq="";

const [recipes,setRecipes]=useState([]);
const [search,setSearch]=useState("");
const [query,setQuery]= useState("sea food");

useEffect(() => {
//console.log("Effect has been run");
getRecipes();

},[query]);

const getRecipes =async () =>{
const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
const data= await response.json();
setRecipes(data.hits);
console.log(data.hits);
};

const updateSearch = e =>{
  setSearch(e.target.value);
   //console.log(search);
};

const getSearch = e=>{
  e.preventDefault();
  setQuery(search);
  setSearch("");

};

  return(
    
   <div className="App">
     <Navbar/>
     
     
     <form onSubmit={getSearch} className="search-form">
       <input className="search-bar" type="text" value={search} onChange={updateSearch} />
       <button className="search-btn" type="submit"> Search
        </button>
     </form>
    
     <div className="recipe">
            {recipes.map(recipe=>(

        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
        ))}

     </div>
     
     
    
   </div>


  );
};

export default App;
