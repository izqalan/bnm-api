var assert = require('chai').assert;

var usdRate = require('../lib/api/usdRefRate/usdRate');
var usdRateYearMonth = require('../lib/api/usdRefRate/usdRateYearMonth');

describe('USD reference rate', function () {
    before(function () {
        this.skip();
    });

    this.timeout(5000);

    it('should return object data', async function () {
        const result = await usdRate();
        // console.log(result);
        assert.typeOf(result, 'object');
    });

    it('should return object data by date', async function () {
        var date = '2019-10-16';
        const result = await usdRate(date);
        assert.typeOf(result, 'object');
        // console.log(result.data.date)
        assert.equal(result.data.date, date);
    });

    it('should return object by yyyy, mm', async function () {
        var year = '2019';
        var mon = '01';

        const result = await usdRateYearMonth(year, mon);

        assert.isObject(result, 'result is an object');
        for (var i = 0; i < result.data.length; i++) {
            var d = result.data[i].date;
            if (d.substr(0, 7) !== '2019-01') {
                console.error('ERROR');
                assert.fail('mismatch data');
                return 0;
            }
            if (i === result.data.length) {
                assert.isOk(result, 'data matched');
            }
        }
    });
});
