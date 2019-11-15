var assert = require('chai').assert;

var exchangeRate = require('../lib/api/exchangeRate/exchangeRate')
var xchgRateCurrency = require('../lib/api/exchangeRate/xchgRateCurrency')
var xchgRateByDate = require('../lib/api/exchangeRate/xchgRateByDate')
var xchgByYearDate = require('../lib/api/exchangeRate/xchgByYearMonth')

describe('exchange rates', function(){

    // before(function() {
    //     this.skip();
    //   });

    this.timeout(5000);

    it('should return object data', async function(){

        const result = await exchangeRate();
        // console.log(result);
        assert.typeOf(result, 'object')        

    })

    it('data should equal to param', async function(){

        var currencyCode = 'USD'

        var result = await xchgRateCurrency(currencyCode);
        // console.log(result);
        // console.log('THIS AF currency: '+ result.data.currency_code);
        assert.typeOf(result, 'object');
        console.log('Response code: '+result.code)
        assert.equal(result.data.currency_code, currencyCode);



    })

    it('should return object, currency and date matches data', async function(){

        var currencyCode = 'EUR'
        var date = '2019-10-10'

        const result = await xchgRateByDate(currencyCode, date);

        assert.isObject(result, 'result is an object');
        assert.equal(result.data.currency_code, currencyCode)
        assert.equal(result.data.rate.date, date)
        


    })

    it('param should matched data', async function(){

        var currencyCode = 'JPY'
        var year = '2018'
        var month = '01'

        const result = await xchgByYearDate(currencyCode, year, month);

        for(var i = 0; i < result.data.rate.length; i++){
            var d = result.data.rate[i].date;
            if( d.substr(0,7) !== year+'-'+month ){
                console.error('ERROR')
                assert.fail('mismatch data')
                return 0;
            }
            if( i === result.data.rate.length){
                assert.isOk(result, 'data matched')
            }
        }

    })

})