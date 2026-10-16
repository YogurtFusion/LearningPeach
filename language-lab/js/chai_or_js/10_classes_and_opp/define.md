# writable
The typeof value !== "function" filter is fine, but your output is price:250 and isAvailable:true, so you can see name was hidden by enumerable and orderChai by your filter. Don’t confuse the two.

Next step: uncomment writable: false, then try chai.name = "masala chai" and log it. Do it once without "use strict" (silently fails) and once with it at the top of the file (throws an error). That shows you the difference between a silent failure and a loud one.

# enumerable
Overall, with a few exceptions. enumerable: false hides the property from anything that loops over or lists an object’s properties, but the property still exists and you can still read it directly.

Hidden (skipped):

Object.keys, Object.values, Object.entries
for...in
JSON.stringify
console.log(chai) in Node (in browser devtools the property usually still shows, just greyed out)
Spread { ...chai } and Object.assign

Still works:

chai.name returns "ginger chai"
Object.getOwnPropertyDescriptor(chai, "name") still sees it
Object.getOwnPropertyNames(chai) still lists it
"name" in chai is true

Try this to see it:

js
console.log(chai.name);                       // ginger chai
console.log(Object.keys(chai));               // no "name"
console.log(Object.getOwnPropertyNames(chai)); // includes "name"
console.log(JSON.stringify(chai));            // no name

Think of enumerable: false as a hidden property: it’s there if you ask for it by name, but it doesn’t appear in lists. That’s why built-in things like array length and Math.PI don’t clutter your loops.


