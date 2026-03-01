//create a variable of type string and try to add number  to it 
let $a = "variable"
let $n = 12

console.log($a+$n)

// create a const object in javascript can you  change it to hold a number later 

const obj1 = {
    item: "no.1 item",
    item: "no.1 item",
    item: "no.1 item",
    item: "no.1 item",
    item: "no.1 item",
    $item: "no.1 item",
    $item: "no.1 item",
}
// obj1 = 6
obj1.$item =5
//try to add a new key to the const object in 
obj1.$item2 = 4
console.log(obj1);


// write a program to create a word meaning dictionary of 5 words

const dictionary = {
    lemon: "sour shit burn the eyes ",
    peach : "emoji fruit",
    cake : "delicious ",
    pine_apple: " good snack fruit",
    $fift_word: " i don't want to guess fifth word"
}

console.log(dictionary, Object.keys(dictionary))