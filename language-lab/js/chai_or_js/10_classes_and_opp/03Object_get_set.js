// it'S JUST don't use any more bc we've simple syntax but this is what happens in the under the hood 

const User = {
  _email: "h@hc.com", // _ is just a normal variable string mean you can just write email and do itt to there is no need to add _ in the start but _ shows that this particular properties is not for normal users or it's my privte properties  
  _password: "abc",

  get email() {
    return this._email.toUpperCase(); // this uses rarely
  },

  set email(value) {
    this._email = value;
  },
};

// this is tthe benefit of it like you can use factory function in it

const tea = Object.create(User);
console.log(tea._email);
