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

    itbSwap: require('./lib/api/interSwap/itbSwap'),
    itbSwapByDate: require('./lib/api/interSwap/itbSwapByDate'),
    itbSwapYearMonth: require('./lib/api/interSwap/itbSwapYearMonth')


}
