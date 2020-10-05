var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/renminbi-fx-forward-price';

/**
 * @function renminbiForwardPrice - Indicative CNY/MYR forward prices for trade settlement and RMB deposit acceptance rates
 */
function renminbiForwardPrice(){
    return handler(URL);
}

module.exports = renminbiForwardPrice;