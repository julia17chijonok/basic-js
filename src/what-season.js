const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  if (!(date instanceof Date) || date.hasOwnProperty('getMonth')) {
    throw Error('Invalid date!');
  } else {
    try {
      let seasons = ['winter', 'spring', 'summer', 'autumn', 'winter'];
      let month = date.getMonth();
      console.log(month);
      return seasons[Math.trunc((month + 1) / 3)];
    } 
    catch {
        throw new Error('Invalid date!');
    } 
  }
}

module.exports = {
  getSeason
};
