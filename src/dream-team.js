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
function createDreamTeam( members ) {
  if(! Array.isArray(members)) return false;
  let clearMembers = members.filter( el => {return ((typeof el === 'string') && (el.trim().length != 0))});
  let arrFL = clearMembers.map(name => name.trim().slice(0,1).toLocaleUpperCase());
  return arrFL.sort().join("");
}

module.exports = {
  createDreamTeam
};
