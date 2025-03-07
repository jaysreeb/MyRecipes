document.getElementById("searchButton").addEventListener("click", function () {
    const query = document.getElementById("searchInput").value;
    searchRecipes(query);
});

function searchRecipes(query) {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayRecipes(data.meals);
        })
        .catch(error => console.error("Error fetching data:", error));
}

function displayRecipes(meals) {
    const container = document.getElementById("recipesContainer");
    container.innerHTML = ""; // Clear previous results

    if (!meals) {
        container.innerHTML = "<p>No recipes found.</p>";
        return;
    }

    meals.forEach(meal => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe");

        recipeCard.innerHTML = `
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <p><strong>Category:</strong> ${meal.strCategory}</p>
            <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
            <p><strong>Ingredients:</strong>${meal.strIngredient1}<strong>${meal.strMeasure1}</strong>
        `;

        container.appendChild(recipeCard);
    });
}