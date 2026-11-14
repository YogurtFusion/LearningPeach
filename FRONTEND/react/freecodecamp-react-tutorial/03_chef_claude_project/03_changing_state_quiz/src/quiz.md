### My Answers

**1. You have 2 options for what you can pass in to a state setter function (e.g. `setCount`). What are they?**

- count and setCount

**2. When would you want to pass the first option (from answer above) to the state setter function?**

- i can use first one when i want initial vlau like in if if i wanna stop 0 geting in - integers

**3. When would you want to pass the second option (from answer above) to the state setter function?**

- i'll use second value if i wanna upagrade the initial or previous value like updating 0 to 1 or 1 to back 0

---
![alt text](image.png)
### AI Answers

## Question 1

“You have 2 options for what you can pass in to a state setter function (e.g. `setCount`). What are they?”

**What it’s asking:** When you write `setCount(...)`, what are the two distinct types of things you are allowed to put inside those parentheses to update your state?

**The 2 Options:**

- **A direct value:** Passing a hardcoded or evaluated value directly (e.g., `setCount(0)`, `setCount(5)`, or `setCount(count + 1)`).

- **An updater (callback) function:** Passing a function that takes the previous state as an argument (e.g., `setCount(prevCount => prevCount + 1)`).

## Question 2

“When would you want to pass the first option (from answer above) to the state setter function?”

**What it’s asking:** In what coding scenario would you choose to pass a direct value instead of a callback function?

**The Explanation / Use Case:**

You use a direct value when the new state does not depend on the old state value. You just want to force the state to become a specific, known thing.

**Examples for your notes:**

- Resetting a counter back to 0 (`setCount(0)`).
- Clearing a form input field (`setInputValue("")`).
- Turning a dark mode toggle to true or false based on a user click.

## Question 3

“When would you want to pass the second option (from answer above) to the state setter function?”

**What it’s asking:** In what coding scenario would you choose to pass a callback/updater function instead of a direct value?

**The Explanation / Use Case:**

You use a callback function whenever your new state relies on the previous state to be calculated. Because React updates state asynchronously and batches updates, passing a callback ensures you are always working with the freshest, most up-to-date value.

**Examples for your notes:**

- Incrementing or decrementing a counter (`setCount(prev => prev + 1)`).
- Adding a new item to an existing shopping cart array (`setCart(prevCart => [...prevCart, newItem])`).
- Toggling a boolean based on its current value (`setIsOn(prev => !prev)`).