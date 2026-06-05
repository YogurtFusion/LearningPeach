// closure = A function defined inside of another function,
//           the inner function has access to the variables
//           and  scope of the outer function
//           Allow for private variables and state Maintenance.
//           Used frequently in JS frameworks: React, Vue, Angular

function outer() {
  let message = "Hellow";
  function inner() {
    console.log(message);
  }
  inner();
}

outer();

function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }

  function getCount() {
    return count;
  }

  return { increment, getCount };
  //   return {increment:increment}
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is${counter.getCount}`);

function createGame() {
  let score = 0;

  function increasedScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }

  function decreasedScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  function getScore() {
    console.log(` The final score is ${score}pts`);
  }

  return { getScore, increasedScore, decreasedScore };
}

const game = createGame();
game.increasedScore(12);
game.increasedScore(43);
game.increasedScore(32);

game.decreasedScore(43);

game.getScore();
