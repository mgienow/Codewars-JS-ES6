function titleCase(title, minorWords) {
  //establish empty array
  let titleCased = []
  //establish variable to hold the title argument, lower case and split into an array of separate words
  let titleWords = title.toLowerCase().split(" ")
  //if minorWords is passed/not undefined, lower case and split to array
  if(minorWords){
    let minorWordsArr = minorWords.toLowerCase().split(" ")
  }
  for(let i=0; i<titleCased.length; i++) {
    let currentWord = titleWords[i]
    if (minorWords === undefined){
      titleCased.push(currentWord[0].toUpperCase + currentWord.slice(1))
    } else {
      if(!minorWordsArr.includes(currentWord) || i = 0) {
        titleCased.push(currentWord[0].toUpperCase() + currentWord.slice(1))
      } else {
        titleCased.push(currentWord)
      }
    }
  }
  return titleCased.join(" ")
}


function titleCase(title, minorWords) {
    
     if (title===('')) {
        return ""
     }

    var arrTitle=title.split(" ")
    //console.log(arrTitle)
    var arrMinor;
    
    if (minorWords){
    arrMinor=minorWords.split(" ")
    }else{
        arrMinor=[];
    }
    //console.log(arrMinor)
    
    var arrLower=[];
    var arr2=[];
  
  for (j=0;j<arrTitle.length;j++){
      arrTitle[j]=arrTitle[j].split("")
      
      for (k=0;k<arrTitle[j].length;k++){
          arrTitle[j][k]=arrTitle[j][k].toLowerCase()
      }
      arrLower.push(arrTitle[j].join(""))
      console.log(arrLower)
  }
  
  for (j=0;j<arrMinor.length;j++){
      arrMinor[j]=arrMinor[j].split("")
      
      for (k=0;k<arrMinor[j].length;k++){
          arrMinor[j][k]=arrMinor[j][k].toLowerCase()
      }
      arr2.push(arrMinor[j].join(""))
      console.log(arr2)
  }
  
  for (j=0;j<arrLower.length;j++){
      if((arr2.indexOf(arrLower[j]))===-1){
          
        var word1=arrLower[j].split("")
        word1[0]=word1[0].toUpperCase()
        arrLower[j]=word1.join("")
        console.log(arrLower[j])
        
          console.log(arrLower[j]+", this word should have upper case on 1st letter")
      }else{
          arrLower[j]
          console.log(arrLower[j]+", all letters in this word stay lower case")
      }
    }
      var firstWord=arrLower[0].split("")
      firstWord[0]=firstWord[0].toUpperCase()
      arrLower[0]=firstWord.join("")
      console.log(firstWord)
      
     arrLower=arrLower.join(" ")
    return arrLower
}