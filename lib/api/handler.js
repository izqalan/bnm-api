var request = require('request');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var fetch = require('node-fetch');

// async function handler(url){

//     var options = {

//         method: 'GET',
//         headers: {'Accept': 'application/vnd.BNM.API.v1+json'},
        
//     }

//     var x = await fetch(url, options)
//     .then(res => {
//         if (res.status != '200'){
//            console.log('ERROR '+res.status+' '+ res.statusText)
            
//         }else{
            
//             res.json();
//         }
//     })
//     .then(json =>{
//         console.log(res.json)
//         return json;
//     },
//     err => {
//         if(err.name === 'AbortError'){
//             console.log(err.name)
//             return err.name;
//         }
//     })

//     return await x;

//     // fetch(url, options).then(response => {
//     //     return response.json;
//     // })


// }


// function handler (url){

//     var options = {

//         headers: {
//             'Accept': 'application/vnd.BNM.API.v1+json'
//         }
//     }

//     request(url, options, function(error, response, body){

//         if (!error && response.statusCode == 200) {
//             // console.log(JSON.parse(body))

//             return Promise.resolve(JSON.parse(body));
//         }

//     })


// }

function handler(url){
    return promise = new Promise(function(resolve, reject){

        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            resolve(this.responseText);
        }

        xhr.onerror = reject;
        xhr.open('GET', url);
        xhr.setRequestHeader('Accept', 'application/vnd.BNM.API.v1+json');
        xhr.send();


    })
}

module.exports = handler;