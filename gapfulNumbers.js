// Gapful Numbers
// A gapful number is a number of at least 3 digits that is divisible by the number formed by the first and last digit of the original number.
// For Example:
// Input: 192
// Output: true (192 is gapful because it is divisible 12)
// Input: 583
// Output: true (583 is gapful because it is divisible by 53)
// Input: 210
// Output: false (210 is not gapful because it is not divisible by 20)
// Write a program to find all the gapful numbers in a given range. (edited) 

/* PSEUDOCODE
1. Turn number into string with toString()
2. Split that string to separate out each digit in the number with string.split()
3. Get the first and last digits from that array of characters of each digit and add the two string characters together with 
arrayString[0] + arrayString[arrayString.length() - 1]
4. Turn that first and last digit string into a number with parseFloat(stringDigits)
5. Make an if statement, with modulo division of the number by the first and last digit number. If number % firstAndLastDigit == 0 return true. otherwise,
return false. 
*/

const gapfulNum = (n) => {
    let strNum = n.toString();
    let eachNumChar = strNum.split('');
    let firstAndLastNum = parseInt(eachNumChar[0] + eachNumChar[eachNumChar.length - 1])
    // console.log(typeof firstAndLastNum);
    if (n % firstAndLastNum == 0) {
      return true;
    }
    return false;
}

console.log(gapfulNum(192)) // true
console.log(gapfulNum(583)) // true
console.log(gapfulNum(210)) // false