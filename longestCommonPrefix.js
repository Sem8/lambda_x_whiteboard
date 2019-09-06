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
// const longestCommonPrefix = (strArr) => {
//     let longestPrefix = '';
//     if (strArr.length > 0) {
//         longestPrefix = strArr[0];
//     }
//     for (let i = 0; i < strArr.length; i++) {
//         for (let j = 0; j < longestPrefix.length; j++) {
//             if (strArr[i][j] != longestPrefix[j]) {
//                 longestPrefix = longestPrefix.slice(0, j);
//             }
//         }
//     }
//     return longestPrefix;
// }

// 3rd solution O(n^2):
const longestCommonPrefix = (strArr) => {
    if (strArr.length === 0) return '';
    if (strArr.length === 1) return strArr[0];

    let longestPrefix = '';
    let pointer = 0;
    let currentChar = '';
    let stillSearching = true;

    while (stillSearching) {
        currentChar = strArr[0][pointer];

        for (let i = 1; i < strArr.length; i++) {
            if (strArr[i][pointer] !== currentChar) stillSearching = false;
        }

        if (stillSearching) {
            longestPrefix += currentChar;
            pointer++;
        }
    }
    return longestPrefix;

}


console.log(longestCommonPrefix(["internetly", "internet", "internets"]));
console.log(longestCommonPrefix(['a', 'b', 'c', 'd']));
console.log(longestCommonPrefix(['pre', 'present', 'pregnant']))