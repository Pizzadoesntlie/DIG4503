const Express = require("Express");
const App = Express();
const chalk = require("chalk");
const pokemons = require('json-pokemon');
const  port = 80;

App.use("/", Express.static("public"));

App.get("/id/:id", (req,res) => {

    let result = {"error": "id/name not found!"};

    pokemons.forEach((value) => {
        if(value.id == req.params.id) {
            result = value;
        }
    });

    if(result.error) {
        console.log(chalk.red(req.path));
    }else {
        console.log(chalk.green(req.path));
    }
   
    res.json(result);
});

App.get("/name/:name", (req,res) => {
    
    let result = {"error": "id/name not found!"};

    pokemons.forEach((value) => {
        if(value.name == req.params.name) {
            result = value;
        }
    });

    if(result.error) {
        console.log(chalk.red(req.path));
    }else {
        console.log(chalk.green(req.path));
    }
   
    res.json(result);
});

App.listen(port, () => {
    console.log("Server running!");
});