// create a class user and few methods  along whith using a construstor

function method1() {
  console.log("this is inside the fuction ");
}
class user {
  constructor() {
    console.log("constructor is called");
  }
  method1() {
    console.log("ok this is something new ? ");
  }
  method2() {
    console.log("this is the second medthod");
  }
}

const myUser = new user();

myUser.method1();
myUser.method2();

class Animals {
  constructor() {
    console.log("animals strenght!!!.. ");
  }
}

class Dog extends Animals {
  constructor() {
    super();
    console.log("bark!!");
  }
}

const myDog = new Dog();
