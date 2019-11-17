'use-strict';

module.exports = {

    // api
    handler: require('./lib/api/handler'),
    baseRate: require('./lib/api/baseRate/baseRate'),
    
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
    itbSwapYearMonth: require('./lib/api/interSwap/itbSwapYearMonth'),

    interestRate: require('./lib/api/interestRate/interestRate'),
    interestRateDate: require('./lib/api/interestRate/interestRateDate'),
    interestRateYearMonth: require('./lib/api/interestRate/interestRateYearMonth'),

    interestVolume: require('./lib/api/interestVolume/interestVolume'),
    interestVolDate: require('./lib/api/interestVolume/interestVolDate'),
    interestVolYearMonth: require('./lib/api/interestVolume/interestVolYearMonth'),

    islamicRate: require('./lib/api/islamicRate/islamicRate'),
    islamicRateDate: require('./lib/api/islamicRate/islamicRateDate'),
    islamicRateYearMonth: require('./lib/api/islamicRate/islamicRateYearMonth'),

    emas: require('./lib/api/kijangEmas/emas'),
    emasByDate: require('./lib/api/kijangEmas/emasByDate'),
    emasByYearMonth: require('./lib/api/kijangEmas/emasByYearMonth'),

    opr: require('./lib/api/overnightPolicyRate/opr'),

    renminbiDeposit: require('./lib/api/renminbi/renminbiDeposit'),
    renminbiForwardPrice: require('./lib/api/renminbi/renminbiForwardPrice'),

    intradayRate: require('./lib/api/usdIntradayRate/usdIntradayRate'),
    intradayRateYearMonth: require('./lib/api/usdIntradayRate/intradayRateYearMon'),

    usdRate: require('./lib/api/usdRefRate/usdRate'),
    usdRateYearMonth: require('./lib/api/usdRefRate/usdRateYearMonth'),


}
