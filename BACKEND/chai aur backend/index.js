// index.js
require("dotenv").config();
// or import 'dotenv/config' // for esm
console.log(`Hello ${process.env.PORT}`); // we just appllied to to listening app port line:30

const express = require("express");
// import express from "express" module js or new module js

const app = express();
const port = 3000;
const githubData = {
  login: "YogurtFusion",
  id: 191424275,
  node_id: "U_kgDOC2jnEw",
  avatar_url: "https://avatars.githubusercontent.com/u/191424275?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/YogurtFusion",
  html_url: "https://github.com/YogurtFusion",
  followers_url: "https://api.github.com/users/YogurtFusion/followers",
  following_url:
    "https://api.github.com/users/YogurtFusion/following{/other_user}",
  gists_url: "https://api.github.com/users/YogurtFusion/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/YogurtFusion/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/YogurtFusion/subscriptions",
  organizations_url: "https://api.github.com/users/YogurtFusion/orgs",
  repos_url: "https://api.github.com/users/YogurtFusion/repos",
  events_url: "https://api.github.com/users/YogurtFusion/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/YogurtFusion/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Aniket",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "a newbie wizard  trying to promote in next league",
  twitter_username: "AniketAtTech",
  public_repos: 17,
  public_gists: 0,
  followers: 9,
  following: 30,
  created_at: "2024-12-12T01:56:12Z",
  updated_at: "2026-10-04T19:09:34Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/pizza", (req, res) => {
  res.send("<h1>Here you'll find recipies of pizza</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login here </h1>");
});

app.get("/chappel", (req, res) => {
  res.send("<h1>welcome to chappel</h1>");
});

app.get('/github',(req, res)=>{
  res.json(githubData)
})

//app.listen(port,()=>{ // rather then taking port from port variable we're talking it from .env file

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
