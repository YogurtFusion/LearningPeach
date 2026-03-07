// Create a Javascript class to create a complex number. Create a constructor to set the real and the complex part.

class complexNo {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
}

let myNumber = new complexNo(3, 0);
console.log(myNumber);
