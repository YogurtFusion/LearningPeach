let score = "33abc";
// let score = null
// let score = undefined
// let score = true
// let score = false

// console.log(typeof score);
console.log(typeof score);

// "33" => 33
// "33abc" => NaN

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
Imagine you have a toybox with two different types of toys inside:

Math Blocks (Numbers): Imagine a solid wooden block with a 5 on it. You can do real math with these.

Stickers (Strings): Imagine a piece of paper with a "5" drawn on it. It’s just a drawing, not a real block. It is just text.

In JavaScript, when you try to mix a Math Block and a Sticker together, JavaScript acts like a helpful (but sometimes very silly) robot trying to figure out what you want.

Here is how the robot handles it:

1. The "Glue" Rule (Using the + sign)
If you tell the robot to add a Math Block and a Sticker together:
5 + "5"

The robot panics a little. It says, "I can't do math with a sticker!" So, it takes the easy way out. It turns your Math Block into a sticker too, and just glues them side-by-side.

Result: "55" (It didn't do math; it just stuck two words together!)

2. The "Magic Math" Rule (Using -, *, or /)
Now, let's say you tell the robot to subtract a Sticker from a Math Block:
5 - "2"

The robot knows you can't subtract pieces of paper. But it looks closely at your sticker and says, "Hey, this drawing looks exactly like a number 2!" So, the robot magically turns the sticker into a real Math Block and does the math for you.

Result: 3 (It did real math!)
*/

// let isLoggedIn = 1
let isLoggedIn = 1;

// true => 1; false => 0
// "" => false
// "chapple" => true

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
