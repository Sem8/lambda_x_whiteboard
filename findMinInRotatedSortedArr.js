/*Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
Find the minimum element. You may assume no duplicate exists in the array.
Example 1:
Input: [3,4,5,1,2] 
Output: 1 */

// Recursive JS solution
const findArrayPivot = function(arr, left, right) {
    // Find the midpoint between the indexes
    let midIndex = left + Math.floor((right - left) / 2);
    let minEl = arr[left];
    let maxEl = arr[right];
    let midEl = arr[midIndex];
    // If the min equals the mid we have found our pivot point
    if (minEl === midEl) {
      return right;
    } else if (midEl > maxEl) {
      // if the mid is greater than the end we know the pivot is in the right group
      return findArrayPivot(arr, midIndex, right);
    } else {
      // otherwise it's in the left group
      return findArrayPivot(arr, left, midIndex);
    }
  };
  // ----------------------------------------
  // -----          Tests
  // ----------------------------------------
  const arr1 = [4, 5, 6, 7, 8, 9, 10, 0, 1, 2];
  const arr2 = [10, 1, 2, 3, 4];
  const arr3 = [4, 5, 6, 1, 2, 3];
  // console.log(arr.length);
  console.log("\n\n");
  let pivot1 = findArrayPivot(arr1, 0, arr1.length - 1);
  console.log("Pivot1 index: " + pivot1);
  console.log("Pivot1 Min value: " + arr1[pivot1]);
  console.log("----");
  let pivot2 = findArrayPivot(arr2, 0, arr2.length - 1);
  console.log("Pivot2 index: " + pivot2);
  console.log("Pivot2 Min value: " + arr2[pivot2]);
  console.log("----");
  let pivot3 = findArrayPivot(arr3, 0, arr3.length - 1);
  console.log("Pivot3 index: " + pivot3);
  console.log("Pivot3 Min value: " + arr3[pivot3]);
  