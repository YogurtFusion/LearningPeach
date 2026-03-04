document.querySelector("li").style.color = "red"

let threeElement = document.getElementById("threeElements")
threeElement.firstElementChild.style.color="green"
threeElement.lastElementChild.style.color = "green"

// write a js program to change all the color of the li in cyan

document.querySelector("ul").style.color = "cyan"

let list = document.querySelectorAll("li")

list.forEach((li)=>{
    li.style.backgroundColor="cyan"
})