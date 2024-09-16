document.addEventListener("DOMContentLoaded", () => {
  const recipe = {
    mainImage: "https://via.placeholder.com/800x400?text=Main+Image",
    name: "Delicious Pancakes",
    description:
      "A simple and delicious pancake recipe that’s perfect for breakfast.",
    category: "Breakfast",
    difficulty: "Easy",
    servings: 4,
    time: 20,
    ingredients: 6,
    videoImage: "https://via.placeholder.com/800x400?text=Video",
    ingredientList: [
      { name: "Flour", quantity: "2 cups" },
      { name: "Milk", quantity: "1.5 cups" },
      { name: "Eggs", quantity: "2" },
      { name: "Sugar", quantity: "2 tablespoons" },
      { name: "Baking Powder", quantity: "1 tablespoon" },
      { name: "Salt", quantity: "1/2 teaspoon" },
    ],
    instructions: [
      "In a large bowl, mix together the flour, sugar, baking powder, and salt.",
      "In another bowl, whisk the eggs, milk, and melted butter.",
      "Pour the wet ingredients into the dry ingredients and stir until just combined.",
      "Heat a griddle or frying pan over medium heat and lightly grease with butter.",
      "Pour 1/4 cup of batter onto the griddle for each pancake. Cook until bubbles form on the surface, then flip and cook until golden brown.",
      "Serve warm with your favorite toppings.",
    ],
  };

  injectRecipeData(recipe);
});

function injectRecipeData(recipe) {
  document.querySelector('img[style*="width: 100%"]').src = recipe.mainImage;

  document.getElementById("recipe-category").textContent = recipe.category;
  document.getElementById("recipe-difficulty").textContent = recipe.difficulty;

  document.querySelector("h1").textContent = recipe.name;
  document.querySelector(".recipe-description").textContent =
    recipe.description;

  document.getElementById(
    "recipe-servings"
  ).nextElementSibling.textContent = `${recipe.servings} porciones`;
  document.getElementById(
    "recipe-time"
  ).nextElementSibling.textContent = `${recipe.time} Minutos`;

  document.getElementById(
    "recipe-ingredients"
  ).textContent = `${recipe.ingredients} Ingredientes`;

  const ingredientList = document.getElementById("recipe-ingredients");
  ingredientList.innerHTML = recipe.ingredientList
    .map(
      (ing) => `
      <li style="margin-bottom: 10px; display: flex; align-items: center">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FF0000' width='18px' height='18px'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/svg%3E"
          alt="Ingrediente"
          style="margin-right: 10px"
        />
        <span>${ing.name}: <strong>${ing.quantity}</strong></span>
      </li>
    `
    )
    .join("");

  const instructionsList = document.getElementById("recipe-instructions");
  instructionsList.innerHTML = recipe.instructions
    .map(
      (step) => `
      <li style="margin-bottom: 10px">${step}</li>
    `
    )
    .join("");
}
