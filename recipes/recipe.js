(function () {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "http://localhost:5500/styles/index.css";
  document.head.appendChild(link);

  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get("id") || 1;

  const fakeApiCall = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const recipes = {
          1: {
            title: "Spaghetti Carbonara",
            ingredients: [
              "200g spaghetti",
              "100g pancetta",
              "2 large eggs",
              "50g pecorino cheese",
              "Black pepper",
              "Salt",
            ],
            steps: [
              "Boil the spaghetti in salted water.",
              "Fry the pancetta until crispy.",
              "Mix eggs and cheese in a bowl.",
              "Drain the spaghetti and combine with the pancetta.",
              "Remove from heat and quickly stir in the egg and cheese mixture.",
              "Season with black pepper and serve.",
            ],
            type: "italian",
          },
          2: {
            title: "Chicken Tikka Masala",
            ingredients: [
              "500g chicken breast",
              "1 cup yogurt",
              "2 tbsp garam masala",
              "1 onion",
              "2 garlic cloves",
              "400g tomatoes",
              "200ml cream",
            ],
            steps: [
              "Marinate the chicken in yogurt and spices for 2 hours.",
              "Cook the chicken in a hot pan until browned.",
              "In the same pan, fry onions and garlic until soft.",
              "Add tomatoes and cook down into a sauce.",
              "Stir in the cream and return the chicken to the pan.",
              "Simmer for 15 minutes and serve.",
            ],
            type: "indian",
          },
        };

        resolve(recipes[id] || recipes[1]);
      }, 1000);
    });
  };

  fakeApiCall(recipeId)
    .then((data) => loadTemplate(data))
    .catch((error) => console.error("Error loading the recipe:", error));

  function loadTemplate(data) {
    const container = document.getElementById("recipe-container");

    if (container) {
      fetch(`http://127.0.0.1:5500/templates/template02.html`)
        .then((response) => response.text())
        .then((template) => {
          let html = template
            .replace(/{{title}}/g, data.title)
            .replace(
              /{{ingredients}}/g,
              data.ingredients
                .map((ingredient) => `<li>${ingredient}</li>`)
                .join("")
            )
            .replace(
              /{{steps}}/g,
              data.steps.map((step) => `<li>${step}</li>`).join("")
            );

          container.innerHTML = html;
        })
        .catch((error) => console.error("Error loading template:", error));
    } else {
      console.error("Container with ID 'recipe-container' not found.");
    }
  }
})();
