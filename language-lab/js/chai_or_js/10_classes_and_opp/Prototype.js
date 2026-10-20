// let myName = "chocholate        "
// let mychannel = "frozen       "

// console.log(myName.trueLenght);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer ",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`spiderpower is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all of the objects `);
};

heroPower.hitesh();
myHeros.hitesh();

Array.prototype.heyyHitesh = function () {
  console.log(`Hitesh say's hellow`);
};

myHeros.heyyHitesh();
// heroPower.heyyHitesh()

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TAsupport = {
  makeAssignment: "Js assigment",
  fullTime: true,
  __pro__: TeachingSupport,
};

Teacher.__pro__ = User;

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher); // Teaching support is acceesing/inheriting the propoerties of teacher

let anotherUserName = "chai or code";

String.prototype.trueLenght = function () {
  console.log(`${this}`);
  // console.log(`${this.name}`);//obselete property
  console.log(`True lenght is: ${this.trim().length}`);
};

anotherUserName.trueLenght();

"hitesh".trueLenght();
"iceTea".trueLenght();
