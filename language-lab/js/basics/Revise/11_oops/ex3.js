// Create a class Student from a class Human. Override a method & see changes.
class Human{
    constructor(){
        console.log(" in side the constructor " )
    }

    method1(){
        console.log("Humans have 2 hands");
        
    }
    method2(){
        console.log("Humans have 2 legs and male have 3 legs ");
        
    }
    method3(){
        console.log("Human have brains ");
        
    }
}

class student extends Human{
    constructor(){
        super();
        console.log("this is student's constructor");
        
        
    }

    method3(){
        console.log("student's use their brain for everything except study");
        
    }
}

let student1 = new student()
student1.method3()