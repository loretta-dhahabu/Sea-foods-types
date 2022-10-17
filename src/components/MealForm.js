import React from 'react'

function MealForm() {
  return (
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Image_Url</label>
        <input type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Title</label>
        <input type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Ingredients</label>
        <input type="text" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default MealForm