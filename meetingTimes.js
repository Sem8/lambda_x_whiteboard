/*Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur, returns the 
earliest time slot that works for both of them and is of duration dur. If there is no common time slot that satisfies the duration requirement, 
return an empty array.
Time is given in a Unix format called Epoch, which is a nonnegative integer holding the number of seconds that have elapsed since 00:00:00 UTC, 
Thursday, 1 January 1970.
Each person’s availability is represented by an array of pairs. Each pair is an epoch array of size two. The first epoch in a pair represents 
the start time of a slot. The second epoch is the end time of that slot. The input variable dur is a positive integer that represents the 
duration of a meeting in seconds. The output is also a pair represented by an epoch array of size two.
In your implementation assume that the time slots in a person’s availability are disjointed, i.e, time slots in a person’s availability don’t 
overlap. Further assume that the slots are sorted by slots’ start time.

Examples
input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 8
output: [60, 68]

input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 12
output: [] # since there is no common slot whose duration is 12 */

// My solution:
// Keep a pointer index for slotB like idxB initialized to 0.
// Make a for loop to loop thru slotA matrix.
// Inside for loop, check if start time of slotA at idxB in slotB is equal or more and if start time of slotA is less than end time of slotB,
// if so, then check if start time of slotA minus end time of slotB is more than or equal to input dur then return in new array, larger start
// time and end time of start time plus durattion
// Otherwise increment idxB by 1

/*Pseudocode:
 */

const meetingTimes = (slotA, slotB, dur) => {
  let idxB = 0;
  let idxA = 0;
  while (idxA < slotA.length && idxB < slotB.length) {
    if (slotA[idxA][1] - slotA[idxA][0] < dur) {
      idxA++;
    };

    if (slotB[idxB][1] - slotB[idxB][0] < dur) {
      idxB++;
    };

    if (!slotB[idxB] || !slotA[idxA]) {
      return [];
    };

    if (slotA[idxA][0] >= slotB[idxB][0] && slotB[idxB][1] > slotA[idxA][0]) {
      if (slotB[idxB][1] - slotA[idxA][0] >= dur) {
        return [slotA[idxA][0], slotA[idxA][0] + dur];
      }
      idxB++;

    } else {
      idxA++;
    };
  };

  return [];
};

/* Console.log tests */
console.log(
  meetingTimes(
    [
      [10, 50],
      [60, 120],
      [140, 210]
    ],
    [
      [0, 15],
      [60, 70]
    ],
    8
  )
); // should print [60, 68]

console.log(
  meetingTimes(
    [
      [10, 50],
      [60, 120],
      [140, 210]
    ],
    [
      [0, 15],
      [60, 72]
    ],
    12
  )
); // should print [60, 72]

console.log(
  meetingTimes(
    [
      [10, 50],
      [60, 120],
      [140, 210]
    ],
    [
      [0, 15],
      [60, 70]
    ],
    12
  )
); // should print []

console.log(
  meetingTimes(
    [
      [0, 5],
      [50, 70],
      [120, 125]
    ],
    [[0, 50]],
    8
  )
); // should print []
// meetingTimes([[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]], 8);
