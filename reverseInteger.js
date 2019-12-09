//Given an integer, return an integer that is the reverse ordering of numbers

// reverseInt(21) === 12
// reverseInt(791) === 197
// reverseInt(200) === 2
// reverseInt(-50) === -9

// function reverseInt(integer) {
//   const reversed = integer.toString().split('').reverse().join('');
//   return parseInt(reversed) * Math.sign(integer);
// }



// function reverseInt(integer){
//   let numString = integer.toString(10);
//   let revString = '';

//   let negative = false;

//   for(let i = 0; i < numString.length; i++){
//     if(numString[i] === '-'){
//       negative = true;
//     }
//     else{
//       revString = numString[i] + revString;
//     }
    
//   }

//   let resultNum = parseInt(revString);
//   if(negative){
//     resultNum *= -1;
//   }

//   console.log(resultNum);
//   console.log(typeof resultNum);

// }


function reverse(int){

    let reversed = 0
    while(int != 0) {
    let digit = int % 10;
    reversed = reversed * 10 + digit;
    int = Math.floor(int/10)
    }
    return reversed
    }
    
    
    console.log(reverseInt(123))
    console.log(reverseInt(-27))
    reverseInt(48294)
    
function reverseString(str) {
    return [...str].reduce((acc, char) => char +acc , '');
};
    
    
    
function reverseInt(integer) {
    let reversedInt = parseInt(reverseString(integer.toString()));

    return (reversedInt * Math.sign(integer));
};


/* A quick recap of how reduce is working */

function reverseString(str) {
    // [...str] converts str to an array ["1", "2", "3"]
    // accumulator starts as '', so when adding char + acc, it will concat the string
    // because char + acc, it is reversing the string
    // acc = '', char = 1 => char + acc == '1'
    // acc = '1', char = 2 => char + acc == '21'
    // acc = '21', char = 3 => char + acc == '321'
    return [...str].reduce((acc, char) => char + acc, '');
    }
    ​
    function reverseInt(integer) {
    let reversedInt = parseInt(reverseString(integer.toString()));
    ​
    return reversedInt * Math.sign(integer);
    }
    ​
    console.log(reverseInt(123));


/*reverseInt doesn’t work for negative numbers (I think when we tested it we accidentally ran the original function)
you need to change Math.floor to Math.trunc
Floor round down to the integer, which doesn’t give us what we want when the numbers are negative. Trunc gets rid of everything after the 
decimal. */

const reverseInt = int => {
    let reversed = 0;
    while (int != 0) {
        let digit = int % 10;
        reversed = reversed * 10 + digit;
        int = Math.trunc(int / 10);
    }
    return reversed;
    };

console.log(reverseInt2(-12345));