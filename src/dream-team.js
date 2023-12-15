const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arrNames = members.filter(i => {
    if (typeof i === 'string'){
      return i;
    }
  });
  const arrFirstLetters = arrNames.sort().map(i => i.split('')).map(i => i[0]);
  return arrFirstLetters.join('');
}

module.exports = {
  createDreamTeam
};
