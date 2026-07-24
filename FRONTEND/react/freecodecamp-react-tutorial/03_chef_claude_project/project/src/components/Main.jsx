import React from "react";

const Main = () => {
  const ingredients = ["chicken", "Oregano", "Tomatoes","Pizaa", "Pepeoroni"];
  const ingredientListItems = ingredients.map((items) => (
    <li key={items}> {items} </li>
  ));

  function handleSubmit(event) {
    event.preventDefault()
  const formData = new FormData(event.currentTarget)
  const newIngredient = formData.get("ingredients")
  console.log(newIngredient);
 ingredientListItems.push(newIngredient)
  }
  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient here "
        name="ingredients"
        />
        <button type="submit" >
          Add ingredient
        </button>
      </form>
      <ul>{ingredientListItems}</ul>
    </main>
    
  );
};

export default Main;