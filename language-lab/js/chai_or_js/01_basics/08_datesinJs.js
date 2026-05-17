// Dates

let myDate  = new Date()
console.log(`\nthis is toString: ${myDate.toString()}`);
console.log(`\nthis is toDateString: ${myDate.toDateString()}`);
console.log(`\nthis is toISOString: ${myDate.toISOString()}`);
console.log(`\nthis is toJSON: ${myDate.toJSON()}`);
console.log(`\nthis is toLocaleDateString: ${myDate.toLocaleDateString()}`);
console.log(`\nthis is toLocaleString: ${myDate.toLocaleString()}`);
console.log(`\nthis is toLocaleTimeString: ${myDate.toLocaleTimeString()}`);
console.log(`\nthis is toUTCString: ${myDate.toUTCString()}`);
console.log(`\nthis is getTimezoneOffset: ${myDate.getTimezoneOffset()}`);

let myCreatedDateWithZero = new Date(2026, 0, 20)
let myCreatedDate = new Date(2026, 5, 20)
let myCreatedDateAnotherFormat = new Date("2026-01-20") // yyyy mm dd
let anotherDateSyntax = new Date("02-01-2026") // mm dd yyyy

console.log(`\n${myCreatedDate.toDateString()}`);
console.log(myCreatedDate.toLocaleString());
console.log(`\n${myCreatedDateWithZero.toDateString()}`);
console.log(myCreatedDateWithZero.toLocaleString());
console.log(`\n${myCreatedDateAnotherFormat.toDateString()}`);
console.log(myCreatedDateAnotherFormat.toLocaleString());
console.log(`\n${anotherDateSyntax.toDateString()}`);
console.log(anotherDateSyntax.toLocaleString());
 
let compareDate = new Date("01-14-2026")
let timeSpan = Date.now()

console.log(compareDate.getTime());
console.log(timeSpan);

console.log(`\n${Math.floor(Date.now()/1000)}`);// 1000 for converting in seconds and floor for roudning up 

let newDate = new Date()
console.log(`\n${newDate}`);
console.log(newDate.getMonth() + 1); //adding one because in js month starts with 0 so user don't get cofused 
console.log(newDate.getDay());// which weekday is today 


let newWeekDay = newDate.toLocaleString("default",{
    weekday:"long",
    calendar:"gregory"

})

console.log(`\n${newWeekDay}`);
