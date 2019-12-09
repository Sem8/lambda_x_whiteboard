/*Given a string, find the length of the longest #substring without repeating characters.
ex: 'abcac' return 3 
(abc or bca)
*/

function longestSub(s) {
  let table = {};
  let max_count = 0;
  let index = 0;
  let current_count = 0;

  let y = s.split();
  while (index < y.length) {
    let new_char = y[index];
    if (!table[new_char]) {
      table[new_char] = index;
      current_count += 1;
    } else {
      current_count = index - table[new_char];
      table[new_char] = index;
    }
    if (current_count > max_count) {
      max_count = current_count;
    }
    index += 1;
  }

  return max_count;
}
