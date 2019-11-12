var fetch = require('node-fetch');

// turn over default
const URL = 'https://api.bnm.gov.my/public/fx-turn-over/'

// turn over by date yyyy-mm-dd
async function fxTurnOverByDate(date){

    var path = URL+'date/'
    // console.log('2: '+path);

    var options = {

        method: 'GET',
        headers: {'Accept': 'application/vnd.BNM.API.v1+json'},
        
    }

    var x = await fetch(path+date, options)
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

    return await x;

}

module.exports = fxTurnOverByDate;