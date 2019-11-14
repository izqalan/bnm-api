var assert = require('chai').assert;

var consumerAlert = require('../lib/api/consumerAlert/consumerAlert')

describe('consumer alert', function(){

    this.timeout(5000);
    it('should return object', async function(){
        
        const result = await consumerAlert("Global Venture Financing");
        // console.log(result);
        assert.typeOf(result, 'object')
    })
})