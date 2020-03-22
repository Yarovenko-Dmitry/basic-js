module.exports = function getSeason(date) {

  const errorString = 'Unable to determine the time of year!';
  
  if ( date == undefined ) {
    return errorString;
  } 

  if ( !date.getUTCMilliseconds() ) { throw new Error; }

  let checkedMonth = date.getMonth() + 1;

  if ( checkedMonth == 12 || checkedMonth == 1 || checkedMonth == 2 ) {
    return 'winter'; 
  }

  if ( checkedMonth == 3 || checkedMonth == 4 || checkedMonth == 5 ) {
    return 'spring'; 
  }

  if ( checkedMonth == 6 || checkedMonth == 7 || checkedMonth == 8 ) { 
    return 'summer'; 
  }

  return 'autumn'; 
};
