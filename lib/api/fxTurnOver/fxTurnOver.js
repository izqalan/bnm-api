var fetch = require('node-fetch');

// turn over default
const URL = 'https://api.bnm.gov.my/public/fx-turn-over/'

async function fxTurnOver(){

    // console.log('1: '+URL);

    var options = {

        method: 'GET',
        headers: {'Accept': 'application/vnd.BNM.API.v1+json'},
        
    }

    var x = await fetch(URL, options)
        .then(res => res.json())
        .then(json => {
            return json;
        },
        err => {
            if(err.name === 'AbortError'){
                console.log(err.name)
                return err.name;
            }
        })

        // console.log(x);
        return await x;

}
// console.log(fxTurnOver());

module.exports = fxTurnOver;

