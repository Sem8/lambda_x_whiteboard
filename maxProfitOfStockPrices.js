/* You will be given a list of stock prices for a given day and your goal is to return the maximum profit that could have been made by
buying a stock at the given price and then selling the stock later on. For example if the input is: [45, 24, 35, 31, 40, 38, 11] 
then your program should return 16 because if you bought the stock at $24 and sold it at $40, a profit of $16 was made and this is 
the largest profit that could be made. If no profit could have been made, return -1. 
*/
/* Solution 1 pseudocode:
1) Make sure there are at least 2 prices in the price input array. Otherwise, throw error
2) Get the first price from the prices array at the 0th index, set it to a variable called minPrice
3) Get the difference between the second array item price and the first array item price and set it to a variable called maxProfit
4) Loop through the array w/ for loop starting at index 1 b/c we have to buy first before selling and we can't buy and sell at index 0
at the same time.
5) Get the price integer at the current index and set it to a variable called currentPrice.
6) Get the difference between the price at current index and the minimum Price which for the first iteration the minimum price will be
the first array item price. And set that difference to a variable called potentialProfit.
7) get the Maximum value between the previously set maxProfit (difference b/t second and first array items in iteration 1) and the 
newly set potential profit (difference between array item @ current index and the first array item for first iteration).
8) Get the minimum value between the previously set minimum value (first array item in iteration 1) and the current array item. So, if
current array item is less than the first array item then the current array item will be the new minimum price.
9) After for loop finishes make if statement where if maxProfit is less than 0 then return 0, otherwise return maxProfit.  
*/

const getMaxProfit = stockPricesArr => {
  if (stockPricesArr.length < 2) {
    throw new Error('Not enough stock prices');
  }

  let minPrice = stockPricesArr[0];
  let maxProfit = stockPricesArr[1] - stockPricesArr[0];

  for (let i = 1; i < stockPricesArr.length; i++) {
    let currentPrice = stockPricesArr[i];
    let potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }

  if (maxProfit < 0) {
    return 0;
  }
  return maxProfit;
}

// Solution 1:
// function getMaxProfit(stockPrices) {
//   //Have a check to make sure at least two numbers in the array of stockPrices here:
// if (stockPrices.length < 2) {
//   throw new Error('Not enough stockPrices')
// }
//   // initialize minPrice and maxProfit to the first price(index zero) and the first possible profit here:
//  let minPrice = stockPrices[0]
//  let maxProfit = stockPrices[1] - stockPrices[0]
// //loop through the array to check current price
// // Start at the second (index 1) time
//   // We can't sell at the first time, since we must buy first,
//   // and we can't buy and sell at the same time!
//   // If we started at index 0, we'd try to buy *and* sell at time 0.
//  // See what our profit would be if we bought at the min price and sold at the current price
//   // Update maxProfit if we can do better
//   // Update minPrice so it's always the lowest price we've seen so far
//   for (let i = 1; i < stockPrices.length; i++) {
//   let currentPrice = stockPrices[i]
//   const potentialProfit = currentPrice - minPrice;
//   maxProfit = Math.max(maxProfit, potentialProfit);
//   minPrice = Math.min(minPrice, currentPrice)
//   }
//   if (maxProfit < 0 ) {
//     return 0
//   } else return maxProfit;
// }

// const stockPrices = [12, 9, 8, 7];
// console.log(getMaxProfit(stockPrices));
// console.log(getMaxProfit([45, 24, 35, 31, 40, 38, 11]))

// Solution 2: Less efficient with O(n^2) time complexity
/* Solution 2 pseudocode
1. Initialize a maxProfit variable and set it equal to 0
2. loop through the array, starting at first element, ending at one element before last (because second for loop ends at last element)
3. Make a second inner for loop inside the first for loop, this time starting at second array element (index 1) and end at last element
4. Get the difference between the current element in the inner loop minus the element before current from the outer loop.
5. If difference between inner loop current element and element before current from outer loop is greater than maxProfit, reset
current maxProfit to this difference. 
6. Return maxProfit outside for loop.
 */

const getMaxProfit = stockPricesArr => {
  if (stockPricesArr.length < 2) {
    throw new Error('Not enough stock prices to get any profit');    
  }

  let maxProfit = 0;

  for (let i = 0; i < stockPricesArr.length -1; i++) {
    for (let j = i+1; j < stockPricesArr.length; j++) {
      if (stockPricesArr[j] - stockPricesArr[i] > maxProfit) {
        maxProfit = stockPricesArr[j] - stockPricesArr[i];
      }
    }
  }
  return maxProfit;
}

// function getMaxProfit(stockPrices) {
//   //Have a check to make sure at least two numbers in the array of stockPrices here:
//   if (stockPrices.length < 2) {
//     throw new Error("Not enough stockPrices");
//   }
//   // initialize minPrice and maxProfit to the first price(index zero) and the first possible profit here:
//   let maxProfit = 0;
//   //loop through the array to check current price
//   // Start at the second (index 1) time
//   // We can't sell at the first time, since we must buy first,
//   // and we can't buy and sell at the same time!
//   // If we started at index 0, we'd try to buy *and* sell at time 0.
//   // See what our profit would be if we bought at the previous price and sold at the current price
//   // Update maxProfit if we can do better
//   for (let i = 0; i < stockPrices.length - 1; i++) {
//     for (let j = i + 1; j < stockPrices.length; j++) {
//       if (stockPrices[j] - stockPrices[i] > maxProfit) {
//         maxProfit = stockPrices[j] - stockPrices[i];
//       }
//     }
//   }
//   return maxProfit;
// }
const stockPrices = [14, 12, 10, 8];
console.log(getMaxProfit(stockPrices));
console.log(getMaxProfit([45, 24, 35, 31, 40, 38, 11]))
