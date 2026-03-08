// Use getters & setters to set and get the real and imaginary parts of the complex number.

class complexNo {
  constructor(imaginary, real) {
    this.real = real;
    this.imaginary = imaginary;
  }

  get real() {
    return this._real;

  }

  set real(newReal){
    this._real = newReal
  }
  get imaginary(){
    return this._imaginary 
  }
  set imaginary(newImaginary){
    this._imaginary = newImaginary
  }
}
