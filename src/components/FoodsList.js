import React, { useEffect, useState } from "react";
// import MealItem from './MealItem';
import { Link, useParams } from "react-router-dom";
import SingleMeal from "./SingleMeal";
import { FaPlus } from "react-icons/fa";
// import MealForm from "./MealForm";

function FoodsList() {
  const [meals, setMeals] = useState([]);
  const { id } = useParams();
  // const food = [ "id", "strMeal", "strMealThumb", "idMeal", "Comments", "Ingredients" ]

  useEffect(() => {
    fetch("http://localhost:4000/meals")
      .then((response) => response.json())
      //  .then( ( response ) => console.log(response) )
      .then((data) => {
        //   console.log( data );
        setMeals(() => data);
      });
  }, []);

  let getFoods = meals.map((meal) => {
    //     <MealItem
    //     key={meal.id}
    //     strMealThumb={meal.strMealThumb}
    //     strMeal={meal.strMeal}
    //     Ingredients={meal.Ingredients}
    //   />
    // console.log( meal, index );
    return (
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
          <div className="meal-details">
            <Link
              to={`/meals/${meal.id}`}
              onClick={() => <SingleMeal key={meal.id} />}
            >
              <button>View More</button>
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h2>FoodsList</h2>
      <div className="addMeal">
        <Link to={"/mealform"} onClick={() => <FoodsList />}>
          <button>
            <FaPlus className="icon" /> Meal
          </button>
        </Link>
      </div>
      {getFoods}
      {/* <MealForm /> */}
    </div>
  );
}

export default FoodsList;
