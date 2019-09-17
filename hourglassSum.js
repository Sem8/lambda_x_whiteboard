// Thomoas Greenhalgh solution
function hourglassSum(arr) {
    let sum = 0;
    let maxSum = -64;
  
    // i is the row
    for (let i = 0; i < arr.length - 2; i++) {
      let firstRow = arr[i];
      let secondRow = arr[i + 1];
      let thirdRow = arr[i + 2];
      // j is the column
      for (let j = 0; j < firstRow.length - 2; j++) {
        sum = firstRow[j] + firstRow[j + 1] + firstRow[j + 2];
        sum += secondRow[j + 1];
        sum += thirdRow[j] + thirdRow[j + 1] + thirdRow[j + 2];
        maxSum = Math.max(maxSum, sum);
      }
      sum = 0;
    }
    return maxSum;
  }
  /* prettier-ignore */
  const arr = [[1, 1, 1, 0, 0, 0],[0, 1, 0, 0, 0, 0],[1, 1, 1, 0, 0, 0],[0, 0, 2, 4, 4, 0],[0, 0, 0, 2, 0, 0],[0, 0, 1, 2, 4, 0],
  ];
  console.log(hourglassSum(arr)); // 19
  

// Will Connatser solution
function hourglassSum(arr) {
    let maxHourglass = -Infinity
    for(let row = 0; row < arr.length-2; row++) {
        for(let column = 1; column < arr[row].length-1; column++) {
            const hourglass =
            arr[row][column-1] + arr[row][column] + arr[row][column+1]
            + arr[row+1][column]
            + arr[row+2][column-1] + arr[row+2][column] + arr[row+2][column+1]

            if (hourglass > maxHourglass) maxHourglass = hourglass
        }
    }
    return maxHourglass
}
