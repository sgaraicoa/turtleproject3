import React from 'react';
// import { Link } from 'react-router-dom';

const Cocktail = (props) => {
  console.log("Cocktail", props)
  if (props.cocktail.strDrinkThumb === null){
    return(
      <div className="cocktails">
      <h3 className="drink-heading">{props.cocktail.strDrink}</h3>
      <img src="http://i.imgur.com/3mNkjCZ.png" alt="no image available" className="cocktail-image" />
      <h3 className="drink-heading">Recipe:</h3>
      <ul className="recipe-instructions">
          <li>{props.cocktail.strMeasure1} {props.cocktail.strIngredient1}</li>
          <li>{props.cocktail.strMeasure2} {props.cocktail.strIngredient2}</li>
          <li>{props.cocktail.strMeasure3} {props.cocktail.strIngredient3}</li>
          <li>{props.cocktail.strMeasure4} {props.cocktail.strIngredient4}</li>
          <li>{props.cocktail.strMeasure5} {props.cocktail.strIngredient5}</li>
          <li>{props.cocktail.strMeasure6} {props.cocktail.strIngredient6}</li>
      </ul>
      </div>
      )
  } else {
    return(
      <div className="cocktails">
      <h3 className="drink-heading">{props.cocktail.strDrink}</h3>
      <img src={props.cocktail.strDrinkThumb} alt="no image available" className="cocktail-image" />
      <h3 className="drink-heading">Recipe:</h3>
      <ul className="recipe-instructions">
          <li>{props.cocktail.strMeasure1} {props.cocktail.strIngredient1}</li>
          <li>{props.cocktail.strMeasure2} {props.cocktail.strIngredient2}</li>
          <li>{props.cocktail.strMeasure3} {props.cocktail.strIngredient3}</li>
          <li>{props.cocktail.strMeasure4} {props.cocktail.strIngredient4}</li>
          <li>{props.cocktail.strMeasure5} {props.cocktail.strIngredient5}</li>
          <li>{props.cocktail.strMeasure6} {props.cocktail.strIngredient6}</li>
      </ul>
      </div>
      )
  }
}

export default Cocktail;
