export default function App() {
  /**
   * Challenge: Replace the if/else below with a ternary
   * to determine the text that should display on the page
   */
  const isGoingOut = false;

  // let answer;
  return (
    <>
      <h1>Ternary Practice</h1>
      <main>
        <h1 className="title">Do I feel like going out tonight?</h1>
        {/* <button className="value">{answer = isGoingOut?"Yes":"No I  wanna goon tonight"}</button> */}
        <button className="value">{isGoingOut?"Yes":"No I  wanna goon tonight"}</button>
      </main>
    </>
  );
}
