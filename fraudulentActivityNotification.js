/* Pseudocode:
- Declare a pointer called checkDayIdx and set it equal to input d
- Declare a pointer called startPriceIdx and set it equal to 0
- Declare a pointer called endPriceIdx and set it equal to checkDayIdx-1
- Declare a variable called notify and initialize it to 0
- While checkDayIdx is less than input expenditure array length 
    - Make a for loop starting at startPriceIdx and ending at less than or equal to endPriceIdx and push it into a new array call it
    expenditureWindow
    - sort the expenditureWindow array and if it's length is odd (array length % 2 is 1) then get the element from middle by getting the 
    Math.floor of half the array length times 2 and store it as medianCutoff. Otherwise (if length is even) get the sum of element from 
    expenditureWindow array from the length divided by 2 index + index from length divided by 2 minus 1 and store it as medianCutoff
    - Outside for loop, check if element from input expenditure array from checkDayIdx index is more than or equal to meidanCutoff 
    then increment notify by 1.
    - re-set expenditureWindow array back to empty array
    - increment checkDayIdx by 1
    - Increment startPriceIdx by 1 so for loop will start the next iteration of expenditure numbers 

 */

function activityNotifications(expenditure, d) {
    let checkDayIdx = d;
    let startPriceIdx = 0;
    let notify = 0;
    let medianCutoff;

    while (checkDayIdx < expenditure.length) {
        let endPriceIdx = checkDayIdx - 1
        let expenditureWindow = [];        
        
        console.log('checkDayIdx', checkDayIdx);
        
        
        for (let i = startPriceIdx; i <= endPriceIdx; i++) {
            expenditureWindow.push(expenditure[i]);
        };
        expenditureWindow.sort((a, b) => a-b);
        console.log('expenditureWindow', expenditureWindow);

        // if odd num days
        if (expenditureWindow.length % 2 == 1) {
            medianCutoff = expenditureWindow[Math.floor(expenditureWindow.length / 2)] * 2;
        };

        // if even num of days
        if (expenditureWindow.length % 2 == 0) {
            medianCutoff = expenditureWindow[expenditureWindow.length / 2] + expenditureWindow[(expenditureWindow.length / 2) -1]
        };
        console.log('medianCutoff', medianCutoff);

        if ( expenditure[checkDayIdx] >= medianCutoff ) {
            notify++;
        };

        checkDayIdx++;
        startPriceIdx++;
        expenditureWindow = [];
        medianCutoff = 0;
    };

    return notify;

};

console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5));  // 2
console.log(activityNotifications([1, 2, 3, 4, 4], 4));  // 0