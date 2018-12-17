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
    // Create an empty string called 'reversed'
    let reversed = '';

    // Get for each character from the provided string
    for (let character of str) {
        // Take the character and add it to the START of 'reversed'
        reversed = character + reversed;
    }
    // Return the variable 'reversed'
    return reversed;
}

function reverse(str) {
    // Turn the provided string into an array by calling string.split with an empty string
    // Set up the reduce helper function
    // Take the for each character and add it to the START of 'reversed'
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