var assert = require('chai').assert;

var baseRate = require('../lib/api/baseRate')


describe('baseRate', function(){

    this.timeout(5000);

    it('should return object data', async function(){
        const result = await baseRate('bimb');
        // console.log(result)
        assert.typeOf(result, 'object')
    })

})