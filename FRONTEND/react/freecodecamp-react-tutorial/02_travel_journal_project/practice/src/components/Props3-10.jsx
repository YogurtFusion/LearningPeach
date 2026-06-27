import React from "react";
import Contact from "./Contact";
/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */
const Props3 = () => {
  return (
    <>
      <div className="contacts">
        <Contact
          img="../src/assets/images/mr-whiskerson.png"
          alt="Photo of Mr. Whiskerson"
          name=" Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img="../src/assets/images/fluffykins.png"
          alt="Photo of Fluffykins"
          name="Fluffykins "
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Contact
          img="../src/assets/images/pumpkin.png"
          alt="Photo of Pumpkin"
          name="Pumpkin "
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
        />
        <Contact
          img="../src/assets/images/felix.png"
          alt="Photo of Felix"
          name=" Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
        />
        
      </div>
   
    </>
  );
};

export default Props3;
