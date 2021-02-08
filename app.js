// search area event handler
const searchMeal = () => {
    const searchText = document.getElementById("searchInput").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayRecipes(data.meals))
        .catch(error => getError("For Search By This Word Don't Get Nothing - Please Try another key-Words"));
    document.getElementById('recipes').innerText = "";
    document.getElementById("searchInput").value = "";
    document.getElementById("error-message").innerText = "";

}

const displayRecipes = recipes => {
    recipes.forEach(recipe => {
        const main = document.getElementById('recipes');
        const div = document.createElement('div');
        div.innerHTML = `<div onClick = "getIngredients('${recipe.strMeal}')" class ="recipeThumb" >
        <img src = "${recipe.strMealThumb}" >
        <h6>${recipe.strMeal}</h6>
        </div>`
        main.appendChild(div);
        document.getElementById('ingredient').style.display = "none";
    });
}


// error message handler
const getError = error => {
    const errorTag = document.getElementById("error-message");
    errorTag.innerText = error;
}


// ingredients or details of meal event handler
const getIngredients = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayIngredients(data.meals))

    document.getElementById('ingredient').style.display = 'block'
}



const displayIngredients = ingredients => {
    ingredients.forEach(ingredient => {
        const section = document.getElementById('ingredient');
        section.innerHTML = `
        <ol>
        <h4>${'Ingredients Details'}</h4>
        <img src = "${ingredient.strMealThumb}" id ="image-ingredient">
        <h6>${ingredient.strMeal}</h6>
        <li><b>${ingredient.strIngredient1}:</b> ${ingredient.strMeasure1}</li>
        <li><b>${ingredient.strIngredient2}:</b> ${ingredient.strMeasure2}</li>
        <li><b>${ingredient.strIngredient3}:</b> ${ingredient.strMeasure3}</li>
        <li><b>${ingredient.strIngredient4}:</b> ${ingredient.strMeasure4}</li>
        <li><b>${ingredient.strIngredient5}:</b> ${ingredient.strMeasure5}</li>
        <li><b>${ingredient.strIngredient6}:</b> ${ingredient.strMeasure6}</li>
        <li><b>${ingredient.strIngredient7}:</b> ${ingredient.strMeasure7}</li>
        <li><b>${ingredient.strIngredient8}:</b> ${ingredient.strMeasure8}</li>
        <li><b>${ingredient.strIngredient9}:</b> ${ingredient.strMeasure9}</li>
        <li><b>${ingredient.strIngredient10}:</b> ${ingredient.strMeasure10}</li>
        <li><b>${ingredient.strIngredient11}:</b> ${ingredient.strMeasure11}</li>
        <li><b>${ingredient.strIngredient12}:</b> ${ingredient.strMeasure12}</li>
        </ol>`
    });

}