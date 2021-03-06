var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

var yoda = {
    name: "yoda",
    role: "jedi master",
    age: 900,
    forcePoints: 2000
};

var luke = {
    name: "luke skywalker",
    role: "hermit",
    age: "66",
    forcePoints: 10000
};
app.get("/yoda", function (req, res) {
    res.json(yoda);
});

app.get("/luke", function (req, res) {
    res.json(luke);
});

app.listen(PORT, function () {
    console.log('App is listening on port: ' + PORT);
});