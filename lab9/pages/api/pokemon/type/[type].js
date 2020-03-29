import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let typeList = [];

    let result = {"error": "Could not find type."};

    let pokemon = getPokemon.typeList(req.query.params);

    for (let i = 0; i < pokemon.length; i++) {
    if(pokemon !== null) {
        result = pokemon;
    }

    for (let i = 0; i < typeList.length; i++)
    if(pokemon !== null) {
        result = pokemon;
    }

    res.json(result);

    }

}