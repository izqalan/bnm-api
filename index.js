'use-strict';

module.exports = {

    // api
    handler: require('./lib/api/handler'),
    baseRate: require('./lib/api/baseRate'),
    
    fxTurnOver: require('./lib/api/fxTurnOver/fxTurnOver'),
    fxTurnOverByDate: require('./lib/api/fxTurnOver/fxTurnOverByDate'),
    fxTurnOverByYearMonth: require('./lib/api/fxTurnOver/fxTurnOverByYearMonth'),
    
    exchangeRate: require('./lib/api/exchangeRate/exchangeRate'),
    xchgRateCurrency: require('./lib/api/exchangeRate/xchgRateCurrency'),
    xchgRateByDate: require('./lib/api/exchangeRate/xchgRateByDate'),
    xchgByYearMonth: require('./lib/api/exchangeRate/xchgByYearMonth'),
    
    consumerAlert: require('./lib/api/consumerAlert/consumerAlert'),

    itbSwap: require('./lib/api/interSwap/itbSwap').default,
    itbSwapByDate: require('./lib/api/interSwap/itbSwapByDate'),
    itbSwapYearMonth: require('./lib/api/interSwap/itbSwapYearMonth'),

    interestRate: require('./lib/api/interestRate/interestRate'),
    interestRateDate: require('./lib/api/interestRate/interestRateDate'),
    interestRateYearMonth: require('./lib/api/interestRate/interestRateYearMonth'),

    interestVolume: require('./lib/api/interestVolume/interestVolume'),
    interestVolDate: require('./lib/api/interestVolume/interestVolDate'),
    interestVolYearMonth: require('./lib/api/interestVolume/interestVolYearMonth'),
    


}
