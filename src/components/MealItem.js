import React from "react";
// import { Link } from "react-router-dom";

function MealItem({ id, strMeal, strMealThumb, idMeal, Comments, Ingredients }) {
  const mealsList = Ingredients.map((ingredient) => (
    <span key={ingredient}>{ingredient}</span>
  ));
  return (
    <div className="meal-item">
      <img src={strMealThumb} />
      <h3>{strMeal}</h3>
      <div className="ingredients">{mealsList}</div>
      {/* <Link to={`/meals/${id}`}>
        <button>See more</button>
      </Link> */}
    </div>
  );
}

export default MealItem;
