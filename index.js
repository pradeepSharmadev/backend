require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/face",(req,res) =>{
    res.send("pradeep kumar app is working")

})

app.get("/home",(req,res)=>{
    res.send("<h1>This our home page</h1>")
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
