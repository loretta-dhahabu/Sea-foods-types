import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import FoodsList from "./FoodsList";
import { FaBackward } from "react-icons/fa";

function SingleMeal() {
  const [meal, setMeal] = useState([]);
  const { id } = useParams();
  // const food = [
  //   "id",
  //   "strMeal",
  //   "strMealThumb",
  //   "idMeal",
  //   "Comments",
  //   "Ingredients",
  // ];

  useEffect(() => {
    fetch(`http://localhost:4000/meals/${id}`)
      //   .then((response) => console.log(response))
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMeal(() => data);
      });
  }, [id]);

  // const { strMeal, strMealThumb, idMeal, Comments, Ingredients } = meals;
  // let mealsList = meals.map((meal) => {
  return (
    <>
      <div>
        <h2>Our Single Meal</h2>
        <div className="back-home">
          <Link to={"/meals"} onClick={() => <FoodsList />}>
            <button><FaBackward className="icon"/> Back</button>
          </Link>
        </div>
      </div>

      <div className="food-display" key={meal.id}>
        <div className="meal-imgs">
          <img src={meal.strMealThumb} className="meal-img" />
        </div>
        <div className="details">
          <h3>
            <em>Title: </em>
            {meal.strMeal}
          </h3>
          <p>{meal.Comments}</p>
          <h4>Ingredients</h4>
          <p>{meal.Ingredients}</p>
        </div>
      </div>
    </>
  );
}

export default SingleMeal;
