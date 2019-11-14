var assert = require('chai').assert;

var opr = require('../lib/api/overnightPolicyRate/opr')

describe('overnight policy rate', function(){

    this.timeout(5000);

    it('should return object data', async function(){

        const result = await opr();
        // console.log(result);
        assert.typeOf(result, 'object')        

    })

    it('should return object by yyyy, mm', async function(){

        var year = '2019'

        const result = await opr(year);

        assert.isObject(result,'result is an object');
        for(var i = 0; i < result.data.length; i++){
            var d = result.data[i].year;
            if(d != '2019'){
                console.error('ERROR')
                assert.fail('mismatch data')
                return 0;
            }
            if(i === result.data.length){
                assert.isOk(result, 'data matched')
            }
        }


    })

})