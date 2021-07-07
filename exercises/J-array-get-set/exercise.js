/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(arr) {
  return arr[0]; // complete this statement
}

function last(arr) {
  return arr[arr.length - 1]; // complete this statement
  // As A Question : why it gives me an error whrn i use charAt in this function , Does this Happendes becouse
  // the parameter in this function (arr) i dont know its type {array , int , String ....}? 
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar", "Joe"];

console.log(first(numbers));
console.log(last(numbers));
console.log(last(names));

/* 
  EXPECTED RESULT
  ---------------
  1
  3
  Joe
*/
