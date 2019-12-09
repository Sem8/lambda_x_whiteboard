/*
  https://www.hackerrank.com/challenges/count-triplets-1/problem
  
  You are given an array and you need to find number of tripets of indices 
  (i, j, k) such that the elements at those indices are in geometric
  progression for a given common ratio r and i < j < k.
​
  For example, arr = [1, 4, 16 ,64]. If r = 4, we have [1, 4, 16] and [4, 16 ,64]
  at indices (0, 1, 2) and (1, 2, 3).
​
  Complete the countTriplets function in the editor below. It should return the
  number of triplets forming a geometric progression for a given  as an integer.
​
  countTriplets has the following parameter(s):
​
  arr: an array of integers
  r: an integer, the common ratio
​
  Return the count of triplets that form a geometric progression.
*/
​
function countTriplets(arr, r) {
  let count = 0;
  let pairObj = {};
  let tripleObj = {};
​
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    const nextNumber = number * r;
    // do we have a triple? if yes, count++
    if (tripleObj[number]) {
      count += tripleObj[number];
    }
    // do we have a pair?
    if (pairObj[number]) {
      tripleObj[nextNumber] = tripleObj[nextNumber]
        ? tripleObj[nextNumber] + pairObj[number]
        : pairObj[number];
    }
    // given the initial value, make the pair
    pairObj[nextNumber] = pairObj[nextNumber] ? pairObj[nextNumber] + 1 : 1;
  }
  return count;
}
​
const arr = [1, 2, 2, 4]; // 1, 2, 4
const r = 2;
const arr2 = [1, 3, 9, 9, 27, 81];
const r2 = 3;
​
console.log(countTriplets(arr, r)); // 2
// console.log(countTriplets(arr2, r2)); // 6