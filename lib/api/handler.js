var fetch = require('node-fetch');

function handler(url){

    const options = {

        method: 'GET',
        headers: {
            'Accept': 'application/vnd.BNM.API.v1+json'
        }
    }

    var response = fetch(url, options).then(res => res.json())
    .then(json => {
        return json
    },
    err => {
        if(err.name === 'AbortError'){
            console.log(err.name)
            return err.name;
        }
    })

    return response;

}

module.exports = handler;
