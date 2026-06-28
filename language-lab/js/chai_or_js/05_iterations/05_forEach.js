const coding = ["js", "ruby", "java", "python", "cpp"];

// when  hover on forEach it say pass callback means pass a just function but it's a callback so it's don't have a name If you're writting inside the forEach
// coding.forEach(function (value) {
//   console.log(value);
// });

// just as the before we don't write name  like const name = ()=>{} we just use ()=>{}
// coding.forEach((item)=>{
//     console.log(item )
// })

function printMe(item) {
  console.log(item);
}

// coding.forEach(printMe) // this is the right way

// coding.forEach(printMe()) we just have to give the reference we can't call () the function

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "Java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item)=>{
    console.log(item.languageFileName)
})