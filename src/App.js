import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './component/Header'
import Recipes from './component/Recipes';
import Axios from 'axios';
import axios from 'axios'

function App() {
  const[search , setSearch] = useState('chiken');
  const[recipes , setRecipes] = useState([]);
  const APP_ID = `26a736d1`;
  const APP_KEY = `f8895faa1bb2622f283354089d9654c2`;
  useEffect(()=>{
    getRecipes();
  }, []);

const getRecipes = async ()=>{
  const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  setRecipes(res.data.hits);
}








  const onInputChange = (e)=>{
    setSearch(e.target.value)
  }
  const onSearchClick = () => {
    getRecipes();
}
  return (
    <div className="App">
      
      <Header search = {search}  onInputChange ={onInputChange}
        onSearchClick = {onSearchClick}
      />
      <div className='container'>
      <Recipes  recipes = {recipes}/>
      </div>
    </div>
  );
}

export default App;
