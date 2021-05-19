function convertFahrToCelsius(F) {
  let C;
  C=(F - 32)*5/9;
  if(isNaN(C)){
    if(Array.isArray(F)){
      return "F"+" is not a valid parameter but an array"
  
    }
    else if(typeof(F)==='string'){
    return F + "is not a valid parameter but a string"
  
    
  } 
  
 else if(typeof(F) === 'object') {
    return "F"+" is not a valid parameter but an object"
  
  }

  } 
  else return C.toFixed(4);
} 
 console.log(convertFahrToCelsius(0 )) ;
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1,2,3] ));
console.log(convertFahrToCelsius({"temp": 0} )) ;
