// find the longest common prefix of all array elements.
// Ex. ["internetly", "internet", "internets"] --> 'internet'
// Ex. ["a", "c", "b"] --> ''

// 1st solution O(n)
// const longestCommonPrefix = (arr) => {
//     let sortedArr = arr.sort();

//     let firstArrElem = arr[0];
//     let lastArrElem = sortedArr[sortedArr.length - 1];
//     let firstArrElemLength = firstArrElem.length;

//     let i = 0;
//     while (i < firstArrElemLength && firstArrElem.charAt(i) === lastArrElem.charAt(i)) {
//         i++;
//     }
//     return firstArrElem.substring(0, i);
// };

// 2nd solution O(n^2):
const longestCommonPrefix = (arr) => {
    
}

console.log(longestCommonPrefix(["internetly", "internet", "internets"]));
console.log(longestCommonPrefix(['a', 'b', 'c', 'd']));
console.log(longestCommonPrefix(['pre', 'present', 'pregnant']))