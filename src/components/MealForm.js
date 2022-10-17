import React, { useEffect, useState } from "react";

function MealForm({onAddMeal}) {
//   const [meals, setMeals] = useState([]);
  const [strMeal, setStrMeal] = useState("");
  const [strMealThumb, setStrMealThumb] = useState("");
  const [ingredients, setIngredients] = useState("");
    // const [ set = useState({
    //   strMeal: "",
    //   strMealThumb: "",
    //   ingredients: "",
    // });

    // function handleChange(event) {
    //   set{ ... [event.target.name]: event.target.value });
    // }

    function handleSubmit ( event )
    {
        event.preventDefault();
      
        fetch("http://localhost:4000/meals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            strMeal,
              strMealThumb,
              ingredients,
          }),
        })
          .then((response) => {
              console.log(response);
            response.json();
          })
          .then((data) => {
            console.log(data);
          });
    }
  return (
    <div>
      <h1>Add A Meal</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Image_Url</label>
          <input
            type="text"
            className="form-control"
            placeholder="image url"
            value={strMealThumb}
            onChange={(event) => setStrMealThumb(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="title"
            value={strMeal}
            onChange={(event) => setStrMeal(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Ingredients</label>
          <input
            type="text"
            className="form-control"
            placeholder="ingredients"
            value={ingredients}
            onChange={(event) => setIngredients(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default MealForm;
