// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagramsMy1(stringA, stringB) {
  let strMapA = {};
  let strMapB = {};
  stringA
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .forEach(e => (strMapA[e] ? strMapA[e]++ : (strMapA[e] = 1)));
  stringB
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .forEach(e => (strMapB[e] ? strMapB[e]++ : (strMapB[e] = 1)));

  for (let element in strMapA) {
    if (strMapA[element] !== strMapB[element]) {
      return false;
    }
  }

  for (let element in strMapB) {
    if (strMapA[element] !== strMapB[element]) {
      return false;
    }
  }
  return true;
}

function anagramsMy2(stringA, stringB) {
  let strA = stringA
    .replace(/[^\w]/g, "")
    .split("")
    .sort()
    .join("");
  let strB = stringB
    .replace(/[^\w]/g, "")
    .split("")
    .sort()
    .join("");
  if (strA === strB) {
    return true;
  } else {
    return false;
  }
}

function anagrams1(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function anagrams(stringA, stringB) {
  return clearString(stringA) === clearString(stringB);
}

function clearString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;
