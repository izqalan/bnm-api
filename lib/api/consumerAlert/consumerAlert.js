const fetch = require("node-fetch");

const URL = 'https://api.bnm.gov.my/public/consumer-alert/'

async function consumerAlert(company = ''){

    const response = await fetch(URL+company, {
        method: 'GET',
        headers: {'Accept': 'application/vnd.BNM.API.v1+json'},
    }).then(res => {
        
        if (res.status != '200'){
            console.log('ERROR '+res.status+' '+ res.statusText)
            
        }else{
            res.json();
        }
    }).then(json => { 
        console.log(json)
        return json 
    },
    err => {
        if(err.name === 'AbortError'){
            console.log(err.name)
            return err.name;
        }
    })

    return await response;

}

module.exports = consumerAlert;

