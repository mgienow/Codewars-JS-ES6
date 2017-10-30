/*
Write a reverseWords function that
accepts a string a parameter, and reverses each word in the string.
 Every space should stay - watch out for double spaces!
Example:

reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
reverseWords "An example!"    -- "nA !elpmaxe"
reverseWords "double  spaces" -- "elbuod  secaps"
 */

 function reverseWords(str) {
   //FIrst, split str into an array of single elements based on spaces.
   //If it's one word, the word will be split into single letters. If it's a sentence,
   //it will be split into an array of single words:
    let splitStr = str.split(' ');
    //['This', 'is', 'an', 'example']
    //now, take the split string array and map each item in the array,
    //splitting it, reversing, and then joining back together.
    let reverse = splitStr.map(function(item){
      return item.split('').reverse().join('')
});
// take the returned array, `reverse`, and join it into the original string configuration, then return it
    let rejoin = reverse.join(' ');
    return rejoin;
}

//Now to refactor to a more elegant piece of code, joining everything into a single
//chained line of operations:

function reverseWords(str){
  return str.split(' ').map(function (item){
    return item.split('').reverse().join('')
  }).join(' ')
}
//And, finally, change Map to an arrow function. We can remove the return statmenet
//because Map implicitly returns the result of whatever function it contains.
function reverseWords(str){
  return str.split(' ').map(item =>
  item.split('').reverse().join('')
).join(' ')
}

//Here is a non-map solution that is perhaps even more elegant. ALso I like it because it points out the diff
//btw ('') and (' ') on the array prototype methods.

function reverseWords(str){
  return str.split('').reverse().join('').split(' ').reverse().join();
}

//Though i am confused by the console results. Why is the first string, when split, console logging as
//reversed already, when it has not yet had the reverse() mehtod run on it?
function reverseWords(str) {
  var firstSplit = str.split("")
var firstRev = firstSplit.reverse()
var firstJoin = firstRev.join("")
console.log(firstSplit)
console.log(firstRev)
console.log(firstJoin)
var secondSplit = firstJoin.split(" ")
var secondRev = secondSplit.reverse()
var secondJoin = secondRev.join(" ");
console.log(secondSplit)
console.log(secondRev)
console.log(secondJoin)
}
undefined
reverseWords('This is an example')
VM7162:5 (18) ["e", "l", "p", "m", "a", "x", "e", " ", "n", "a", " ", "s", "i", " ", "s", "i", "h", "T"]
VM7162:6 (18) ["e", "l", "p", "m", "a", "x", "e", " ", "n", "a", " ", "s", "i", " ", "s", "i", "h", "T"]
VM7162:7 elpmaxe na si sihT
VM7162:11 (4) ["sihT", "si", "na", "elpmaxe"]
VM7162:12 (4) ["sihT", "si", "na", "elpmaxe"]
VM7162:13 sihT si na elpmaxe
undefined
