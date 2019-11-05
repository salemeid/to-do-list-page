// testing purposes

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var tasks = ["buy food"];

app.get("/",function(req, res){

    res.render("test",{newStuffs: tasks});
    //res.send("<h1> It's a lovely day</h1>");
})

app.post("/",function(req, res){
  var stuff = req.body.newTask;
  tasks.push(stuff);
  res.redirect("/");

})



app.listen(3000, function(){
  console.log("Services started on port 3000");
})
