// main area 
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
    .then(res => res.json())
    .then(data => displayRecipes(data))


const displayRecipes = recipes => {
    for (let i = 0; i < recipes.meals.length; i++) {
        const recipe = recipes.meals[i];
        const h1 = document.createElement('h1');
        const div1 = document.createElement('div');
        h1.innerHTML = recipe.strMeal
        div1.className = 'image';
        div1.innerHTML = `<img src = "${recipe.strMealThumb}">`
        const main = document.getElementById('recipes');
        div1.appendChild(h1);
        main.appendChild(div1);
    }
}


// search area event handler

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
    .then(res => res.json())
    .then(data => searchMeal(data))


const searchMeal = meals => {
    for (let i = 0; i < meals.meals.length; i++) {
        const mealsName = meals.meals[i];

        const searchName = document.getElementById("searchMeal-btn").addEventListener('click', () => {
            const searchInput = document.getElementById("searchInput");
            searchInput.value = mealsName.strMeal;
        });

    }
}