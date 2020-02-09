const Express = require("Express");
const App = Express();
const chalk = require("chalk");
const pokemons = require('json-pokemon');
const  port = 80;

App.get("/id/:id", (req,res) => {

    let result = {"error": "id/name not found"};

    pokemons.forEach((value) => {
        if(value.id == req.params.id) {
            res.send(value);
        }
    });

    if(result.error) {
        console.log(chalk.red(req.params.id));
    }else {
        console.log(chalk.green(req.path));
    }
   
    res.send(result);
});

App.get("/name/:name", (req,res) => {
    
    let result = {"error": "id/name not found"};

    pokemons.forEach((value) => {
        if(value.name == req.params.name) {
            res.send(value);
        }
    });

    if(result.error) {
        console.log(chalk.red(req.params.name));
    }else {
        console.log(chalk.green(req.path));
    }
   
    res.send(result);
});

App.listen(port, () => {
    console.log("Server running!");
});