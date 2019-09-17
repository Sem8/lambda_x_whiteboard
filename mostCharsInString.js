// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const strArr = str.split('')
    let letterCount = {}
    let max = 0
    let key = ''
  
    for(let i = 0; i < strArr.length; i++){
      if(letterCount[strArr[i]]){
        letterCount[strArr[i]] += 1 
      } else {
        letterCount[strArr[i]] = 1
      }
      if(letterCount[strArr[i]] > max){
        max = letterCount[strArr[i]]
        key = strArr[i]
      }
    }
  
    return key
  
  }