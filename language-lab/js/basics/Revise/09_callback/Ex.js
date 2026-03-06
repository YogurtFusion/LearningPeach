// write a program to load a java script file in a browser using promises use .then () to display an alert when the load is completed

function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resolve();
    };
    script.onerror = () => {
      reject(new Error("failed to load"));
    };
    document.body.append(script);
  });
}

loadScript("Theory.js").then(() => {
  alert("your script is loaded");
});


// write ques  1 but with async await 

function $loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve();
    };
    script.onerror=()=>{
        reject(new Error("failed to load"))
    }
    document.body.append(script)
  });
}

async function loading() {
try{

    await $loadScript("Theory.js")
    alert("load is completed")
}    catch(err) {
console.error(err);

}
}
loading()