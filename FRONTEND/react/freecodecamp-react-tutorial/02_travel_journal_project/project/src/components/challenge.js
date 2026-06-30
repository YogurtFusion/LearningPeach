const nums = [1, 2, 3, 4, 5];
const map = nums.map((i) => {
  return console.log(i * i);
});

console.log(map);

/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"];
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

const capitalized = names.map((names) => {
  return names[0].toUpperCase() + names.slice(1);
});

console.log(capitalized);

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const paragraphs = pokemon.map((mon) => {
  return `<p> ${mon} </p>`;
  // console.log(`<p> ${mon} </p> `)
});

console.log(paragraphs);
