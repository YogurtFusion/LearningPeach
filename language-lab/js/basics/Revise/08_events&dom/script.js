
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


