/*Caesar Box is a simple transposition cipher used in the Roman Empire, in which characters of the given message are broken into multiple lines 
that form a square when stacked up and then read the square column by column.
Given a message, encode it.
Example
For inputString = "a message", the output should be
caesarBoxCipherEncoding(inputString) = "aea sgmse".
The square will look as follows:
a m
ess
age
Thus, the encoded message will be aea sgmse.
Input/Output
[input] string inputString
A string of length n2 for some integer n.
Guaranteed constraints:
1 ≤ inputString.length ≤ 16.
[output] string
Test Cases:
1:
Input: inputString: "a message"
Expected Output: "aea sgmse"
2:
Input: inputString: "sixteenletters16"
Expected Output: "seerietsxnt1tle6"
 */

// My solution:
/*Pseudocode:
1. Get the length of the input string, set it equal to variable called len
2. Square root the length of input string using Math.sqrt method, set it to a variable called maxLen
3. Declare a variable called matrix and set it equal to empty array.
4. Make a for loop, starting at index i of 0 ending at less than maxLen and increment.
5. Inside for loop, push empty array into the matrix array for each iteration of the for loop.
6. Make a nested for loop, starting at index j of 0 and ending at less than maxLen and increment.
7. Inside inner for loop, push empty string into inner arrays for each iteration of inner for loop. 
8. Split the input string inpStr and set it to a variable called splitStr which will be an array.
9. Declare a pointer variable called outerIndex and set it to 0.
10. Declare a pointer variable called innerIndex and set it to 0.
11. Make a while loop of while length of splitStr array is more than 0, 
12. In while loop, take out the first element from the splitStr array using array shift method and put it into the matrix index at outerIndex then
innerIndex
13. Still in while loop, increment innerIndex by 1.
14. Make an if statement of if innerIndex reaches for than maxLen minus 1 then increment outerIndex by 1 and re-set innerIndex back to 0.
15. Outside while loop, reset outerIndex and innerIndex back to 0. 
16. Declare an empty string and set it to a variable called finalStr.
17. Make another while loop of while finalStr length is less than len, set finalStr to plus equal the letter from matrix at outerIndex then
innerIndex then increment outerIndex.
18. Make an if statement of if outerIndex reaches more than maxLen minus 1 then re-set outerIndex to 0 and increment innerIndex by 1.
19. Return finalStr.

 */

let caesarBox = inpStr => {
    let len = inpStr.length;
    let maxLen = Math.sqrt(len);
    // console.log(maxLen);
    let matrix = [];

    for (let i = 0; i < maxLen; i++) {
        matrix.push([]);

        for (let j = 0; j < maxLen; j++) {
            matrix[i].push('');
        }
    };

    // console.log(matrix);
    let splitStr = inpStr.split('');
    // console.log(splitStr);

    let outerIndex = 0;
    let innerIndex = 0;

    while (splitStr.length > 0) {
        matrix[outerIndex][innerIndex] += splitStr.shift();
        innerIndex++;
        if (innerIndex > maxLen -1) {
            outerIndex++;
            innerIndex = 0;
        };
    };
    // console.log(matrix);
    outerIndex = 0;
    innerIndex = 0;
    // console.log('outerIndex', outerIndex);
    // console.log('innerIndex', innerIndex);
    let finalStr = '';

    while (finalStr.length < len) {
        finalStr += matrix[outerIndex][innerIndex];
        outerIndex++;
        if (outerIndex > maxLen - 1) {
            outerIndex = 0;
            innerIndex++;
        };
    };
    return finalStr;
};


// caesarBox('a message');
console.log(caesarBox('a message'));    // "aea sgmse"
console.log(caesarBox("sixteenletters16"));    // "seerietsxnt1tle6"