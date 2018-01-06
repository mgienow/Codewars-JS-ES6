// function titleCase(title, minorWords) {
//   //establish empty array
//   let titleCased = []
//   //establish variable to hold the title argument, lower case and split into an array of separate words
//   let titleWords = title.toLowerCase().split(" ")
//   //if minorWords is passed/not undefined, lower case and split to array
//   if(minorWords){
//     let minorWordsArr = minorWords.toLowerCase().split(" ")
//   }
//   for(let i=0; i<titleCased.length; i++) {
//     let currentWord = titleWords[i]
//     if (minorWords === undefined){
//       titleCased.push(currentWord[0].toUpperCase() + currentWord.slice(1))
//     } else {
//       if(!minorWordsArr.includes(currentWord) || i === 0) {
//         titleCased.push(currentWord[0].toUpperCase() + currentWord.slice(1))
//       } else {
//         titleCased.push(currentWord)
//       }
//     }
//   }
//   return titleCased.join(" ")
// }

function titleCase(title, minorWords) {
    //if an empty string is passed, return empty string and exit function
     if (title===('')) {
        return ""
     }
  //establish variable to hold the title, lowercased and split into array
    let titleWords = title.toLowerCase().split(" ")
//establish variable for the array from minorWords; if it is passed, split into array//
//and assign to arrMinor; if it is not, then arrMinor holds an empty array
    let arrMinor;
    
    if (minorWords){
    arrMinor = minorWords.toLowerCase().split(" ")
    }else{
        arrMinor = [];
    }
//now iterate over array of titleWords. At each index,
  
  for (i = 0; i<titleWords.length; i++){
  //if arrMinor DOES NOT contain the value of titleWords at index i, 
  //split the word at that index into an array, make the letter at index 0 to upper case,
  //then join back into string:
      if((arrMinor.indexOf(titleWords[i]))===-1){
          
        var word1 = titleWords[i].split("")
        word1[0] = word1[0].toUpperCase()
        titleWords[i] = word1.join("")
   //otherwise, the word is just the word  
      }else{
          titleWords[i]
      }
    }
    //now make sure the first word is always capitalized no matter what:
      var firstWord = titleWords[0].split("")
      firstWord[0] = firstWord[0].toUpperCase()
      titleWords[0] = firstWord.join("")
      
      titleWords = titleWords.join(" ")
      return titleWords
}


/// alt version:
function titleCase(title, minorWords) {
  if(title.length === 0) return title;
  var words = title.toLowerCase().split(" ");
  var minorWordsArray = minorWords?minorWords.toLowerCase().split(" "):[];
  return words.map(function(word,index){
    if(minorWordsArray.indexOf(word) !== -1 && index!=0){
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}