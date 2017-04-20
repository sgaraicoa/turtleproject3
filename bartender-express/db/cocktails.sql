DROP TABLE IF EXISTS cocktails;

CREATE TABLE cocktails(
id SERIAL PRIMARY KEY,
idDrink INT NOT NULL,
strDrink VARCHAR(255) NOT NULL,
strCategory VARCHAR(255) NOT NULL,
strAlcoholic VARCHAR(255) NOT NULL,
strGlass VARCHAR(255) NOT NULL,
strInstructions VARCHAR(255) NOT NULL,
strDrinkThumb VARCHAR(255) NOT NULL,
strIngredient1 VARCHAR(255) NOT NULL,
strIngredient2 VARCHAR(255) NOT NULL,
strIngredient3 VARCHAR(255) NOT NULL,
strIngredient4 VARCHAR(255) NOT NULL,
strIngredient5 VARCHAR(255) NOT NULL,
strIngredient6 VARCHAR(255) NOT NULL,
strIngredient7 VARCHAR(255) NOT NULL,
strIngredient8 VARCHAR(255) NOT NULL,
strIngredient9 VARCHAR(255) NOT NULL,
strIngredient10 VARCHAR(255) NOT NULL,
strMeasure1 VARCHAR(255) NOT NULL,
strMeasure2 VARCHAR(255) NOT NULL,
strMeasure3 VARCHAR(255) NOT NULL,
strMeasure4 VARCHAR(255) NOT NULL,
strMeasure5 VARCHAR(255) NOT NULL,
strMeasure6 VARCHAR(255) NOT NULL,
strMeasure7 VARCHAR(255) NOT NULL,
strMeasure8 VARCHAR(255) NOT NULL,
strMeasure9 VARCHAR(255) NOT NULL,
strMeasure10 VARCHAR(255) NOT NULL
);

INSERT INTO cocktails (idDrink, strDrink, strCategory, strAlcoholic, strGlass, strInstructions, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,
  strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10) VALUES
('13060', 'Margarita', 'Ordinary drink', 'Alcoholic', 'Cocktail glass', 'Rub rim of cocktail glass with lime juice, dip rim in salt. Shake all ingredients with ice, strain into the salt-rimmed glass, and serve.', 'http://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg', 'Tequila', 'Triple Sec', 'Lime juice', 'Salt', '', '', '', '', '', '', '1 1/2 oz', '1/2 oz', '1 oz', '', '', '', '', '', '', '');



