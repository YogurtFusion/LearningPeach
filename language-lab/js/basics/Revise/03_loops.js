// write a sample for loop of your choice

let array = [1, 3, 7, 4, 6, 0];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
}

const forinloop_demo = {
  key: "value",
  another_key: "another value",
  $key: "value with dollar key ",
  last_key: "last key",
};

for (const key in forinloop_demo) {
  // if (!Object.hasOwn(forinloop_demo, key)) continue;

  const element = forinloop_demo[key];
  console.log(element);
}
// how to use it in the object

for (const [key, value] of Object.entries(forinloop_demo)) {
  console.log(key, value);
}
for (const key of Object.keys(forinloop_demo)) {
  console.log(key);
}
for (const value of Object.values(forinloop_demo)) {
  console.log( value);
}
for (const [ , value] of Object.entries(forinloop_demo)) {
  console.log( value);
}

while (array = 2) {
    console.log("yeah it is");
    // i forgot about using and just goes endlessly
    break
}

do {
    console.log("i don't know how to use it ");
    break
} while (array>1);