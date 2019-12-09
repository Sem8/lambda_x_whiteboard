/*
  Given five positive integers, find the minimum and maximum values that can be
  calculated by summing exactly four of the five integers. Then print the respective
  minimum and maximum values as a single line of two space-separated long integers.
*/
​
// O(nLog n) solution
function miniMaxSum1(arr) {
  let min = 0;
  let max = 0;
  // sort array
  let newArr = arr.sort((a, b) => a - b); // O(nLog n)
  for (let i = 0; i < newArr.length - 1; i++) {
    // O(n)
    // min sum will be sum of first four elements
    min += newArr[i];
  }
  // max sum will be sum of last four elements
  for (let i = 1; i < newArr.length; i++) {
    // O(n)
    max += newArr[i];
  }
  return [min, max];
}
// O(nLog n) + O(n) + O(n) = O(nLog n) + O(2n) = O(nLog n) + O(n) = O(nLog n)
​
// O(n) solution
function miniMaxSum2(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
​
  for (let i = 0; i < arr.length; i++) { // O(n)
    let number = arr[i];
    min = Math.min(min, number);
    max = Math.max(max, number);
    sum += number;
  }
  let maxValue = sum - min;
  let minValue = sum - max;
  console.log(minValue, maxValue);
}
​
miniMaxSum2([7, 69, 2, 221, 8974]); // 299 9271

// Mark Oliver solution
function minMaxSum(arr) {
    let min = 100000
    let max = -100000
    for (let i=0;i<arr.length;i++) {
      // arr.splice(i,1)
      s = arr.reduce((s,v,I) => s+= i==I ? 0 : v)
      if (s > max) max = s
      if (s < min) min = s
    }
    return {min, max}
  }
  
  console.log(minMaxSum([7,69,2,221,8975]))
