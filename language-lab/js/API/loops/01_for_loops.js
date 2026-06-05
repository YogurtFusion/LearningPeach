// for loops = repeat some code for limited amout of times

// for loops keyword or sytax of for loop
// let  i = 2 :>  defining a temperorary  variable and setting it's initial value
// i<=2 :>  setting it's final value or till  that no. it's have to loop

// i++ :> setting that how much our value have to incriment here it means by 1 we can also do i+=2 OR i = i + 2

for (let i = 0; i <= 10; i++) {
  console.log(i, "\nhellow\n");
}
for (let i = 2; i <= 12; i += 2) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log("\n", i);
}
console.log("\nHAPPY NEW YEAR EVE!!!...\n\n");

for (let i = 10; i > 0; i -= 2) {
  console.log("\n", i);
}
console.log("\nHAPPY NEW YEAR EVE!!!...\n\n");

console.log("\n");
for (let i = 21; i >= 0; i -= 3) {
    console.log("\n", i);
}
console.log("\nHAPPY NEW YEAR EVE!!!...\n\n");

console.log("\n");
for (let i = 1; i <= 20; i++) {
  if (i === 13) {
    continue;
  } else {
    console.log(i);
  }
}
console.log("\n");

for (let i = 1; i <= 20; i++) {
  if (i === 13) {
    break;
  } else {
    console.log(i);
  }
}
