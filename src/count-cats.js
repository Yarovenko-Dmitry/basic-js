module.exports = function countCats(matrix) {  
  
let cat = '^^';
let cats = 0;

 for (i = 0; i < matrix.length; i++) {
   for (j = 0; j < matrix[i].length; j++ ) {
    if (matrix[i][j] == cat) {
        cats += 1;
      }
   }
 }

return cats;
};
