// This problem was asked by Twitter.
// A strobogrammatic number is a positive number that appears the same after being rotated 180 degrees.
// For example, 16891 is strobogrammatic.
// Create a program that finds all strobogrammatic numbers with N digits.

function strobogrammaticNumber(N) {
  if (N <= 0) return [];
  if (N === 1) return [0, 1, 8];
  if (N === 2) return [11, 88, 69, 96]

  const stroDigs = {1: 1, 8: 8, 0: 0, 6: 9, 9: 6};
  const stro = [];
  const min = Math.pow(10, N);
  const max = Math.pow(10, N+1) - 1;
  for (let i = min; i <= max; i++) {
    const numString = `${i}`;
    let left = 0;
    let right = numString.length - 1;
    while (left <= right) {
      if (numString[left] != stroDigs[numString[right]]) break;
      else {
        if (left === right || left + 1 === right) stro.push(numString);
      }

      left++;
      right--;
    }
  }

  return stro;
}

console.log(strobogrammaticNumber(7));
