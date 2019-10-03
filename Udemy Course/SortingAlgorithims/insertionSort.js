/*
  Declare a 'sortedArray' constant and add the first element of the original array to this constant
  Loop over the original array starting at the second element
    Loop over the sortedArray starting at the last element
      If the current element of the sortedArray is greater than that of the original array, move the sortedArray element one place to the right and place the original array element in its place
      Else place the original array element one place to the right and break from the loop
  
  Return the sortedArray

  WORST CASE: O(n^2)
  BEST CASE: O(n)
*/
function insertionSort(array) {
  const sortedArray = [array[0]];

  for (let i = 1; i < array.length; i++) {
    for (let j = sortedArray.length - 1; j >= 0; j--) {
      if (sortedArray[j] > array[i]) {
        sortedArray[j+1] = sortedArray[j];
        sortedArray[j] = array[i];
      } else {
        sortedArray[j+1] = array[i];
        break;
      }
    }
  }

  return sortedArray;
}

console.log(insertionSort([1, 2, 2, 5, 6, 7, 9, 10, 18, 20]));
console.log(insertionSort([5, 10, 2, 5, 1, 6, 2, 9, 0, -1, 8, 20]));
console.log(insertionSort([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5, 4, 3, 2, 1, 0]));
console.log(insertionSort(Array.apply(null, {length: 100000}).map(Function.call, Math.random)));

