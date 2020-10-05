var assert = require('chai').assert;

var emas = require('../lib/api/kijangEmas/emas')
var emasByDate = require('../lib/api/kijangEmas/emasByDate')
var emasByYearMonth = require('../lib/api/kijangEmas/emasByYearMonth')

describe('kijang emas', function(){

    before(function() {
        this.skip();
    });

    this.timeout(5000);

    it('should return object data', async function(){

        const result = await emas();
        assert.typeOf(result, 'object')        

    })

    it('should return object data by date', async function(){

        var date = "2019-11-14";
        const result = await emasByDate(date);
        assert.typeOf(result, 'object');

    })

    it('should return object by yyyy, mm', async function(){

        var year = '2019'
        var mon = '01'

        const result = await emasByYearMonth(year, mon);

        assert.isObject(result,'result is an object');
        for(var i = 0; i < result.data.length; i++){
            var d = result.data[i].effective_date;
            if( d.substr(0,7) !== '2019-01'){
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