/*Given pointers to the head nodes of  linked lists that merge together at some point, find the Node where the two lists merge. It is 
guaranteed that the two head Nodes will be different, and neither will be NULL.

In the diagram below, the two lists converge at Node x:

[List #1] a--->b--->c
                     \
                      x--->y--->z--->NULL
                     /
     [List #2] p--->q
Complete the int findMergeNode(SinglyLinkedListNode* head1, SinglyLinkedListNode* head2) method so that it finds and returns the data value 
of the Node where the two lists merge. 
*/

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

// My solution: time complexity - O(3n) - Only passed the sample test cases but not all edge cases in hackerrank
/*Pseudocode:
1. Declare a variable called nodeA and set it equal to headA
2. Declare a variable called nodeB and set it equal to headB
3. Declare an empty object, call it nextNodeVal.
3. Make a while loop of while nodeA.next exists 
4. Inside while loop, make an if statement of if nodeA.next.data doesn't exist in nextNodeVal object as a key then put it there as a key with
value of 0
5. Otherwise (if nodeA.next.data does exist as a key in nextNodeVal object) then just increment the value by 1 (this'll automatically increment
the value from 0 to 1 in the first iteration, since the key is now set with a valid value)
6. Move to the next node by setting nodeA to nodeA.next
7. Outside previous while loop, do the same while loop and if statement logic for nodeB, make a 2nd while loop of while nodeB.next exists.
8. Inside 2nd while loop, make an if statement of if nodeB.next.data doesn't exist in nextNodeVal object as a key then put it there as a key
with value of 0
9. Otherwise, (if nodeB.next.data does exist as a key in nextNodeVal object) then just increment the value by 1 (again this'll automatically
increment value from 0 to 1 since the key now exists).
10. Outside while loop, loop through the nextNodeVal object with for in loop naming each key as nextVal
11. Inside for in loop, make an if statement of if value of nextVal key in the nextNodeVal object is 2 then return that value
 */

// function findMergeNode(headA, headB) {
//   let nodeA = headA;
//   let nodeB = headB;
//   let nextNodeVal = {};

//   while (nodeA.next) {
//     if (!nextNodeVal[nodeA.next.data]) {
//       nextNodeVal[nodeA.next.data] = 0;
//     }
//     nextNodeVal[nodeA.next.data]++;
//     nodeA = nodeA.next;
//   }
//   while (nodeB.next) {
//     if (!nextNodeVal[nodeB.next.data]) {
//       nextNodeVal[nodeB.next.data] = 0;
//     }
//     nextNodeVal[nodeB.next.data]++;
//     nodeB = nodeB.next;
//   }
//   // console.log(nextNodeVal);
//   for (let nextVal in nextNodeVal) {
//     if (nextNodeVal[nextVal] === 2) {
//       return nextVal;
//     }
//   }
// };

// Hackerrank suggested Solution 1: Time complexity - O(2n) in worst case
/* Pseudocode:
1. Declare a variable called nodeA which will be a pointer to headA input.
2. Declare a variable called nodeB which will be a pointer to headB input.
3. Initialize an empty array, call it arr.
4. Make a while loop of while nodeA exists
5. Inside previous while loop, push the current node at current iteration, nodeA into the arr array and then set nodeA to nodeA.next to move
through the linked list
6. Outside previous while loop, make another while loop of while nodeB exists
7. Inside this 2nd while loop make an if statement of if nodeB exists in the arr array using array includes method then declare break to end
the while loop.
8. Otherwise, (if the current node at current iteration does not exist in the arr array from includes method) then go on to the next node by
setting nodeB to nodeB.next
8. Outside the above while statement, return the nodeB.data which stopped at the node where it existed in the array of nodes from first headA
linked list   
 */
// function findMergeNode(headA, headB) {
//   let nodeA = headA;
//   let nodeB = headB;
//   let arr = [];

//   while (nodeA) {
//     arr.push(nodeA);
//     nodeA = nodeA.next;
//   };

//   while (nodeB) {
//     if (arr.includes(nodeB)) {
//       break;
//     };
//     nodeB = nodeB.next;
//   };
//   return nodeB.data;
// };

// Hackerrank suggested solution 2:  Time complexity O(n)
/*Pseudocode:
1. Declare a variable called nodeA and set it equal to input headA so it'll serve as a pointer for headA and 1st linked list
2. Decalre a variable called nodeB and set it equal to input headB so it'll serve as a pointer to headB and to 2nd linked list.
3. Make a while loop of while nodeA does not equal equal nodeB
4. Inside while loop, make an if statement of if nodeA.next equals equals null (we've reached end of linked list A) then reset nodeA pointer
to headB (start from second linked list now).
5. Else (if we haven't reached end of linked list A yet) then set nodeA to nodeA.next to move through the linked list.
6. Outside else statement, make another if statement, check if nodeB.next equals equals null (we have reached end of linked list B first) then
reset linked list B pointer nodeB to headA (to start iterating through the other linked list).
7. Else (if we haven't reached end of linked list B yet) then set nodeB to nodeB.next to iterate through linked list B. The while loop will 
stop as soon as a node from first linked list equals a node from the 2nd nodeB linked list
8. Outside while loop, return nodeB.data to return the node where the while loop broke when the node from both linked lists became equal
 */

function findMergeNode(headA, headB) {
    let nodeA = headA;
    let nodeB = headB;

    while (nodeA !== nodeB) {
        if (nodeA.next == null) {
            nodeA = headB;
        } else {
            nodeA = nodeA.next;
        };

        if (nodeB.next == null) {
            nodeB = headA;
        } else {
            nodeB = nodeB.next;
        };
    };
    return nodeB.data;
};

let a = new SinglyLinkedList();
a.insertNode(1);
a.insertNode(2);
a.insertNode(3);
let b = new SinglyLinkedList();
b.insertNode(1);
b.insertNode(a.head.next.data);

let c = new SinglyLinkedList();
c.insertNode(1);
c.insertNode(2);
c.insertNode(3);
let d = new SinglyLinkedList();
d.insertNode(1);
d.insertNode(c.head.next.next.data);

// console.log('a', a);
// console.log('b', b);

// console.log('c', c);
// console.log('d', d);
console.log(findMergeNode(a.head, b.head));
console.log(findMergeNode(c.head, d.head));
