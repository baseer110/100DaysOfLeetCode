/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // pointers
  let start = 0;
  let end = 0;

  // Hashmap for storing characters
  let data = new Map();

  // storing max length of a string
  let max_length = 0;

  while (end < s.length) {
    if (data.has(s[end])) {
      // Character exists
      data.delete(s[start]);
      start++;
    } else {
      // Character not exists
      data.set(s[end], end);
      end++;
      max_length = max_length > data.size ? max_length : data.size;
    }
  }

  return max_length;
};
