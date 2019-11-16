var assert = require('chai').assert;

var baseRate = require('../lib/api/baseRate/baseRate')


describe('baseRate', function(){

    // before(function() {
    //     this.skip();
    // });
    
    this.timeout(5000);

    it('should return object data', function(){
        const result = baseRate('bimb');
        // console.log(result)
        assert.typeOf(result, 'object')
    })

})