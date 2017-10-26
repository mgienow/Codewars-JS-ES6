/*
An array is called zero-balanced if its elements sum to 0 and for each positive element n,
 there exists another element that is the negative of n.

 Write a function named ìsZeroBalanced that returns true if its argument is
zero-balanced array, else return false. Note that an empty array will not sum to zero.
 */



function ìsZeroBalanced(n){
  //check for empty array. No matter what the instructions say, an empty array
  // does NOT sum to zero, so used array.length:
  if(n.length === 0) return false;
  //next, use reduce() to sum the array's contents to a single value, x:
  let x = n.reduce((a,b) => a+b, 0);
  //The first part, if x === 0, was easy-peasey. A zero-balanced array must sum to zero.
  //If it's not, return false and we are done.
  //The second part made me sweat blood and hate everything:
  //Nn array "n", for every appearance of a value, y, if n also includes (-y) then return true;
  if(x===0 &&  n.every(y=>n.includes(-y))) {
    return true;
  } else {
    return false;
  };
}
