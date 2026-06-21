// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

let month = 3;

switch (month) {
  case 1:
    console.log("January ");
    break; // if you don't use break then it will execute every code after it's condition matched except default
  case 2:
    console.log("Feb ");
    break;
  case 3:
    console.log("march ");
    break;
  case 4:
    console.log("april ");
    break;
  case 5:
    console.log("may");
    break;

  default:
    console.log("default case match ");
    break;
}

let numMonth = "march";

switch (numMonth) {
  case "January":
    console.log(1);
    break; // if you don't use break then it will execute every code after it's condition matched except default
  case "Feb":
    console.log(2);
    break;
  case "march":
    console.log(3);
    break;
  case "april":
    console.log(4);
    break;
  case "may":
    console.log(5);
    break;

  default:
    console.log("default case match ");
    break;
}
