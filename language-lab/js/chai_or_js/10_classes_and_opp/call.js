function SetUsername(username) {
  // complex DB calls
  this.username = username;
}

function createUser(username, email, password) {
  // SetUsername(username)//it's only reference or it actuallly calls but don't hold reference and gets removed

  // SetUsername.call(username)// .calls holds the reference
  SetUsername.call(this, username); // also don't use your this use my this bc your excecution content will go away but here this is optional thanks to syntax sugar
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chaiPizza@pp.com", "22342");
console.log(chai);
