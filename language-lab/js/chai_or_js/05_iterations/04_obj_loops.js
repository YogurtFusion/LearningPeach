// for in loop in obj

const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programing = ["js", "rb", "py", "java", "cpp"];

for (const key in programing) {
  console.log(`programing value: ${programing[key]} and keys: ${key} `);
}


// Maps
const map = new Map();
map.set("In", "India");
map.set("USA", "United states of America ");
map.set("Fr", "France")
map.set("USA", "United states of America "); // will not print 2 times

for(const key in map){
    console.log(key)
}