


function makeMultiple(multi){
    var x=multi;
    
   function y(num) {
       result = num*x;
    console.log(result);
       
     
   }
  return y;
}
var triple =makeMultiple(3);
var dbl=makeMultiple(2);


