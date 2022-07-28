//CHALLENGE❓
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.

//SOLUTION🚀
function divCon(x){
let countString=0;
  let countNumber = 0;
  
  for(let i=0; i<x.length; i++){
    
    if(typeof x[i] == 'string'){
        countString+=parseInt(x[i])
    } else if(typeof x[i] !== 'string'){
  
         countNumber+=x[i]
    }
    }
  return countNumber - countString;
   
  }
