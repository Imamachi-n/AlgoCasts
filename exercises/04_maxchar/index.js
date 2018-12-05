// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// jest 04_maxchar/test.js
function maxCharMY(str) {
  const chars = {};
  str.split('').forEach(char => chars[char] = chars[char] + 1 || 1);
  let largestCount = 0;
  let resultChar = '';
  for (char in chars) {
    let count = chars[char];
    if (count > largestCount) {
      resultChar = char;
      largestCount = count;
    }
  }
  return resultChar;
}

function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;