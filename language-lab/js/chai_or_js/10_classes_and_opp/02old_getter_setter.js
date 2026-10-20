// getter setters thorugh porperties

function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    // this is getter or setter
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    // this is getter or setter
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });

  // you can define multiple properties in one by pural defineproperties not property in old ttimes geter setter syntax
  //   Object.defineProperties(this, {
  //   email: {
  //     get: function () { return this._email.toUpperCase(); },
  //     set: function (value) { this._email = value; },
  //   },
  //   password: {
  //     get: function () { return this._password.toUpperCase(); },
  //     set: function (value) { this._password = value; },
  //   },
  // });
}

const chai = new User("chai@chai.com", "chai");

console.log(
  ` here is the email ${chai.email}, here is the password ${chai.password}`,
);
