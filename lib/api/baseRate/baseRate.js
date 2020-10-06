var handler = require('../handler');

/**
 * @async
 * @function baseRate - Current Base Rates and Base Lending Rates for retail loans or financing facilities and Indicative Effective Lending Rates for a standard housing loan/home financing offered by financial institutions.
 * @param {string} bankCode - 8 characters of SWIFT code
 */
async function baseRate(bankCode = '') {
    const URL = 'https://api.bnm.gov.my/public/base-rate/' + bankCode;

    return handler(URL);
}

module.exports = baseRate;
