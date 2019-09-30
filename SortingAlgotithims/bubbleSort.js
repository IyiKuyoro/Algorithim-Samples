/*
 * Declare a 'noSwap' variable as true;
 * loop over array from left to right
 *     loop over the array agin from right to left this time stopping at the position of i.
 *         In each pass, check that the value adjacent to the current position is less than the current value. If so, swap them
 *          and set the 'noSwap' variable to false;
 *     
 *     check that the no 'noSwap' variable is true. if so break out of the loop.
 *     In each pass, reset the 'noSwap' variable to true;
 * 
 * return the array to the calling function.
*/

function bubbleSort(array) {
  let noSwap = true;

  for (let i = array.length; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j+1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
      noSwap = false;
    }
    if (noSwap) break;
    else noSwap = true;
  }

  return array;
}

console.log(bubbleSort([5, 10, 2, 5, 1, 6, 2, 9, 0, -1, 8, 20]));
