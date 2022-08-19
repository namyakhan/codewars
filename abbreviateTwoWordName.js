
//CHALLENGE❓
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F



////SOLUTION🚀
function abbrevName(name){

  const el =  name.split(" ")
  
  const [names, title] = el;
  
  const firstChar = names.charAt(0).toUpperCase();
 const secondChar = title.charAt(0).toUpperCase() ;
 
  return firstChar + '.' + secondChar;
  
  ////SOLUTION2🚀
  return name.split(" ").map(name => name[0].toUpperCase()).join(".");
