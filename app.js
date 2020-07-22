const express = require("express");
const faker = require('faker');
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res) {
    res.render("index.ejs");
});

app.get("/computervision", function(req, res) {
    res.render("computervision.ejs");
});

app.get("/speechrecognition", function(req, res) {
    res.render("speechrecognition.ejs");
});

app.get("/machinelearning", function(req, res) {
    res.render("machinelearning.ejs");
});

app.get("/sources", function(req, res) {
    let random = [];
    for (let i = 0; i < 5; i++) {
        let randomPerson = {
            name: faker.name.findName(),
            email: faker.internet.email()
        };
        random[i] = randomPerson;
    }
    res.render("sources.ejs", { random });
});

// starting server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express server is running...");
});
