import React from "react";

const Main = () => {
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
    </main>
  );
};

export default Main;
