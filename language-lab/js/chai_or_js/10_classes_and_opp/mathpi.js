const descripter = Object.getOwnPropertyDescriptor(
  Math,
  "PI",
); /** See full rules here: {@link ./define.md} */

console.log(descripter);

const chai = {
  name: "ginger chai",
  price: "250",
  isAvailable: true,

  orderChai: function () {
    console.log("chai noi bani");
  },
};

console.log(chai);

// console.log(Object.getOwnPropertyDescriptor(chai,)); HERE chai is just a module you've to write exact property for it's descrepter

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  // writable: false,
  /** See full rules here: {@link ./define.md} */
  enumerable: false, // enumerable if you print console log without with false you'll not see name
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of chai) {
  // not iterable
  console.log(`${key}:${value}`);
}

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}:${value}`);
  }
}
