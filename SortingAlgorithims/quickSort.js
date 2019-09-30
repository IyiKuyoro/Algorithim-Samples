/**
 * Return array if length is less than or equal to one
 * Loop over array starting at the second element
 *    If currentValue is less than first value, place it in the left side
 *    Else place it in the right side
 * 
 * Return a call to quickSort(left side) concatenated with a call to quickSort(right side) and the omitted first array element
 * 
 * ALWAYS CASE: O(n log n)
 */
function quickSort(array) {
  if (array.length <= 1) return array;
  const leftArray = [];
  const rightArray = [];

  for (let i = 1; i < array.length; i++) {
    if (array[0] >= array[i]) leftArray.push(array[i])
    else if (array[0] < array[i]) rightArray.push(array[i])
  }

  return [...quickSort(leftArray), array[0], ...quickSort(rightArray)];
}

console.log(quickSort([1, 2, 2, 5, 6, 7, 9, 10, 18, 20]));
console.log(quickSort([5, 10, 2, 5, 1, 6, 2]));
console.log(quickSort([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5, 4, 3, 2, 1, 0]));
console.log(quickSort(Array.apply(null, {length: 100000}).map(Function.call, Math.random)));
