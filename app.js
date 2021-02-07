// search area event handler
const searchMeal = () => {
    const searchText = document.getElementById("searchInput").value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayRecipes(data.meals))
        .catch(error => getError("An Error - Please Try another key-Words"));
    document.getElementById('recipes').innerText = "";
    document.getElementById("searchInput").value = "";
    document.getElementById("error-message").innerText = "";

}

const displayRecipes = recipes => {
    recipes.forEach(recipe => {
        const h1 = document.createElement('h1');
        h1.className = 'mealName'
        const div1 = document.createElement('div');
        h1.innerHTML = recipe.strMeal
        div1.className = 'image';
        div1.innerHTML = `<img src = "${recipe.strMealThumb}" onClick = "getIngredients()">`
        const main = document.getElementById('recipes');
        div1.appendChild(h1);
        main.appendChild(div1);
    });


}


// ingredients or details of meal event handler
const getIngredients = () => {
    const getTexts = document.getElementsByClassName('mealName');
    for (let i = 0; i < getTexts.length; i++) {
        const getText = getTexts[1];
        const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=${getTexts}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayIngredients(data.meals))
        document.getElementById('ingredient').style.display = 'block'
    }

}



const displayIngredients = ingredients => {
        ingredients.forEach(ingredient => {
            const section = document.getElementById('ingredient');
            const div = document.createElement('div')
            div.innerHTML = `
        <ul>
        <li>${ingredient.strIngredient}</li>
        <li>${ingredient.strDescription}</li>
        </ul>`
            section.appendChild(div);
        });
    }
    // error message handler
const getError = error => {
    const errorTag = document.getElementById("error-message");
    errorTag.innerText = error;
}