class node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

# My solution: Doesn't pass all tests
    # If root is null return true
    # Set a pointer to root called current
    # while root.left exists then if root.left.data is is less than current.data then return true and set current to current.left
    # Recursively call the checkBST function on root.left
    # while root.right exists then if root.right.data is more than root.data then return true and set current to current.right, otherwise 
    # return false. 
    # Recursivley call the checkBST function on root.right 
''' Pseudocode:
1. Declare a varaible called current and set it equal to root (current will serve as a pointer)
2. Make a while loop of while root.left exists
3. Inside previous while loop, make an if statement of if current.left.data is less than current.data then set current to current.left to 
iterate and then return true.
4. Otherwise (if current.left.data is not less than current.data) then return false
5. Outside while loop? recursively call the checkBST function on current.left
6. Repeat the above 4 steps on root.right
'''

# def checkBST(root):
#     current = root

#     while current.left:
#         if current.left.data < current.data:
#             return True
#         else:
#             return False
#         current = current.left

#     current = root

#     while current.right:
#         if current.right.data > current.data:
#             return True
#         else:
#             return False
#         current = current.right



# Suggested Solution 1:
def checkBST(root):
    return(check_in_order(root,[-1]))

def check_in_order(root,prev):
    result = True
    if root.left is not None:
        result &= check_in_order(root.left,prev)
    if prev[0] >= root.data:
        return False
    prev[0] = root.data
    if root.right is not None:
        result &= check_in_order(root.right,prev)
    return result

# Suggested Solution 2:
def checkBST(root):
    list_ = []
    def inorder(node):
        if node.data:
            if node.left:
                inorder(node.left)
            list_.append(node.data)
            if node.right:
                inorder(node.right)
        return list_
    inorder_list = inorder(root)
    return sorted(list(set(inorder_list))) == inorder_list

# Suggested Solution 3:

boolean checkBST(Node root) {
	return check(root,Integer.MIN_VALUE,Integer.MAX_VALUE);
}
boolean check(Node n, int min, int max){
	if(n==null)
		return true;
	if(n.data <= min || n.data >= max)
		return false;
	return check(n.left, min, n.data) 
		&& check(n.right, n.data, max);
}