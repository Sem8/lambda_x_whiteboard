'''
Write a program that outputs the string representation of numbers 
from 1 to n.

But for multiples of three it should output “Fizz” instead of the 
number and for the multiples of five output “Buzz”. For numbers 
which are multiples of both three and five output “FizzBuzz”.

3 - Fizz
5 - Buzz
7 - Jazz

3*5 - FizzBuzz
3*7 - FizzJazz
5*7 - BuzzJazz



Example:

n = 15

    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"

'''

    # if i % 35 == 0:
    #   print("BuzzJazz")
    # elif i % 21 == 0:
    #   print("FizzJazz")
    # elif i % 15 == 0:
    #   print("FizzBuzz")
    # elif i % 7 == 0:
    #   print("Jazz")
    # elif i % 5 == 0:
    #   print("Buzz")
    # elif i % 3 == 0:
    #   print("Fizz")
    # else:
    #   print(str(i))

def fizzBuzz(n):
  
  fizz_dict = {3:"Fizz", 5:"Buzz"}
  
  for i in range(1, n):
    result = ''
    for key in fizz_dict:
      if i % key == 0:
        result += fizz_dict[key]
        # continue;
    if result == '':
      result += str(i)
    
    print(result)