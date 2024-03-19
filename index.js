require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/face", (req, res) => {
  res.send("pradeep kumar app is working");
});

app.get("/home", (req, res) => {
  res.send("<h1>This our home page</h1>");
});

// api from github and passing json file
const githubProfile = {
  login: "pradeepSharmadev",
  id: 112090779,
  node_id: "U_kgDOBq5emw",
  avatar_url: "https://avatars.githubusercontent.com/u/112090779?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/pradeepSharmadev",
  html_url: "https://github.com/pradeepSharmadev",
  followers_url: "https://api.github.com/users/pradeepSharmadev/followers",
  following_url:
    "https://api.github.com/users/pradeepSharmadev/following{/other_user}",
  gists_url: "https://api.github.com/users/pradeepSharmadev/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/pradeepSharmadev/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/pradeepSharmadev/subscriptions",
  organizations_url: "https://api.github.com/users/pradeepSharmadev/orgs",
  repos_url: "https://api.github.com/users/pradeepSharmadev/repos",
  events_url: "https://api.github.com/users/pradeepSharmadev/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/pradeepSharmadev/received_events",
  type: "User",
  site_admin: false,
  name: "Pradeep Kumar",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 7,
  public_gists: 0,
  followers: 1,
  following: 2,
  created_at: "2022-08-25T12:45:56Z",
  updated_at: "2024-03-19T15:33:32Z",
};

app.get("/githubpradeep", (req, res) => {
  res.json(githubProfile);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
