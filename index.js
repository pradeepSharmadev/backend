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

app.get("/burger",(req,res)=>{
  res.send(
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>whatAboutIt</title>
    <!-- <link rel="stylesheet" href="style.css"> -->
    <style>
        /* whatAboutIt */
/* code for complete documents */
/* links for logo  */
@import url("https://fonts.googleapis.com/css2?family=Jacques+Francois+Shadow&display=swap");

*{
    font-family: "Nunito", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    text-transform: capitalize;
    transition: all 0.3s linear; /*to cool transition which animate the all elements to linearly comes */

}

/* html section  */
html{
    font-size: 62.5%;
    overflow: hidden; /* fixed in exccific lenght of given size */
}

/* set the body */
body{
    background:#2e3548;
    margin: 0;

}

header {
    margin: 0px;
}

/* navigation section */
a{
    text-decoration: none;
    color: #000;

}
ul{
    list-style: none;
}

/* styling the logo */
.logo {
    font-size: 2.5rem;
    font-weight: bolder;
    color: #666;
    display: inline-block;
}

.logo i {
    padding-right: 2rem;
    color: black;
}

.order {
    text-shadow: 0 3px 4px rgba(255, 68, 68, 0.3);
    text-decoration: underline;
    padding-right: 1rem;
}

/* styling the navbar container */
.nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: white;
    color: black;
    height: 72px;
    padding: 1em;

}
.menu li:hover {
    cursor: pointer;
    transform: scale(1.2);
}

.menu {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    font-size: 18px;

}
.menu>li{
    margin: 0 1rem;
    overflow: hidden;

}
/* container for menu button  */
.menu-button-container {
    display: none;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
#menu-toggle {
    display: none;

}

/* creating the hamburger menu button  */
.menu-button,
.menu-button::before,
.menu-button::after{
    display: block;
    background-color: black;
    position: absolute;
    height: 6px;
    border-radius: 32px;
    color: white;

}
.menu-button::before{
    content: "";
    margin-top: -8px;
}

.menu-button::after{
    content: "";
    margin-top: 8px;

}
 /*  Adding Functionality to the Hamburger Menu with CSS  */

 #menu-toggle:checked+.menu-button-container .menu-button::before {
     margin-top: 0px;
     transform: rotate(45deg);
 }

 #menu-toggle:checked+.menu-button-container .menu-button {
     background: rgba(255, 255, 255, 0);
 }

 #menu-toggle:checked+.menu-button-container .menu-button::after {
     margin-top: 0px;
     /*  transforms the hamburger icon into a cross  */
     transform: rotate(-45deg);
 
}

 /* media queries  */

 @media (max-width: 991px) {
     html {
         font-size: 55%;
     }

     header {
         padding: 2rem;
     }

     section {
         padding: 2rem;
     }
    }

 @media (max-width: 768px) {
     .menu-button-container {
         display: flex;
     }

     .menu {
         position: absolute;
         top: 0;
         margin-top: 50px;
         left: 0;
         flex-direction: column;
         width: 100%;
         justify-content: center;
         align-items: center;
         padding: 2rem
     }

     .menu li:hover {
         transform: scale(1);
     }

     #menu-toggle~.menu li {
         height: 0;
         margin: 0;
         padding: 0;
         border: 0;
     }

     #menu-toggle:checked~.menu li {
         border: 1px solid #9f9a9a;
         height: 2.5em;
         padding: 0.5em;
     }

     .menu>li {
         display: flex;
         justify-content: center;
         margin: 0;
         padding: 0.5em 0;
         width: 100%;
         color: black;
         background-color: #e8e8e8;
     }

     .menu>li:not(:last-child) {
         border-bottom: 1px solid #444;
     }
 }

 /* styling the hero section */
.home {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    min-height: 100vh;
    align-items: center;

}
.home .content {
    flex: 1 1 40rem;
    /* padding-top: 6.5rem; */
    margin-left: 28px;

}

/* styling the main image */
.home .image{
    flex: 1 1 30rem;

}
.home .image img {
    width :90%;
    height: 90%;
    padding: 1rem;
    border-radius: 17%;
    animation: float 3s linear infinite;

}
@keyframes float {
    0%, 100%{
        transform: translateY(0rem);
    }
    50%{
        transform: translateY(3rem);

    }
}
.home .content h3 {
    font-size: 5.8rem;
    color: white;
}

/* Styling the content */

.yellowColor {
    color: yellow;
}

.mainfont {
    font-family: "Jacques Francois Shadow", cursive;
}

.home .content p {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    color: white;
    padding: 1rem 0;
}

.heading {
    text-align: center;
    font-size: 3.5rem;
    padding: 1rem;
    color: #666;
}

/* Styling the button  */

.btn {
    display: inline-block;
    padding: 0.8rem 3rem;
    border: 0.2rem solid white;
    color: white;
    cursor: pointer;
    font-size: 1.7rem;
    border-radius: 0.5rem;
    position: relative;
    overflow: hidden;
    z-index: 0;
    margin: 1rem 1rem 0 0;
}
.more:hover{
    background-color: rgb(253, 111, 86);
    box-shadow: 0 4px 12px rgba(0, 0,0, 0.2);
}

.btn:hover {
    color: #fff;
}

/* Adding media queries to make it responsive   */
@media (max-width: 450px) {
    html {
        font-size: 50%;
        overflow-x: hidden;
        overflow-y: scroll;
        text-align: center;
    }
}
    </style>
</head>
<body>
    <!-- navigation -->
    <section class="nav">
        <div class="logo">
            <a href="#"><i class="fas fa-uternsils"></i>food</a>
        </div>
            <input type="checkbox" id="menu-toggle">
            <label class="menu-button-container" for="menu-toggle">
                <div class="menu-button">

                </div>
            </label>
            <ul class="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#speciality">About</a></li>
                <li><a href="#popular">Popolur</a></li>
                <li><a href="review">Contact</a></li>
                <li><a href="#order" class="order">Menu</a></li>
            </ul>
        </section>
    <!-- <header>
        <div>
            <h2>The Ch<span>ee</span>se Decker</h2>
            <h3>Fastest F<span>oo</span>d For , Instant</h3>
            <h3><span>Hunger</span></h3>
        </div>
        <div><p>Savor the juiciest, most flavorful burgers in town! Made with fresh, premium ingredients and served hot off the grill. Whether you crave a classic cheeseburger or a gourmet specialty, we have got something to satisfy every appetite. Bite into happiness today!</p></div>
        <div>
            <button>ORDER NOW</button>
        </div>
        <div>
            <img src="https://images.all-free-download.com/images/graphicwebp/homemade_burger_560254.webp" alt="imageshero">
        </div>
    </header> -->
    <section class="home" id="home">
        <div class="content">
            <!-- Tagline -->
            <h3 class="mainfont">
                The Ch<span class="yellowColor">ee</span>se Decker
            </h3>
            <h3>
                fastest f<span class="yellowColor">oo</span>d for , instant
                <span class="yellowColor">Hunger</span>
            </h3>
            <!--Description  -->
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                accusamus tempore temporibus rem amet laudantium animi optio
                voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit
                incidunt rem quisquam eos!
            </p>
            
            <!-- CTA -->
            <a href="# " class="btn more">ORDER NOW</a>
        </div>
        <!-- Hero image -->
        
        <div class="image">
            <img src="burger-image.png" alt=" " />
        </div>
        </section>
    </section>
</body>
</html>`
  );
})

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
