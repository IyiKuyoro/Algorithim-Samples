/* 
  Set the first value position of the array as the minValuePosition
  Loop over the array from left to right.
    loop over the array again from the position of the first loop.
      if current value is smaller than the value in the 'minValuePosition' replace the 'minValuePosition'
    Swap current value with value in 'minValuePosition'.

  ALL CASE: O(n^2);
*/

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minValuePosition = i;

    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minValuePosition]) minValuePosition = j;
    }

    let temp = array[i];
    array[i] = array[minValuePosition];
    array[minValuePosition] = temp;
  }

  return array;
}

console.log(selectionSort([5, 10, 2, 5, 1, 6, 2, 9, 0, -1, 8, 20]));
