class Node:
    def __init__(self, info): 
        self.info = info  
        self.left = None  
        self.right = None 
        self.level = None 

    def __str__(self):
        return str(self.info) 

class BinarySearchTree:
    def __init__(self): 
        self.root = None

    def create(self, val):  
        if self.root == None:
            self.root = Node(val)
        else:
            current = self.root
         
            while True:
                if val < current.info:
                    if current.left:
                        current = current.left
                    else:
                        current.left = Node(val)
                        break
                elif val > current.info:
                    if current.right:
                        current = current.right
                    else:
                        current.right = Node(val)
                        break
                else:
                    break

# My solution:
    # Make a search of v1 value, log each value as a path from root to v1 value in an array  
    # Make a search of v2 value, log each value as a path from root to v2 value in a 2nd array.
    # Check between the 2 arrays to see which one has a common value and that'll be the common ancestor. 
''' Pseudocode:
1. Declare an empty list call it v1_arr
2. Declare another empty list call it v2_arr
3. Make an if statement of if v1 is equal to root.info then append root into the v1_arr list.
4. Make an if statement of if v2 is equal to root.info then append root into the v2_arr list.
5. Declare a variable called current which will be a pointer to root so set it equal to root
6. Make a while statement of while v1 is not equal to current.info and current is not None,
7. Inside above while loop, make an if statement check if v1 is less than current.info then append current into the v1_arr list then set 
current to current.left.
8. Still inside above 1st while loop but outside previous if statement, make a new if statement check if v1 is more than current.info then
append current into the v1_arr list then set current to current.right. 
9. Re-set current to equal to root again to start iterating through binary tree for v2 now
10. Outside previous while loop, make a new while loop of while v2 is not equal to current.info and current is not None 
11. Inside above while loop, make an if statement, check if v2 is less than current.info then append current into the v2_arr list then set 
current to current.left to iterate though the binary tree.
12. Still inside the 2nd while loop but outside the previous if statement, make another if statement of if v2 is is more than current.info 
then append current into the v2_arr list then set current to current.right to iterate through the binary tree
13. Outside previous while statement, loop through the v1_arr starting at index i of 1 and ending at the last element of the v1_arr
14. Inside previous for in loop, make an if statement, check if current node at current index of v1_arr is in v2_arr list using the in method 
and if so then return that node at the current index
15. Otherwise (if there are no common elements between v1_arr and v2_arr) then outside for in loop just return the input root node
'''

def lca(root, v1, v2):
    v1_arr = []
    v2_arr = []

    if v1 == root.info:
        v1_arr.append(root)
    if v2 == root.info:
        v2_arr.append(root)

    current = root
    # print(current.info)
    while (v1 != current.info) and current is not None:
        if(v1 < current.info):
            v1_arr.append(current)
            current = current.left
        if(v1 > current.info):
            v1_arr.append(current)
            current = current.right  

    current = root

    while (v2 != current.info) and current is not None:
        if(v2 < current.info):
            v2_arr.append(current)
            current = current.left
            
        if (v2 > current.info):
            v2_arr.append(current)
            current = current.right
            

    for i in range(1, len(v1_arr)):
        if v1_arr[i] in v2_arr:
            return v1_arr[i]
        # else:
        #     return root
    return root
  
a = BinarySearchTree()
a.create(4)
a.create(2)
a.create(3)
a.create(1)
a.create(7)
a.create(6)

print(lca(a.root, 1, 7))
# lca(a.root, 1, 7)