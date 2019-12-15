const DoublyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
    this.prev = null;
  }
};

const DoublyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    let node = new DoublyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }

    this.tail = node;
  }
};

function printDoublyLinkedList(head) {    
    let node = head;
    // let result = [];
  while (node) {
    // result.push(node.data);
    console.log(node.data);
    node = node.next;
  };
//   console.log(result.join('=>'));
}

// My solution:
/*Pseudocode:
1. Make an if statement of if head.data is more than data then do ' const newNode = DoublyLinkedListNode(data) '. 
2. Still in if statement, declare head.prev equals newNode, then newNode.next equals head, then decalre head equals newNode
3. Otherwise, (if head.data is less than data) then declare a variable called node which will be a pointer and initialize it to head.
4. Make a while loop of while node exists
5. Inside while statement, check if newNode.data is more than node.data then set node to node.next to move to the next node.
6. Still inside while loop, make another if statement, check if newNode.data is more than node.data now, then declare a variable called prevNode
and set it equal to node.prev then set prevNode.next to newNode. 
7. Still inside previous if statement, set newNode.prev equal to prevNode and set newNode.next equal to node. 
8. Outside while loop return head;
 */

// Finished passing sample in 53 minutes (but with some hints)
// Finished passing all tests in 1 hour 18 minutes (with solution code for hints)

// function sortedInsert(head, data) {
//   const newNode = new DoublyLinkedListNode(data);
//   if (head.data > newNode.data) {
//     head.prev = newNode;
//     newNode.next = head;
//     head = newNode;
//     return head;
//   }
//   if (head == null) {
//     return newNode;
//   }
//   let node = head;
//   let prevNode;
//   while (node) {
//     if (node.next == null && newNode.data > node.data) {
//       newNode.next = null;
//       newNode.prev = node;
//       node.next = newNode;
//       break;
//     }
//     if (newNode.data <= node.data) {
//       prevNode = node.prev;
//       prevNode.next = newNode;
//       newNode.prev = prevNode;
//       newNode.next = node;
//       break;
//     }

//     node = node.next;
//   }
//   return head;
// };

// Recursive solution (Suggested):
/*Pseudocode:
1. Declare a variable called newNode and set it equal to a new instantiation of a DoublyLinkedListNode, passing in input data as its value
2. Make a base case of if head is equal to null (head does not exist) then just return newNode.
3. Make another base case of if data is less than or equal to head.data then set newNode.next equal to head, then set head.prev to newNode and
finally set head equal to newNode to re-set the head to be the newNode and then return newNode.
4. Else (if data is more than head.data) then declare a variable called rest and set it equal to the recursive call of the sortedInsert 
function, this time passing in head.next to be the head input and data to be the data input. (This will insert the newNode at head.next if 
  there's only a head in the linked list, it'll insert newNode at the head.next place if newNode belongs as 2nd node in list or it'll keep 
  iterating through list till it finds a node that's bigger than newNode)
5. Next, (once recursive call of function is done and saved to a variable called rest) still inside else statement, set head.next equal to 
rest, then set rest.prev equal to head and finally return head inside the else statement.
 */
function sortedInsert(head, data) {
  let newNode = new DoublyLinkedListNode(data);

  if (head == null) {
    return newNode;
  }
  else if (data <= head.data) {
    newNode.next = head;
    head.prev = newNode;
    head = newNode;
    return newNode;
  }
  else {
    let rest = sortedInsert(head.next, data);
    head.next = rest;
    rest.prev = head;
    return head;
  }

}


let a = new DoublyLinkedList();
// a.insertNode(1);
// a.insertNode(2);
// a.insertNode(3);
// console.log(a);

a.insertNode(1);
// a.insertNode(5);
// a.insertNode(7);
// a.insertNode(9);

printDoublyLinkedList(a.head);
sortedInsert(a.head, 4);
printDoublyLinkedList(a.head);
