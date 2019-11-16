"use strict"

const request = require('request');
const fetch = require('node-fetch');

// var url = 'https://api.bnm.gov.my/public/base-rate/' 

class ApiHandler{
    
    constructor(url){
        this.url = url;
        this.options = {

            method: 'GET',
            headers: {
                'Accept': 'application/vnd.BNM.API.v1+json'
            }
        }

        this.handler = (callback) => {
        request(this.url, options, (err, res, body)=>{
        
            if(err){
                return callback(err);
            }
            console.log(res.statusCode+' '+res.statusMessage);
            console.log("body: "+body)
            return callback(body)
        });
        }
    }
    

    getResponse(){
        return this.handler;
    }
}





module.exports = ApiHandler
