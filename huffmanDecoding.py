import queue as Queue

cntr = 0

class Node:
    def __init__(self, freq, data):
        self.freq = freq
        self.data = data
        self.left = None
        self.right = None
        global cntr
        self._count = cntr
        cntr = cntr + 1
        
    def __lt__(self, other):
        if self.freq != other.freq:
            return self.freq < other.freq
        return self._count < other._count

def huffman_hidden():#builds the tree and returns root
    q = Queue.PriorityQueue()

    
    # for key in freq:
    #     q.put((freq[key], key, Node(freq[key], key) ))
    
    while q.qsize() != 1:
        a = q.get()
        b = q.get()
        obj = Node(a[0] + b[0], '\0' )
        obj.left = a[2]
        obj.right = b[2]
        q.put((obj.freq, obj.data, obj ))
        
    root = q.get()
    root = root[2] #contains root object
    return root

def dfs_hidden(obj, already):
    if(obj == None):
        return
    # elif(obj.data != '\0'):
    #     code_hidden[obj.data] = already
        
    dfs_hidden(obj.right, already + "1")
    dfs_hidden(obj.left, already + "0")

# My solution: Did not pass all tests
''' Pseudocode:
1. Declare a variable called current and set it equal to root to serve as a pointer to root 
2. Declare a variable called idx and set it equal to 0 (it'll serve as an index for the s)
3. Initialize an empty string, call it finalStr
4. Make a while loop of while idx is less than length of s
5. Inside while loop make an if statement of s at index idx is 1 then go right by setting current to current.right then increment idx by 1
6. Inside previous if statement, make another if statement of if current.data exists (or is a valid value) then add current.data to finalStr
and reset current to equal to root. 
7. Inside still that 1st if statement, make an else statement (if current.data does not exist) then make a while loop of while current.data
does not exist
8. Inside inner while loop, make an if statement of if value of s at index idx is 1 then set current to current.right, and increment idx by 1
and if value of s at index idx is 0 then set current to current.left and increment idx by 1
'''

# def decodeHuff(root, s):
#     current = root
#     idx = 0
#     finalStr = ''

#     while idx < len(s):
#         if s[idx] == '1':
#             current = current.right
#             idx += 1

#             if (current.left is None) and (current.right is None):
#                 finalStr += current.data
#                 current = root
            
#         if s[idx] == '0':       
#             current = current.left
#             idx += 1
#             if (current.left is None) and (current.right is None):
#                 finalStr += current.data
#                 current = root
            
#     return finalStr

# Suggested solution:
''' Pseudocode:
1. Declare a variable called current and set it equal to root to serve as a pointer
2. Declare an empty string, call is finalStr
3. Make a for in loop to loop through each element in the input coded string, s, call each element in the input string s, char
4. Make an if statement of if char is equal to string version of 1 then go right by setting current to current.right
5. Outside previous if statement, make another if statement of if char is equal to string version of 0 then go left by setting current to 
current.left
6. Outside previous if statement, make another if statement of if current.data is not equal to '\0' then set finalStr to plus equal 
current.data
7. Still inside the above if statement, re-set current to root once a data value of a node has been added to finalStr
8. Outside for in loop, print finalStr 
'''
def decodeHuff(root, s):
    current = root
    finalStr = ''

    for char in s:
        if char == '1':
            current = current.right
        if char == '0':
            current = current.left
        if current.data != '\0':
            finalStr += current.data
            current = root
    print(finalStr)
    
