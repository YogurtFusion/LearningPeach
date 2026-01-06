"Initializing js"

let count = document.getElementById("count")
let btn = document.getElementById("btn")

count.innerHTML += 0
let value = 0;

function increment(){
value = value+1
count.innerText= value
}

btn.addEventListener("click", increment)
