const Express = require("express");
const App = Express();
const port = 80;

App.use("/public", Express.static("public"));

App.get("/", function(req, res) {
    res.send("Hello World!");
});

App.listen(port, function() {
    console.log("Server is running!");
});