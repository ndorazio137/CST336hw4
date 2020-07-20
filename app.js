const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res) {
    res.render("index.html");
});

app.get("/computervision.html", function(req, res){
    res.render("computervision.html");
});

app.get("/speechrecognition.html", function(req, res) {
    res.render("speechrecognition.html");
});

app.get("/machinelearning.html", function(req, res){
    res.render("machinelearning.html");
});

app.get("/sources.html", function(req, res){
    res.render("sources.html");
});

// starting server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express server is running...");
});