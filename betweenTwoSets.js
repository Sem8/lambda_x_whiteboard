/*
You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:

1. The elements of the first array are all factors of the integer being considered
2. The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. You must determine how many such numbers exist.
*/

// Arrays are sorted

function getTotalX(a, b) {
    // find last element of array a
    const lastElementA = a[a.length -1];
    // find first element of array b
    const firstElementB = b[0];
    // check every integer between a and b
    // check if each integer is divisible by elements in array a and push into temp array
    const arrTemp = [];
    for ( let i = lastElementA; i <= firstElementB; i++) {
      let flag = true;
      for ( const elementA of a ) {
        if (i % elementA !== 0) {
          flag = false;
        }
      }
      if (flag) {
        for ( const elementB of b ) {
        if (elementB % i !== 0) {
          flag = false;
        }
      }
        if (flag) {
          arrTemp.push(i);
        }
      }
    }
    return arrTemp.length;
    // check if each element array b is divisible by elements in temp array
  };
  
  // function leastCommonMult()
  
  // const a = [2, 4];
  // const b = [16, 32, 96];
  
  // console.log(getTotalX(a, b)); // Should return 3 with array [4, 8, 16]
  
  // const a = [3, 4];
  // const b = [24, 48];
  
  // console.log(getTotalX(a, b)); // Should return 2 with array [12, 24]