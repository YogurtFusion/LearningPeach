const tinderUser2 = new Object();
const tinderUser = {};

tinderUser.id = "id-01";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = true;

//console.log(tinderUser);

const regularUser = {
  email: "someone@gmail.com",
  fullName: {
    userFullName: {
      firstNmae: "cheese",
      lastname: "chaple",
    },
  },
};

console.log(regularUser);
console.log("\n", regularUser.fullName);
console.log("\n", regularUser.fullName.userFullName);
console.log("\n", regularUser.fullName.userFullName.firstNmae); // if we wanna make sure that code don't break if it's don't exist then we use ?

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);

const obj5 = { ...obj1, ...obj2, ...obj3 }; // we genrally use this one fo joing the obj it's also latest
console.log(obj5);

// we get data/objects from database  in the array of objects
const user = [
  {
    id: "id01",
    email: "object-first@gmai.com",
  },
  {
    id: "id02",
    email: "object-second@email.com",
  },
  {
    id: "id03",
    email: "object-third@email.com",
  },
  {
    id: "id04",
    email: "object-fourth@email.com",
  },
];

console.log(user[1].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser));// most important for the project
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// ***********************object destructuring***********************

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

const { courseInstructor: price } = course;
//const {price: price}=course; //SyntaxError: Identifier 'price' has already been declared

// console.log(courseInstructor);// it have price now courseInstructor is not defined 

console.log(price);


// react destructuring with props
// const navbar = ({company})=>{

// }

// navbar(company = "hitest")


//json
// {
//     "name":"hitesh",
//     "coursename":"json",
//     "price":"free"
// }

// json in the form of array

// [
//     {},
//     {},
//     {},
// ]
