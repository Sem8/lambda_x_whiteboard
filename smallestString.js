/* Write a function that takes two strings and returns the "smallest" string. If both strings are equal, you may return either string. Strings
will only consist of lowercase letters and numbers: [a - z][0 - 9]. Letters earlier in the alphabet are considered smaller. Consecutive digits 
in the string should be considered a single number.

Examples:

input: "a", "b"
expected output: "a" since "a" comes before "b" alphabetically 

input: "a1", "a2"
expected output: "a1" since 1 comes before 2

input: "a10", "a2"
expected output: "a2" since 2 comes before 10  */

// My solution:
    // Set a pointer called idx and initialize it to 0
    // Initialize an empty string call it str1Num, intialize another empty string call it str2Num
    // Go through each input string at given index of idx and if they are not numbers using isNaN method and one is bigger than the other then
    // return the bigger one, otherwise, increment idx by 1
    // if a character at idx index is a number at str1 then add it to str1Num and increment idx, same for str2 just add it to str2Num
    // if str1Num turned into integer using parseInt method is bigger than str2Num turned into integer then return str1Num otherwise return
    // str2Num
/*Pseudocode:
1. Make an if statement of if input string str1 is equal to input string str2 then just return str1.
2. Declare a variable called idx and initialize it to 0 (this will serve as index pointer)
3. Initialize an empty string call it str1Num, and initialize another empty string call it str2Num (they will hold 1st set of numbers from 
    respective input strings).
4. Make a while loop of while input string str1 and str2 are not numbers at current index of idx using the isNaN method (they're letters)
5. Inside while loop, make an if statement of if current letter at current index idx in input str1 is less than that in input str2 then return str1
6. Still inside while loop, make an else if statement of if current letter at current index idx in input str1 is more than that in input str2 then
return str2
7. Still inside while loop, make an else statement (if current letter at current index, idx in input str1 and str2 is the same) then increment
index pointer idx by 1
8. Outside previous while loop, make a new while loop of while current character at current index idx from input string str1 or str2 is a number
(isNaN of current character is false) then add the current character from str1 to str1Num and add the current character from str2 to str2Num
then incement idx by 1
9. Outside while loop, make an if statement of if number version of str1Num using parseInt method is less than number version of str2Num
then return str1.
10. Outside previous if statement, make another if statement of if number version of str1Num using parseInt method is more than number version of
str2Num then return str2.
11. Make an else statement (if both numbers are equal), increment idx by 1 
 */

const smallestString = (str1, str2) => {
  if (str1 === str2) {
    return str1;
  };

  let idx = 0;
  let str1Num = "";
  let str2Num = "";

  while (isNaN(str1[idx]) && isNaN(str2[idx])) {
    if (str1[idx] < str2[idx]) {
      return str1;
    } else if (str1[idx] > str2[idx]) {
      return str2;
    } else {
      idx++;
    };
  };


  while (isNaN(str1[idx]) == false || isNaN(str2[idx]) == false) {
    str1Num += str1[idx];
    str2Num += str2[idx]
    idx++;
  };
// console.log('str1Num: ', parseInt(str1Num));
// console.log('str2Num: ', parseInt(str2Num));

  if (parseInt(str1Num) < parseInt(str2Num)) {
    return str1;
  }
  if (parseInt(str1Num) > parseInt(str2Num)) {
    return str2;
  }
//   else {
//       idx++;
//     // smallestString(str1, str2, idx)    
//   }
};

/*Console.log tests */

console.log(smallestString("a", "b"));      // a
console.log(smallestString("a1", "a2"));    // a1
console.log(smallestString("a10", "a2"));   // a2
console.log(smallestString("abc123a", "abc123b"));  // should print "abc123a"
console.log(smallestString("9876", "987"));         // should print "987"

// smallestString("a10", "a2")

// console.log(isNaN('a'));
