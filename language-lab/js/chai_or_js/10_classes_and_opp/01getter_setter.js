class User {
  constructor(email, password) {
    this.email = email;
    this.password = password; // it's chains and decide then name of get and set
  }

  // bc of this there is a race start between constructor's password and getter or setter password that's why we use _ so that it kinda becomes new variable and they don't have to compete with each other

  // get password(){
  //     return this.password.toUpperCase()
  // }

  // set password(value){
  //     this.password = value.toUpperCase()
  // }

  get password() {
    // getter and setter are the special methods which stay above the normal method AND works on the normal properties and make it special method  and help it to overwrite  a properties like email or password etc 
     // get bring things from the memories and leave their and setter do the setting their values part
    // return this._password.toUpperCase()
    // return `${this._password}hitesh`
    return "you'll not get the pass";
  }

  set password(value) {
    this._password = value.toUpperCase();
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
}

const hitesh = new User("h@hitesh.ai", "abc");
console.log(hitesh.email, hitesh.password);
