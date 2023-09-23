// https://www.themealdb.com/api/json/v1/1/search.php?s=tomato
const form = document.querySelector("form");
const result = document.getElementById("result");
const input = document.querySelector("input");
let meals = [];

const fetechMeals = async (search) => {
  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
    .then((res) => res.json())
    .then((data) => (meals = data.meals));
  console.log(meals);
};

function mealsDisplay() {
  if (meals == null) {
    result.innerHTML = "<h2>Aucun resultat</h2>";
  } else {
    meals.length = 12;
    result.innerHTML = meals
      .map((meal) => {
        let ingredients = [];
        for (let i = 0; i < 21; i++) {
          if (meal[`strIngredient${i}`]) {
            let ingredient = meal[`strIngredient${i}`];
            let mesure = [`strMesure${i}`];
            ingredients.push(`<li>${ingredient} - ${mesure}</li>`);
          }
        }
        return `
          <li class="card">
          <h2>${meal.strMeal}</h2>
          <p>${meal.strArea}</p>
          <img src="${meal.strMealThumb}" alt="">
          <ul> ${ingredients.join("")}</lu>
          </li>
          `;
      })
      .join("");
  }
}
input.addEventListener("input", (e) => {
  fetechMeals(e.target.value).then(() => mealsDisplay());
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  mealsDisplay();
});
