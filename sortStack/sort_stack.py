class Stack:
  def __init__(self):
    self.storage = []

  def push(self, value):
    self.storage.append(value)

  def pop(self):
    poppedVal = self.storage.pop()
    return poppedVal
  
  def peek(self):
    return self.storage[len(self.storage) - 1]

  def isEmpty(self):
    if len(self.storage) == 0:
      return True
    return False

  def print_contents(self):
    for eachVal in self.storage:
      print(eachVal)


# Suggested Solution:
''' Pseudocode:
1. Declare a variable called output_stack and set it equal a new instantiated Stack class so that it'll be an empty stack list
2. Make a while loop of while input_stack is not empty using the isEmpty stack method
3. Inside while loop, pop off the last element from the input_stack and set it to a variable called temp.
4. Inside outer while loop, make another nested while loop of while output_stack is not empty and while the last element in the output_stack 
(using peek method) is bigger than temp then pop that last bigger element from output_stack back into the input_stack.
5. Otherwise (if output_stack is empty and the last element in output_stack is smaller than temp) then push the temp value into the 
output_stack (preserve the order of the sort in output_stack). This will continue for as long as output_stack last element is bigger than any
element from the input_stack, till input_stack is empty
'''

def sort_stack(input_stack):
  output_stack = Stack()

  while not input_stack.isEmpty():
    temp = input_stack.pop()

    while not output_stack.isEmpty() and output_stack.peek() > temp:
      input_stack.push(output_stack.pop())
    output_stack.push(temp)

  return output_stack

s = Stack()
# s.push(10)
# s.push(4)

sorted_stack = sort_stack(s)
sorted_stack.print_contents()  # should print 4, 10

# print a newline
print()

s.push(8)
s.push(5)
s.push(1)
s.push(6)
s.push(19)
s.push(4)

sorted_stack = sort_stack(s)
sorted_stack.print_contents()  # should print 1, 4, 5, 6, 8, 19