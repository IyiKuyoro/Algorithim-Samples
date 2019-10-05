// Sort the Array
// Loop over array with two pointers one on the left and one of the right
//   If sum of right and left is greater than k decrease right
//   else If sum of right and left is less than k increase left
//   else return return true;

// Time complexity O(n log n) or O(n^2)

function possibleSum (array, k) {
  const sortedArray = array.sort((a, b) => a - b);

  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    const sum = sortedArray[i] + sortedArray[j];
    if (sum < k) {
      i++;
    } else if (sum > k) {
      j++;
    } else {
      return true;
    }
  }

  return false;
}

console.log(possibleSum([10, 15, 3, 7], 25));
