import React, { Component } from "react";
import foods from "./foods.json";
import FoodBox from "./component/FoodBox";
import AddFood from "./component/AddForm";
import Search from "./component/Search";
import TodaysFoods from "./component/TodaysFoods"

import "./App.css";

//Todays food to calculate calories 
const foodsInfo = foods.map((food, i) => {
  return {
    ...food,
    id: i + 1,
    cal: 0
  }
})
class App extends Component {
  state = {
    foodsInfo,
    foods: [...foodsInfo],
    showForm: false,
    newFood: {
      name: "",
      calories: "",
      image: "",
      id: "",
      quantity: 0,
      cal: 0,
    },
    itemsList: [],
    totalCalories: 0        
  };

  

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  // Add new item
addNewItem = e => {
  e.preventDefault()
  let { foods, foodsInfo, newFood } = this.state
  const input = document.querySelectorAll('.input-form')
  newFood['id'] = foodsInfo.length + 1
  this.setState({newFood})
  const updatedFoodsInfo = [...foodsInfo, newFood]
  const updatedFoods = [...foods, newFood]
  this.setState({ foodsInfo: updatedFoodsInfo, foods: updatedFoods})
  this.setState({ newFood: { name: '', calories: '', quantity: 0, cal: 0}})  
 
}
  // Handle input changes

  valueApp = e => {
    const { name, value } = e.target;
    const { newFood } = this.state;
    if (name === "image") {
      const input = document.getElementById("image-file");
      let fileReader = new FileReader();
      fileReader.readAsDataURL(input.files[0]);
      fileReader.onloadend = function(e) {
        newFood[name] = `${e.target.result}`;
      };
    }
    newFood[name] = value;
    this.setState({ newFood });
  };


  //Creating two function to submit button, one for submit the form and other to toggle inverse (close) the form
  handleSubmit = e => {
    e.preventDefault();
    const { newFood } = this.state;
    this.setState(preventDefault => ({
      copyFoods: [...preventDefault.copyFoods, newFood]
    }));
    this.setState({
      newFood: {
        name: "",
        calories: 0,
        image: "",
        quantity: 0
      }
    });
  };

// Search input handler

  handleSearch = e => {
    const { foodsInfo } = this.state;
    const { value } = e.target; //we want to "see" what are searching on our input search / the input is my value
    const searchItems = foodsInfo.filter(eachFood => eachFood.name.toLowerCase().includes(value.toLowerCase())
    )
    this.setState({
      foods: searchItems
    })  
  };

  render() {
    const { foods, itemsList, totalCalories } = this.state;
    return (
      <div className="App container">
        <button onClick={this.toggleForm}> Add new item! </button>
          <Search handleSearch={this.handleSearch} />
          <div className='todays-list'>
            <h2 className='todays-title'>Today's Foods</h2>
            <div className='todays-foods'>
                <ul>
                {itemsList.map((item,i) =>  <TodaysFoods key={i+1} {...item} removeIngredient={this.removeIngredient.bind(this)}/> )}
                </ul>
            </div>
            <h1><strong>Total: {totalCalories} cal</strong></h1>
          </div>
        {this.state.showForm ? (
          <AddFood
          handleSubmit={this.addNewItem}
          handleChange={this.valueApp}
          // newFood={this.state.newFood}
          />
          ) : null}
        <div className="box">
          {foods.map((eachFood, index) => (
            <FoodBox key={index+1} {...eachFood} />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
