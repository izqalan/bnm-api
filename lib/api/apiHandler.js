"use strict"

const request = require('request');
// const fetch = require('node-fetch');

require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');


// var url = 'https://api.bnm.gov.my/public/base-rate/' 

// class ApiHandler{

//     constructor(url){
//         this.url = url;
//         this.options = {

//             method: 'GET',
//             headers: {
//                 'Accept': 'application/vnd.BNM.API.v1+json'
//             }
//         }

//         this.handler = (callback) => {
//             fetch(this.url, options, (err, res, body)=>{
        
//             if(err){
//                 return callback(err);
//             }
//             console.log(res.statusCode+' '+res.statusMessage);
//             console.log("body: "+body)
//             return callback(body)
//         });
//         }
//     }
    

//     getResponse(){
//         return this.handler;
//     }
// }


function apiHandler(url){

    var options = {
        method: 'GET',
            headers: {
                'Accept': 'application/vnd.BNM.API.v1+json'
            }
    }

    fetch(url, options,)
        .then(res => {
            if (res.status >= 400) {
                throw new Error("Bad response from server");
            }
            return res.json();
        })
        .then(data => {
            console.log(data)
        })

}


module.exports = apiHandler;
