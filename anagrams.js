// Write a function(s) to determine if two strings are anagrams

// Helper function that builds the object to store the data
const buildCharObject = str => {
  const charObj = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (char != " ") charObj[char] = charObj[char] + 1 || 1;
  }
  return charObj;
};

// Main function
const anagram = (strA, strB) => {
  const aCharObject = buildCharObject(strA);

  const bCharObject = buildCharObject(strB);

  if (Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
    return false;
  }
  for (let char in aCharObject) {
    if (aCharObject[char] !== bCharObject[char]) {
      return false;
    }
  }
  return true;
};

// first pass solution by Daniel Weinman

const anagram = (str1, str2) => {
  const counts = {};

  let str1Arr = str1.split("");
  for (let i = 0; i < str1Arr.length; i++) {
    if (str1Arr[i] !== " ") {
      if (counts[str1Arr[i].toLowerCase()]) {
        counts[str1Arr[i].toLowerCase()] += 1;
      } else {
        counts[str1Arr[i].toLowerCase()] = 1;
      }
    }
  }

  let str2Arr = str2.split("");
  for (let i = 0; i < str2Arr.length; i++) {
    if (str2Arr[i] !== " ") {
      if (counts[str2Arr[i].toLowerCase()]) {
        counts[str2Arr[i].toLowerCase()] -= 1;
      } else {
        return false;
      }
    }
  }

  for (let letter in counts) {
    if (counts[letter] !== 0) {
      return false;
    }
  }

  return true;
};

console.log(anagram("Silent", "Listen"));
console.log(anagram("Funeral", "Real fun"));
console.log(anagram("Conversation", "Voices rant on"));
console.log(anagram("Dormitory", "Dirty room"));
console.log(anagram("Astronomer", "Moon starer"));
console.log(anagram("Test", "Fail"));
