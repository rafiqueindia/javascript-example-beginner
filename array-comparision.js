


var array1 = [4,8,9,10];
var array2 = [4,8,9,10];

var is_same = function(a,b) {
  (a.length == b.length) && a.every(function(element, index) {
    return element === b[index]; 
})};

console.log(isSame(array1,array2));