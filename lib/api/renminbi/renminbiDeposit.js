var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/renminbi-deposit-acceptance-rate';

/**
 * @function renminbiDeposit - Indicative CNY/MYR forward prices for trade settlement and RMB deposit acceptance rates
 */
function renminbiDeposit() {
    return handler(URL);
}

module.exports = renminbiDeposit;
