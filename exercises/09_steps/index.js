// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function stepsMy(n) {
  for (let i = 1; i <= n; i++) {
    console.log('#'.repeat(i) + ' '.repeat(n - i));
  }
}

function steps(n) {
  // From 0 to n (iterate through rows)
  for (let row = 0; row < n; row++) {
    // Create an empty string 'stair'
    let stair = '';

    // From 0 to n (iterate through columns)
    for (let column = 0; column < n; column++) {
      // IF the current column is equal to or less than the current row
      if (column <= row) {
        // Add a '#' to 'stair'
        stair += '#';
      } else {
        // ELSE add a space to 'stair'
        stair += ' ';
      }
    }
    // Console log 'stair'
    console.log(stair);
  }
}

function steps(n) {

}

// Recursion Tips
// Figure out teh bare minimum pieces of information to represent your problem
// Give reasonable defaults to the bare minimum pieces of info
// Check the base case. Is there any work left to do? If not, return
// Do some work. Call your function again, making sure the arguments have changed in some fashion

function printNumber(n, dec = 1) {
  if (n === 0) {
    return;
  }

  console.log(n);
  printNumber(n - dec);
}

printNumber(10, 1);
// expected output: 10 9 8 7 6 5 4 3 2 1

module.exports = steps;