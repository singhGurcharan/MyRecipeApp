import React, { Component } from 'react'
import Form from './components/Form'
import Recipes from './components/Recipes'
const API_KEY="4b7f6942ce6e81eb3a5fb3a2c08d3d8c"
  

class App extends Component {
  state={
    recipes:[]
  }
  getRecipe = async (e)=>{
    const recipeName=e.target.elements.recipeName.value;
    e.preventDefault();
    const data= await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`).then(response=>response.json());
    this.setState({recipes:data.recipes});
    console.log(this.state.recipes); 
  
  }
  
  componentDidMount=()=>{
    const json=localStorage.getItem("recipes");
    const recipes=JSON.parse(json);
    this.setState({recipes});
  }

  componentDidUpdate=()=>{
    const recipes=JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes",recipes);
  }

  render() {
    return (
      <div className="App">
      <header>
        <h1>Recipe App</h1>
      </header>
      <Form getRecipe={this.getRecipe}/>
      <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}


export default App;
