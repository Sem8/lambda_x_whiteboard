// Complete the countApplesAndOranges function below.
// url: https://www.hackerrank.com/challenges/apple-and-orange/problem
function countApplesAndOranges(houseStart, houseEnd, appleTree, orangeTree, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    for(let i = 0; i < apples.length; i++){
      const appleLoc = appleTree + apples[i];
      if(appleLoc >= houseStart && appleLoc <= houseEnd){
          appleCount++
      }
    }

    for(let i = 0; i < oranges.length; i++){
      const orangeLoc = orangeTree + oranges[i];
      if(orangeLoc >= houseStart && orangeLoc <= houseEnd){
          orangeCount++
      }
    }
    return [appleCount,orangeCount];
}

//Test
//house is between 7 and 10.

countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4])
// console.log()