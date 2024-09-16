(function () {
  const recipeData = {
    recipe1: {
      name: "SÃ¡ndwich gourmet con vegetales asados",
      category: "Almuerzo",
      difficulty: "Media",
      description:
        "Un delicioso sÃ¡ndwich con pan artesanal, vegetales asados y queso fundido, perfecto para un almuerzo especial.",
      servings: 2,
      time: 25,
      ingredients: 6,
      mainImage: "https://via.placeholder.com/600x400?text=Sandwich+Gourmet",
      videoImage: "https://via.placeholder.com/600x400?text=Video+Preparacion",
      ingredientList: [
        { name: "Pan artesanal", quantity: "4 rebanadas" },
        { name: "Queso gouda", quantity: "100g" },
        { name: "Pimiento rojo", quantity: "1 unidad" },
        { name: "CalabacÃ­n", quantity: "1 unidad" },
        { name: "Aceite de oliva", quantity: "2 cucharadas" },
        { name: "Sal y pimienta", quantity: "Al gusto" },
      ],
      instructions: [
        "Precalienta el horno a 200Â°C.",
        "Corta el pimiento y el calabacÃ­n en rodajas finas.",
        "Coloca las verduras en una bandeja, rocÃ­a con aceite de oliva y sazona.",
        "Asa las verduras en el horno por 15 minutos.",
        "Tuesta ligeramente el pan.",
        "Coloca una capa de queso sobre dos rebanadas de pan.",
        "AÃ±ade las verduras asadas sobre el queso.",
        "Cubre con las otras rebanadas de pan.",
        "Calienta el sÃ¡ndwich en una sartÃ©n hasta que el queso se derrita.",
      ],
    },
    recipe2: {
      name: "Ensalada mediterrÃ¡nea de quinoa",
      category: "Ensaladas",
      difficulty: "FÃ¡cil",
      description:
        "Una refrescante ensalada con quinoa, vegetales crujientes y aderezo de limÃ³n, ideal para dÃ­as calurosos.",
      servings: 4,
      time: 20,
      ingredients: 8,
      mainImage: "https://via.placeholder.com/600x400?text=Ensalada+de+Quinoa",
      videoImage: "https://via.placeholder.com/600x400?text=Video+Preparacion",
      ingredientList: [
        { name: "Quinoa", quantity: "200g" },
        { name: "Pepino", quantity: "1 unidad" },
        { name: "Tomates cherry", quantity: "200g" },
        { name: "Aceitunas negras", quantity: "100g" },
        { name: "Queso feta", quantity: "100g" },
        { name: "Jugo de limÃ³n", quantity: "2 cucharadas" },
        { name: "Aceite de oliva", quantity: "3 cucharadas" },
        { name: "Hierbas frescas", quantity: "Al gusto" },
      ],
      instructions: [
        "Cocina la quinoa segÃºn las instrucciones del paquete y deja enfriar.",
        "Corta el pepino en cubos y los tomates cherry por la mitad.",
        "En un bowl grande, mezcla la quinoa, el pepino, los tomates y las aceitunas.",
        "Desmenuza el queso feta sobre la ensalada.",
        "En un frasco, mezcla el jugo de limÃ³n, aceite de oliva, sal y pimienta para hacer el aderezo.",
        "Vierte el aderezo sobre la ensalada y mezcla bien.",
        "AÃ±ade hierbas frescas picadas al gusto.",
        "Refrigera por 30 minutos antes de servir para que los sabores se integren.",
      ],
    },
  };

  function loadRecipeData(recipeId) {
    const recipe = recipeData[recipeId];
    if (!recipe) {
      console.error("Receta no encontrada");
      return;
    }

    const container = document.getElementById("recipe-container");
    if (!container) {
      console.error("Contenedor de receta no encontrado");
      return;
    }

    container.innerHTML = `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
          <div style="position: relative;">
            <img src="${recipe.mainImage}" alt="${
      recipe.name
    }" style="width: 100%; height: auto; border-radius: 8px;">
            <div style="position: absolute; top: 10px; left: 10px; background-color: #FF0000; color: white; padding: 5px 10px; border-radius: 20px;">${
              recipe.category
            }</div>
            <div style="position: absolute; top: 10px; right: 10px; background-color: #333; color: white; padding: 5px 10px; border-radius: 20px;">${
              recipe.difficulty
            }</div>
          </div>
          
          <h1 style="color: #333; font-size: 28px; margin-top: 20px;">${
            recipe.name
          }</h1>
          
          <p style="color: #666; margin-bottom: 20px;">${recipe.description}</p>
          
          <div style="display: flex; justify-content: space-around; margin-bottom: 20px;">
            <span><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FF0000' width='18px' height='18px'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'/%3E%3C/svg%3E" alt="Porciones" style="vertical-align: middle;"> ${
              recipe.servings
            } porciones</span>
            <span><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FF0000' width='18px' height='18px'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'/%3E%3Cpath d='M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z'/%3E%3C/svg%3E" alt="Tiempo" style="vertical-align: middle;"> ${
              recipe.time
            } Minutos</span>
            <span><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FF0000' width='18px' height='18px'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E" alt="Ingredientes" style="vertical-align: middle;"> ${
              recipe.ingredients
            } Ingredientes</span>
          </div>
          
          <div style="margin-top: 30px; position: relative;">
            <img src="${
              recipe.videoImage
            }" alt="Video de preparaciÃ³n" style="width: 100%; height: auto; border-radius: 8px;">
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(255,0,0,0.8); border-radius: 50%; width: 60px; height: 60px; display: flex; justify-content: center; align-items: center;">
              <div style="width: 0; height: 0; border-top: 15px solid transparent; border-bottom: 15px solid transparent; border-left: 25px solid white; margin-left: 5px;"></div>
            </div>
          </div>
          
          <div style="display: flex; margin-top: 30px;">
            <div style="flex: 1; margin-right: 20px;">
              <h2 style="color: #FF0000; font-size: 22px;">Ingredientes</h2>
              <ul style="list-style-type: none; padding: 0;">
                ${recipe.ingredientList
                  .map(
                    (ing) => `
                  <li style="margin-bottom: 10px; display: flex; align-items: center;">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FF0000' width='18px' height='18px'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/svg%3E" alt="Ingrediente" style="margin-right: 10px;">
                    <span>${ing.name}: <strong>${ing.quantity}</strong></span>
                  </li>
                `
                  )
                  .join("")}
              </ul>
            </div>
            <div style="flex: 1;">
              <h2 style="color: #FF0000; font-size: 22px;">PreparaciÃ³n</h2>
              <ol style="padding-left: 20px;">
                ${recipe.instructions
                  .map(
                    (step) => `<li style="margin-bottom: 10px;">${step}</li>`
                  )
                  .join("")}
              </ol>
            </div>
          </div>
        </div>
      `;
  }

  function initializeRecipeSelector() {
    const selector = document.getElementById("recipe-selector");
    if (!selector) {
      console.error("Selector de receta no encontrado");
      return;
    }

    selector.addEventListener("change", function () {
      loadRecipeData(this.value);
    });

    loadRecipeData(selector.value);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeRecipeSelector);
  } else {
    initializeRecipeSelector();
  }
})();
