var fetch = require('node-fetch');

const URL = 'https://api.bnm.gov.my/public/exchange-rate/'

async function exchangeRateCurrency(currency_code){

    var path = URL+currency_code;

    var options = {

        method: 'GET',
        headers: {'Accept': 'application/vnd.BNM.API.v1+json'},
        
    }

    var x = await fetch(path, options)
    .then(res => res.json())
    .then(json =>{
        return json;
    },
    eer => {
        if(err.name === 'AbortError'){
            console.log(err.name)
            return err.name;
        }
    })

    return await x;

}

module.exports = exchangeRateCurrency;