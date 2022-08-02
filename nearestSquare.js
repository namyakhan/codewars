//CHALLENGE❓
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.


//SOLUTION🚀
function nearestSq(n){
   
  const number =  Math.round(Math.sqrt(n))
  return Math.pow(number,2)
}
