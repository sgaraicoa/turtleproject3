const db = require('../db');

const Cocktails = {};

Cocktails.findAll = () => {
    return db.any(`SELECT * FROM cocktails`);
}

// Cocktails.create = (idDrink, strDrink, strCategory, strAlcoholic, strGlass, strInstructions, strDrinkThumb, strIngredient1, strIngredien2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strMeasure1, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10) => {
//     return db.one(
//       'INSERT INTO cocktails(idDrink, strDrink, strCategory, strAlcoholic, strGlass, strInstructions, strDrinkThumb, strIngredient1, strIngredien2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26) RETURNING id', [idDrink, strDrink, strCategory, strAlcoholic, strGlass, strInstructions, strDrinkThumb, strIngredient1, strIngredien2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strMeasure1, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10]
//       );
// }
module.exports = Cocktails;
