
const Element = document.getElementById("element")
Element.hidden = true

let div = document.createElement("div")
div.className = "alert"

div.innerHTML = "<span>Hellow</span>"
document.body.append(div)


let box = document.getElementById("box")

let para  = document.createElement("p")
para.innerHTML="<p>this is append</p>"

let prepend = document.createElement("p")
prepend.innerHTML="<p> this is prepend </p>"


let before = document.createElement("p")
before.innerHTML="<p> this is before </p>"


let after = document.createElement("p")
after.innerHTML="<p> this is after </p>"


box.append(para)
box.prepend(prepend)
box.after(after)
box.before(before)

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")

btn1.addEventListener("click", (e)=>{
alert("this is the first alert 🎂")
})

btn2.addEventListener("click",(e)=>{
    alert('this is second alt');
    
})

btn3.addEventListener("click", (e)=>{
    alert('this is you third alt');
    
})


// create a website which capable of storing bookmarks of  your favrouite  websites using herf 
let store = document.getElementById("store")
let submitBtn = document.getElementById("submit")

submitBtn.addEventListener("click", (e)=>{
    let NewDiv = document.createElement("a")
let linkValue = store.value

if(!linkValue.startsWith("http")){
    linkValue="https://"+linkValue
}
NewDiv.href = linkValue
NewDiv.textContent = "visit " + linkValue
NewDiv.style.display  = "block"
NewDiv.target = "_blank"
document.body.append(NewDiv)
})

// write a javascript programm to keep fetching contents ofa webstie every 5 secs

let newBox = document.getElementById("newBox")
setInterval(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
.then(res =>res.json()) 
.then((data) => {
    let newPara = document.createElement("p")
    newPara.textContent = "fetched title " + data[0].title;
    newBox.prepend(newPara)
} )
.catch((error)=>console.error("Error",error))

}, 5000);           


// create a glowing bulb effect using class list toggle method in js 

let bulb = document.getElementById("bulb")
let glow = document.getElementById("glow")

glow.addEventListener("click",(e)=>{
bulb.classList.toggle("glowing")
})
