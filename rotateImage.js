// Lambda X Eric Todd solution:
// Given an image represented by an `NxN` matrix, where each pixel in the image is an integer from 0 to 9, write a function `rotateImage`
// that rotates the image by 90 degrees in the counter-clockwise direction.

//Plan of Attack
// Have a generic formula to find out the position of each number.
// Need row and col of the array
// Flip the positions in matrix ex. x,y= y,-x

// function rotateImage(arr) {
//   o = []
//   const l = arr.length
//   const w = arr[0].length
//   // console.log(l,w)
//   for (let x=0;x<w;x++) {
//     o[x] = new Array(l)
//     for (let y=0;y<l;y++) {
//       o[x][y] = arr[y][x]
//     }
//   }
//   return o
// }

function rotateImage(arr) {
  let outerEnd = arr.length - 1; // # rows
  let innerStart = 0;
  const result = Array.apply(null, new Array(arr.length)).map(a => {
    return Array.apply(null, new Array(arr[0].length)).map(a => null);
  });

  for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < arr[0].length; x++) {
      result[outerEnd][innerStart] = arr[i][x];
      outerEnd--;
    }
    outerEnd = arr.length - 1;
    innerStart++;
  }

  return result;
}

// console.log(rotateImage([
//              [1, 2],
//              [3, 4]
//            ]));
// should return
// [
//   [2, 4],
//   [1, 3]
// ]

console.log(
  rotateImage([
    //innerStart  //innerEnd
    /* outerStart */ [1, 1, 5, 9, 9],
    [2, 2, 6, 0, 0],
    [3, 3, 7, 1, 1],
    [4, 4, 8, 2, 2],
    /* outerEnd */ [5, 5, 9, 3, 3]
  ])
);
// should return
// [
//   [ 9, 0, 1, 2, 3 ],
//   [ 9, 0, 1, 2, 3 ],
//   [ 5, 6, 7, 8, 9 ],
//   [ 1, 2, 3, 4, 5 ],
//   [ 1, 2, 3, 4, 5 ]
// ]

// Mark Oliver solution:
function rotateImage(arr) {
  o = [];
  const l = arr.length;
  const w = arr[0].length;
  // console.log(l,w)
  for (let x = 0; x < w; x++) {
    o[x] = new Array(l);
    for (let y = 0; y < l; y++) {
      o[x][y] = arr[y][x];
    }
  }
  return o;
}

console.log(
  rotateImage([
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [9, 0, 1, 2, 3],
    [9, 0, 1, 2, 3]
  ])
);
