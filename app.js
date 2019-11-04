//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");


const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");



app.get("/",function(req, res){

  var today = new Date();
  var day = "";
  var msg = "";

  switch (today.getDay()) {
    case 6:
    day = "Saturday";
    msg = "Hooray!";
    break;
    case 0:
    day = "Sunday";
    msg = "Hooray!";
    break;
    case 1:
    day = "Monday";
    msg = "Booooooo!";
    break;
    case 2:
    day = "Tuesday";
    msg = "Booooooo!";
    break;
    case 3:
    day = "Wednesday";
    msg = "Booooooo!";
    break;
    case 4:
    day = "Thursday";
    msg = "Booooooo!";
    break;
    case 5:
    day = "Friday";
    msg = "Booooooo!";
      break;
    default:
    app.get("system error");

  }
  //
  // //**if (today.getDay() === 6) {
  //   day = "Saturday";
  //   msg = "Hooray!";
  // } else if (today.getDay() === 0){
  //   day = "Sunday";
  //   msg = "Hooray!";
  // } else if (today.getDay() === 1){
  //   day = "Monday";
  //   msg = "Boooo!";
  // } else if (today.getDay() === 2){
  //   day = "Tuesday";
  //   msg = "Boooo!";
  // } else if (today.getDay() === 3){
  //   day = "Wednsday";
  //   msg = "Boooo!";
  // } else if (today.getDay() === 4){
  //   day = "Thursday";
  //   msg = "Boooo!";
  // } else if (today.getDay() === 5){
  //   day = "Friday";
  //   msg = "Boooo!";
  // }

  res.render("list", {kindOfDay: day, message: msg});
});


app.listen(3000,function(){
  console.log("Running");
});
