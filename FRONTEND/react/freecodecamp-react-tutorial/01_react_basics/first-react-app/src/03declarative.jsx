// Declarative
import {createRoot} from "react-dom/client"

const root = createRoot(document.getElementById("root"))

root.render(
    <h1 className="header">Hellow world earth</h1> // here we just did the syntax how react would figure out about the below functions
)

// it's imperative coding we've to tell every step 
const h1 = document.createElement("h1")

h1.textContent = "Hellow space this is me"
h1.className = "header"
document.getElementById("root").appendChild(h1)