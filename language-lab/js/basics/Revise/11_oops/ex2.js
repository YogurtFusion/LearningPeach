// Write a method to add two complex numbers in the above class.

class complexNo {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;

  }

  addNum(num){
this.real =  this.real + num.real
this.imaginary = this.imaginary+ num.imaginary
  }
}

let myNumber = new complexNo(6, 9);
let myNumber1 = new complexNo(3, 23);

myNumber.addNum(myNumber1)

console.log(myNumber);
