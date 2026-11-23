import { useState } from "react";
import avatar from "./user.png";
import starFilled from "./star-filled.png";
import starEmpty from "./star-empty.png";

export default function App() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  let starIcon = contact.isFavorite?starFilled:starEmpty
  
  function toggleFavorite() { // wrong way I'm not using an object but a new isfavorite usestate
    setIsFavorite((prev) => !prev);
    console.log("Toggle Favorite");
  }
  return (
    <>
      <h1>Complex State: Objects</h1>
      <main>
        <article className="card">
          <img
            src={avatar}
            className="avatar"
            alt="User profile picture of John Doe"
          />
          <div className="info">
            <button
              onClick={toggleFavorite}
              aria-pressed={false}
              className="favorite-button"
            >
              <img
                src={isFavorite ? starFilled : starEmpty}
                alt={isFavorite ? "starFilled" : "starEmpty"}
                className="favorite"
              />
            </button>
            <h2 className="name">
              {contact.firstName} {contact.lastName}{" "}
            </h2>
            <p className="contact">{contact.phone} </p>
            <p className="contact">{contact.email} </p>
          </div>
        </article>
      </main>
    </>
  );
}
