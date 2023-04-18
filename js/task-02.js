const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector("#ingredients");

const ingredientsArray = [];

ingredients.forEach(ingredient => {
  const ingredientElement = document.createElement("li");

  ingredientElement.textContent = ingredient;
  ingredientElement.classList = "item";

  ingredientsArray.push(ingredientElement);
});

ingredientsUl.append(...ingredientsArray);