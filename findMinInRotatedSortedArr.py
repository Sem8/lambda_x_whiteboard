# Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
# (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
# Find the minimum element. You may assume no duplicate exists in the array.
# Example 1:
# Input: [3,4,5,1,2] 
# Output: 1

def findmin(nums):
  first = 0
  mid = len(nums) // 2
  last = len(nums)
  while nums[mid] > nums[mid - 1]:
    if nums[mid] < nums[first]:
      # go left
      last = last // 2
      mid = mid // 2
    else:
      # go right
      mid = (mid + last) // 2
      first = mid
  return mid
  
 
# Tests 
  
if findmin([4,5,6,0,1,2]) == 3:
  print("Passed")
else:
  print("Failed")
