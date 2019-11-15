var assert = require('chai').assert;

var renminbiDeposit = require('../lib/api/renminbi/renminbiDeposit')
var renminbiForwardPrice = require('../lib/api/renminbi/renminbiForwardPrice')

describe('Renminbi', function(){

    before(function() {
        this.skip();
    });

    this.timeout(5000)

    it('should return object data', async function(){

        const result = await renminbiDeposit();
        // console.log(result);
        assert.typeOf(result, 'object')        

    })
    it('should return object data', async function(){

        const result = await renminbiForwardPrice();
        // console.log(result);
        assert.typeOf(result, 'object')        

    })

})