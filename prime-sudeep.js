function isPrime (num){
var arr =[2,3,5,7]

    for(i=0;i<arr.length;i++)
    {
        if( num===arr[i])
          return "This is Prime" ;
    
    }
    
        for(i=0;i<arr.length;i++)
        {
            if (num % arr[i]===0)
            return false;

        }
    
     return "This is Prime";
}

console.log(isPrime(57));