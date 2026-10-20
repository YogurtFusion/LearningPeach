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

// _ is just a normal variable string mean you can just write email and do itt to there is no need to add _ in the start but _ shows that this particular properties is not for normal users or it's my privte properties. we just assume that _ is private bc if someone tries to aceess it they can access it but # is now js actual properties to make it private read about it more here:

// Yes, that is correct! While the **underscore (`_`) convention** was used for a long time to signal that a property was intended to be "internal" or "private," it was merely a **naming convention** that the JavaScript engine did not enforce. Anyone could still access or overwrite those properties from outside the class.

// Modern JavaScript now provides **true privacy** for class members using the **hash (`#`) syntax**. By prefixing a field or method name with `#`, you make it strictly inaccessible from outside the class, and the JavaScript engine enforces this constraint. This was introduced to address the limitations of the older convention and provide actual **encapsulation**.
