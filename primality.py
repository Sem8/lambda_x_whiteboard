def primality(n):
  # divide number by itself, if it has no remainder, it's prime 
  # even numbers can't be prime 
  # how many numbers do we need to check to ensure n is prime? 
  # let's just check every number from 2 to n - 1, and if any of 
  # those divide n, then it's not prime 
​
  # we can achieve O(n^(1/2)) runtime 
  # we don't need to check anything past n^(1/2)
  # it's a number that definitely divides n, but in a lot of cases,
  # the square root won't be an integer 
​
  # 25 => 2 * 12.5, 3 * 8., 4 * 6., 5 * 5, 6 * 3. 
  if n == 2:
    return "Prime"
  elif n == 1 or n % 2 == 0:
    return "Not prime"
  # O(n^(1/2)/2)
  for i in range(3, int(math.sqrt(n) + 1), 2):
    # 3, 5, 7, 9 
    if n % i == 0:
      return "Not prime"
  return "Prime"
​
# n = 83
# n^(1/2) = 9.1104
​
# initial first-pass implementation 
def primality(n):
  # O(n)
  for i in range(math.sqrt(n)):
    if n % i == 0:
      return "Not prime"
  return "Prime"