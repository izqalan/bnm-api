var assert = require('chai').assert;

var itbSwap = require('../lib/api/interSwap/itbSwap')
var handler = require('../lib/api/handler')

describe('interbank swaps', function(){

    this.timeout(5000);

    it('should return object data', async function(){

        const result = await itbSwap();
        // console.log(result);
        assert.typeOf(result, 'object')        

    })


})