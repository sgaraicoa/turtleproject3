import React, { Component } from 'react';
import Axios from 'axios';
import Cocktail from './Cocktail';
// import { Link } from 'react-router-dom';


class Recipes extends Component {
  constructor(){
    super();
    this.state = {
      // currentCocktail: null,
      // value: '',
      cocktailList: []
    }
  }

  getCocktailDB(e){
    // console.log(e);
    Axios.get(`http://www.thecocktaildb.com/api/json/v1/5983/search.php?s=${this.state.value}`)
         .then((response) => {
          console.log('some stuff should be here', response.data);
          this.setState(prevState => {
            const list = prevState.cocktailList,
                  list2 = list.concat(response.data.drinks);
            console.log('the list:', list2)
            return {cocktailList: list2};
          })
          setTimeout(()=> {console.log('cocktailList after state:', this.state.cocktailList)}, 1000)
          })
         .catch((error) => {
            console.log(error);
          })
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      cocktailList: []
    })

    this.getCocktailDB(e);
  }

  renderCocktailList(){
    return this.state.cocktailList.map((cocktail, index) => {
      return <Cocktail cocktail={cocktail} key={index} />
    });
  }
  render(){
    console.log('state', this.state)
    return(
      <div className="recipes-div">
          <p>Search for a cocktail recipe!</p>
        <div className="form-container">
            <form onSubmit={e => this.handleSubmit()}>
              <input className="input"
                     type="text"
                     placeholder="Search by cocktail name"
                     value={this.state.value}
                     onChange={(e) => this.handleChange(e)}
              />
              <br />
              <input className="search"
                     type="submit"
                     value="Search"
                     onClick={(e) => this.handleSubmit(e)}
              />
            </form>
        </div>
        <div className="results-container">
          {this.renderCocktailList()}
        </div>
      </div>
    )
  }
}

export default Recipes;
