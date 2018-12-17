// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// jest 01_reversestring/test.js --watch
function reverse1(str) {
    // Turn 'str' into an array
    // Call 'reverse' method on the array to reverse the permutation of the array
    // Join the array back into a string
    return str.split("").reverse().join("");
}

function reverse2(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

function reverse(str) {
    return str.split('').reduce((reversed, character) => character + reversed, '')
}

function reverse99(str) {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}



module.exports = reverse;