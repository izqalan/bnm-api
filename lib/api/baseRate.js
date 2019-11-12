var fetch = require('node-fetch');

async function baseRate(bankCode = ''){

    const URL = 'https://api.bnm.gov.my/public/base-rate/'

    var options = {

        method: 'GET',
        headers: {'Accept': 'application/vnd.BNM.API.v1+json'},
        
    }
    
    var x = await fetch(URL+bankCode, options)
        .then(res => res.json())
        .then(json => {
            return json;
            // console.log(json);
        },
        err => {
            if (err.name === 'AbortError') {
                // request was aborted
                console.log(err.name)
                return err.name;
              }
        })
        // console.log(x)
        return await x;
   
}

module.exports = baseRate;