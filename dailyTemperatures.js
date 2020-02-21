/* Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you 
would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0]
 */

/* Pseudocode: My own solution
1. Set up a counter called dayCount and set it equal to 0.
2. Initialize an empty array, call it dayCountArr.
3. Set the last element of dayCountArr equal to 0 (last element will always be 0 since there are no other elements after it)
4. Make a for loop starting at index 0, ending at 2nd to last index of input array (we already set last element to 0)
5. In for loop, make a pointer, call the variable pointer and set it equal to i+1
6. In for loop, make an if statement, check if current element at pointer index is more than current element at current index of i
then insert the value of dayCount + 1 at current index i into the dayCountArr array. 
7. Else, if current element at pointer index is NOT more than current element at current index of i, make a while loop of while 
current element at pointer index is not more than current element at current index of i AND pointer is less than input array length - 1
(pointer has to stop at last element of input array) then increment pointer by 1 and increment 
dayCount by 1.
8. Outside while loop, make an if statement, check if current element at index of pointer is less than or equal to current element at index i 
then re-set dayCount back to 0 and set the value of dayCountArr at current index i to the value of dayCount which is 0. Re-set pointer back 
to i+1 (not necessary but seemed to save some time w/ run time complexity)
9. Else, (still inside outer else statement) if the element from input array at pointer index more than that at index of i then set the value of
dayCountArr array at index of i equal to dayCount + 1. Then re-set dayCount back to 0 and re-set pointer back to i + 1
10. Return the dayCountArr outside the for loop. 
 */

// var dailyTemperatures = function(T) {
//   let dayCountArr = [];
//   let dayCount = 0;

//   dayCountArr[T.length - 1] = 0;

//   for (let i = 0; i < T.length - 1; i++) {
//     let pointer = i + 1;

//     if (T[pointer] > T[i]) {
//       dayCountArr[i] = dayCount + 1;
//       dayCount = 0;
//     } else {
//       while (T[pointer] <= T[i] && pointer < T.length - 1) {
//         pointer++;
//         // console.log('i: ', i);
//         // console.log('T[i]: ', T[i]);
//         // console.log('pointer: ', pointer);
//         dayCount++;
//         // console.log('dayCount', dayCount);
//       }

//       if (T[pointer] <= T[i]) {
//         dayCount = 0;
//         dayCountArr[i] = dayCount;
//         pointer = i + 1;
//       } else {
//         dayCountArr[i] = dayCount + 1;
//         dayCount = 0;
//         // pointer = i+1
//       }
//     }
//   }

//   return dayCountArr;
// };

/* Slightly cleaned up version of my own solution */
var dailyTemperatures = function(T) {
  let dayCountArr = [];
  let dayCount = 0;
  dayCountArr[T.length - 1] = 0;

  for (let i = 0; i < T.length - 1; i++) {
    let pointer = i + 1;

    if (T[pointer] > T[i]) {
      dayCountArr[i] = dayCount + 1;
      // dayCount = 0;
    } else {
      while (T[pointer] <= T[i] && pointer < T.length - 1) {
        pointer++;
        dayCount++;
      }
      if (T[pointer] <= T[i]) {
        dayCount = 0;
        dayCountArr[i] = dayCount;
        pointer = i + 1;
      } else {
        dayCountArr[i] = dayCount + 1;
        dayCount = 0;
        pointer = i + 1;
      }
    }
  }

  return dayCountArr;
};

/* Fastest solution beats 94% fast solutions: */
var dailyTemperatures = function(T) {
    let result = new Array(T.length).fill(0);
    let stack = [0];
    
    for (let i = 1, len = T.length; i < len; i++) {
        console.log('i: ', i);
        console.log('T[i]: ', T[i]);
        while (stack.length && T[top(stack)] < T[i]) {
            result[top(stack)] = i - top(stack);
            stack.pop();
        }
        
        stack.push(i);
    }
    
    return result;
    
    function top(stack) {
        return stack[stack.length - 1];
    }
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
