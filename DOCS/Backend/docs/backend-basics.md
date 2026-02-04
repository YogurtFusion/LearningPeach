# Important basics

## Dot notation (.) is used in MongoDB queries to access or modify nested fields inside an object.

**EG: here in findOne.**
**const user = await User.findOne({**
**email:email.toLowerCase()**
**});**

---

## Tuthy value

**Truthy = a value JavaScript treats as true in an if statement .**

**true:** 


**{ }** **, [ ]** **, "hello"** **, 42**

**false:**


**0** **, ""** **, null** **, undefined** **, NaN**

**if ({}) // runs**

## True

**new: true → give me the updated doc.**

**new: false → give me the old doc (default).**

# Async JavaScript: `fetch`, `.then()`, and `async / await`

This note explains **why `.then()` exists**, what it does, and how `async / await` relates to it.
Written from a beginner’s point of view.

---

## What problem are we solving?

Some operations take time:

- fetching data from a server
- reading files
- waiting for APIs

JavaScript **does not stop the app** while waiting.
Instead, it says:

> “I’ll continue later when the result is ready.”

---

## What is a Promise?

A **Promise** is an object that represents a value **that will exist in the future**.

Think of it as:

> “I don’t have the data yet, but I promise I’ll give it to you.”

A Promise can be:

- pending (still waiting)
- resolved (success)
- rejected (error)

---

## What is `.then()`?

`.then()` means:

> **“When this Promise finishes, do this next.”**

It is how JavaScript handles waiting.

Example:

```js
fetch(url).then((result) => {
  // this runs AFTER fetch finishes
  fetch("http://localhost:4000/api/message")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.message);
    });
});
```

## Promises, .then(), async/await (TL;DR)

- Promises represent future values
- `.then()` means “when this finishes, do next”
- `fetch()` returns a Promise
- `async / await` is cleaner syntax on top of `.then()`

Important:
`await fetch()` is internally the same as `fetch().then()`

`.then()` exists because JS is non-blocking and needs a way to continue after async work.
