var fetch = require('node-fetch');

function fxTurnOver(){

    
    const URL = 'https://api.bnm.gov.my/public/fx-turn-over'

    var options = {

        method: 'GET',
        headers: {'Accept': 'application/vnd.BNM.API.v1+json'},
        
    }

    fetch(URL, options)
        .then(res => res.json())
        .then(json => {
            return json;
        })

}

// console.log(fxTurnOver());

module.exports = fxTurnOver;

