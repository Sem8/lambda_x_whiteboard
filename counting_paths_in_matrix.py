# generate an nxn matrix with cells above the diagonal blocked out 
def generate_matrix(n):
  matrix = [[1 for i in range(n)] for _ in range(n)]
  
  for i in range(n):
    for j in range(n):
      if i < j:
        matrix[i][j] = -1
​
  return matrix
​
# receives a matrix and row and col parameters indicating the 
# starting point in the matrix 
# recursively traverses the given matrix, skipping over blocked cells
# counts the number of paths on the way to the opposite corner 
def count_paths(matrix, row=0, col=0):
  # base case: check if last cell is reached since there's only
  # one path after that 
  if row == len(matrix) - 1 and col == len(matrix) - 1:
    return 1
  
  right = 0
  down = 0
​
  # check if we've exceeded the length of the matrix and if 
  # the next cell to the right is blocked 
  if row != len(matrix) - 1 and matrix[row+1][col] != -1:
    # if we can go there, recurse with the right cell 
    right = count_paths(matrix, row+1, col) 
  
  # check if we've exceeded the width of the matrix and if the 
  # next cell down is blocked 
  if col != len(matrix) - 1 and matrix[row][col+1] != -1:
    # if we can go there, recurse with the down cell 
    down = count_paths(matrix, row, col+1)
​
  return right + down 
​
​
'''
Below is a more efficient math-y solution 
It turns out that if you plot the sequence of dimensions
as you scale up the size of the matrix, the number of valid 
paths that don't cross the diagonal line follows a known 
sequence called the Catalan numbers: 
https://en.wikipedia.org/wiki/Catalan_number
​
So another way to solve this problem is to simply calculate for a
given dimension n, the nth Catalan number. Doing so requires 
defining a combinatoric function to calculate nCr (n choose r). 
'''
import operator as op 
from functools import reduce
​
# n choose r function 
def ncr(n, r):
  r = min(r, n-r) 
  numerator = reduce(op.mul, range(n, n-r, -1), 1) 
  denominator = reduce(op.mul, range(1, r+1), 1) 
  return numerator / denominator
​
# the nth Catalan number adheres to the forumula:
# ((2*n) C n) / (n + 1)
def count_paths_combinatorics(n):
  # mathematicians index by 1, so we have to subtract
  # 1 from n to achieve 0 indexing
  n = n - 1
  return int(ncr(2*n, n) / (n + 1))
​
print(count_paths(generate_matrix(5), 0, 0))
print(count_paths_combinatorics(5))