var fetch = require('node-fetch');

// turn over default
const URL = 'https://api.bnm.gov.my/public/fx-turn-over/'


// turn over by month and year
async function fxTurnOverByYearMonth(year, month){

    var path = URL+'year/'+year+'/month/'+month;
    // console.log('3: '+path);

    var options = {

        method: 'GET',
        headers: {'Accept': 'application/vnd.BNM.API.v1+json'},
        
    }

    var x = await fetch(path, options)
            .then(res => res.json())
            .then(json => {
                return json;
            },
            err => {
                if (err.name == 'AbortError'){
                    console.log(err.name)
                    return err.name;
                }
            })

            // console.log(x)
            return await x;

}

module.exports = fxTurnOverByYearMonth;