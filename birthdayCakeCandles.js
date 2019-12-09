/*
You are in charge of the cake for your niece's birthday and have decided the cake
will have one candle for each year of her total age. When she blows out the candles,
she’ll only be able to blow out the tallest ones. Your task is to find out how many
candles she can successfully blow out.
​
For example, if your niece is turning 4 years old, and the cake will have 4 candles
of height 4, 4, 1, 3, she will be able to blow out 2 candles successfully, since the
tallest candles are of height 4 and there are 2 such candles.
*/
​
function birthdayCakeCandles(ar) {
  // two functions
  // max- get biggest number in array
  // count- find how many "max"es
  // return count
  let count = 0;
  const max = Math.max(...ar); // O(n)
  for (let el of ar) {
    // O(n)
    if (el === max) count++;
  }
  return count;
}
​
function birthdayCakeCandles2(ar) {
  // hashtable of max and count - accum
  // keep track of sum
  // keep track of max
  // if see max, increment count
  let res = ar.reduce(
    (d, v) => {
      if (v > d.max) {
        d.max = v;
        d.count = 1;
      } else if (d.max == v) {
        d.count++;
      }
      return d;
    },
    { max: 0, count: 0 },
  );
  return res.count;
}
​
function birthdayCakeCandles3(ar) {
  let maxHeight = 0;
  let numberOfCandles = 0;
​
  for (let i = 0; i < ar.length; i++) {
    let candle = ar[i];
    if (candle > maxHeight) {
      maxHeight = candle;
      numberOfCandles = 1;
    } else if (candle == maxHeight) {
      numberOfCandles++;
    }
  }
  return numberOfCandles;
}
​
function birthdayCakeCandles4(ar) {
  return ar.filter(el => el == Math.max(...ar)).length;
}
​
console.log(birthdayCakeCandles4([3, 2, 1, 3])); // 2
console.log(birthdayCakeCandles4([3, 4, 2, 1, 3, 4, 1, 2, 4])); // 3
