#Given a string, find the length of the longest #substring without repeating characters.
#ex: 'abcac' return 3 
#(abc or bca)

def longestSub(s):
  table = {}
  max_count =0
  index = 0
  current_count =0
 
  y = list(s)
  while index < len(y):
    new_char = y[index]
    if new_char not in table:
      table[new_char]=index
      current_count += 1
    else:
      current_count = index - table[new_char]
      table[new_char] = index
    if current_count > max_count:
      max_count = current_count
    index +=1
      
  return max_count