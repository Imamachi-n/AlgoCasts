// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalizeMy(str) {
  return str.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ');
}

function capitalize1(str) {
  // Make an empty array
  const words = [];

  // Split an input string by spaces to get an array
  // For each word in the array
  for (let word of str.split(' ')) {
    // Uppercase the first letter of the word
    // Join the first letter with rest of the string
    // Push the result into 'words' array
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  // Join the 'words' into a string and return it
  return words.join(' ');
}

function capitalize(str) {
  // Create 'result' which is the first character of the input string capitalized
  let result = str[0].toUpperCase();

  // For each character in the string
  for (let i = 1; i < str.length; i++) {
    // If the character of the left is a space, capitalize it and add it into 'result'
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      // Else add it to 'result'
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;