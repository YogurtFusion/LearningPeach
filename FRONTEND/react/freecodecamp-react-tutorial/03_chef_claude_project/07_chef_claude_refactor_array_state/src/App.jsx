import { useState } from "react";

export default function App() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsListItems = ingredients.map((ingredient,index) => (
    <li key={index}>{ingredient}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredient) => [
      ...prevIngredient, 
      newIngredient,
    ]);
  }
  return (
    <>
      <h1>Chef Claude: Refactor Array State</h1>

      <main>
        <form onSubmit={handleSubmit} className="add-ingredient-form">
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
          />
          <button>Add ingredient</button>
        </form>
        <ul>{ingredientsListItems}</ul>
      </main>
    </>
  );
}
