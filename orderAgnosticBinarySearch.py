'''
Given a sorted array of numbers, find if a given number target is present in the array. Though we know that the array is sorted, we don’t know 
if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.

Write a function to return the index of the target if it is present in the array, otherwise return -1.

Example 1:

Input: [4, 6, 10], target = 10
Output: 2
Example 2:

Input: [1, 2, 3, 4, 5, 6, 7], key = 5
Output: 4
Example 3:

Input: [10, 6, 4], key = 10
Output: 0
Example 4:

Input: [10, 6, 4], key = 4
Output: 2
'''

# different version that has all of the logic in one function
def agnostic_binary_search(arr, target):
  start = 0
  end = len(arr) - 1
  is_ascending = arr[start] < arr[end]
​
  while start <= end:
	midpoint = start + (end - start) // 2
	
	if target == arr[midppoint]:
	  return midpoint
​
    if is_ascending:
	  if target < arr[midpoint]:
	    end = midpoint - 1
	  else:
	    start = midpoint + 1
	else:
	  if target > arr[midpoint]:
		end = midpoint - 1
	  else:
		start = midpoint + 1
​
  return -1
​
def agnostic_binary_search(arr, target):
  # O(n)
  # loop through the entire array, checking each array element
  # to see if it matches the target 
  # O(n)
  # comparing the value of each element to see if its less than or # equal to the target element
​
  # How do I achieve an O(log n) runtime? 
  # We're able to intelligently rule out elements that we don't even have to look at 
​
  # to check descending: take some element in the array, check if 
  # the elemenet to the left < the element 
  # otherwise, we know the array is sorted in ascending order 
  # caveats: duplicates, also arrays containing only a few elements 
​
  # might be easier to check the first and last elements in the array 
  # if first and last are equal, check if the target == either 
  # if it does, return the first index 
  # typically, binary search algorithms expect you to return the
  # first index of the target if there duplicates in the array 
​
  start = 0
  end = len(arr) - 1
​
  if arr[start] == arr[end]:
    if target == arr[start]:
      return start    
    else:
      return -1
  
  # we'll need a boolean to keep track of whether array is
  # ascending or descending 
  is_ascending = arr[start] < arr[end]
​
  # if the array is ascending, then perform a "normal" binary search
  if is_ascending:
    return ascending_binary_search(arr, target)
​
  # if the array is descending, then perform a "reverse" binary search 
  else:
    return descending_binary_search(arr, target)
​
def ascending_binary_search(arr, target):
  # midpoint, high, low 
  high = len(arr) - 1
  low = 0
​
  # how do we know when to stop binary searching? 
  # 1. when high == low 
  # 2. target == arr[midpoint]
  while low <= high:
    midpoint = low + (high - low) // 2
    if target == arr[midpoint]:
      return midpoint 
    if target < arr[midpoint]:
      # if the target exists, it must exist in the left-hand side 
      # we can rule out the right-hand side 
      high = midpoint - 1
    else: 
      # otherwise, target > arr[midpoint]
      # we can rule out the left-hand side 
      low = midpoint + 1
  
  # if we land outside the loop, the target doesn't exist in the array 
  return -1 
​
arr1 = [1, 2, 3, 4, 5, 6, 7]
arr2 = [4, 6, 10]
​
def descending_binary_search(arr, target):
  # midpoint, high, low 
  high = len(arr) - 1
  low = 0
​
  # how do we know when to stop binary searching? 
  # 1. when high == low 
  # 2. target == arr[midpoint]
  while low <= high:
    midpoint = low + (high - low) // 2
    if target == arr[midpoint]:
      return midpoint 
    if target < arr[midpoint]:
      # we're in a descending-ordered array 
      low = midpoint + 1
    else: 
      # otherwise, target > arr[midpoint]
      # we can rule out the left-hand side 
      high = midpoint - 1
  
  # if we land outside the loop, the target doesn't exist in the array 
  return -1 
​
arr3 = [10, 6, 4]
arr4 = [6, 5, 4, 3, 2, 1]
​
arr5 = [1,1,1,1,1,1,1,1,1,10]
​
print(agnostic_binary_search(arr1, 3))
print(agnostic_binary_search(arr4, 5))
print(agnostic_binary_search(arr5, 1))