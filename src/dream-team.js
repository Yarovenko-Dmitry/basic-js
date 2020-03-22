module.exports = function createDreamTeam(members) {
  
  let result = [];
  let firstCharacter = '';

  if ( !members)  {
    return false;
  } else {
    for ( let i = 0; i < members.length; i++) {
      if( typeof members[i] == 'string') {
        firstCharacter = members[i].trim().charAt(0).toUpperCase();
        result.push(firstCharacter);
      }
    }
    return result.sort().join('');
  } 
};
