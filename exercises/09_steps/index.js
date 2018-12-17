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

module.exports = steps;