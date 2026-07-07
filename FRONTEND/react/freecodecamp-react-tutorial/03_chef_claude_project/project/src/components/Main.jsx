import React from "react";

const Main = () => {
  const ingredients = ["chicken", "Oregano", "Tomatoes"];

  return (
    <main>
      <form className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient here "
        />
        <button>Add ingredient </button>
      </form>
      <ul>
        {ingredients.map((items) => (
          <li key={items}> {items} </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
