var assert = require('chai').assert;

var itbSwap = require('../lib/api/interSwap/itbSwap')

describe('interbank swaps', function(){

    this.timeout(5000);

    it('should return object data', function(){

        var result = itbSwap();
        console.log(result);
        assert.typeOf(result, 'object')        

    })


})