const img = document.createElement("img");
const profileName = document.createElement("h2");
const followers = document.createElement("p");
const bio = document.createElement("p");
const link = document.createElement("a");
const button = document.createElement("button")
button.innerHTML = "click for view the profile "

const card = document.createElement("div");
card.className = "profile-card";

img.className = "profile-avatar";
profileName.className = "profile-name";
followers.className = "profile-followers";
bio.className = "profile-bio";
link.className = "profile-link";


const requestUrl = "https://api.github.com/users/hiteshchoudhary";

const xhr = new XMLHttpRequest();

xhr.open("GET", requestUrl);

xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("inside the function");
        const data = JSON.parse(this.responseText);
        profileName.innerHTML = data.login;
        followers.innerHTML = data.followers.toLocaleString()+"Followers";
        img.src = data.avatar_url;
        img.alt = data.login;
        bio.innerHTML = data.bio;
        link.href = data.html_url;
        link.innerHTML = data.login;
        link.target = "_blank";
    }
};

button.addEventListener("click",function(){

    xhr.send();
})

card.append(img, profileName, followers, bio, link);

const main = document.body.querySelector("main");
main.append(card,button)
