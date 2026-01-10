# Loops in JavaScript

Loops are used to run the same block of code repeatedly until a condition is met.

---

## `for` Loop

**Syntax:**

```js
for (start; condition; update) {
  // code to run
}
for (let i = 1; i < 51; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Blizz");
  } else {
    console.log(i);
  }
}

```
## `while` Loop
**Syntax:**

while (condition) {
  // code to run
}
```js
let i = 1;

while (i < 51) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Blizz");
  } else {
    console.log(i);
  }

  i++;
}

```