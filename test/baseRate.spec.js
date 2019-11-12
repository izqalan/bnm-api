var assert = require('chai').assert;

var baseRate = require('../lib/api/baseRate')

describe('baseRate', function(){

    it('should return json data', async function(){
        const result = await baseRate('bimb');
        console.log(result)
        assert.typeOf(result, 'object')
    })

})