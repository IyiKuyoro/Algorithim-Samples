/*
  If array.length is = 1 return array
  split array in two halves and pass each halve to mergeSort
  return call to merge on each half of array

  ALWAYS CASE: O(n log(n))
*/
function mergeSort(array) {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)))
}

/*
  Declare a 'sortedArray' constant
  Loop over the elements of both arrays
    add the smaller of the two current elements of each array.
    increase the iterator of the added element
  return 'sortedArray'

  ALL CASE: O(n + m)
*/
function merge(arr1, arr2) {
  const sortedArray = [];

  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (i === arr1.length && j < arr2.length) {
      sortedArray.push(...arr2.slice(j));
      j = arr2.length;
    } else if (j === arr2.length && i < arr1.length) {
      sortedArray.push(...arr1.slice(i));
      i = arr1.length;
    } else {
      arr1[i] < arr2[j] ? sortedArray.push(arr1[i++]) : sortedArray.push(arr2[j++]);
    }
  }

  return sortedArray;
}

console.log(mergeSort([1, 2, 2, 5, 6, 7, 9, 10, 18, 20]));
console.log(mergeSort([5, 10, 2, 5, 1, 6, 2, 9, 0, -1, 8, 20]));
console.log(mergeSort([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5, 4, 3, 2, 1, 0]));
console.log(mergeSort(Array.apply(null, {length: 100000}).map(Function.call, Math.random)));
