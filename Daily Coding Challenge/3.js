// Declare a variable called longest to hold the `longest` array sequential array
// Declare another variable to hold the `currentlongest` sequence being investigated.
// Declare a variable to define if the `currentLongest` array will get incremented.

// Loop over given array from left to right. This should account for the o(n) part of the algorithm
//    Set an `innerIndex` variable to the length of the given array minus 1;
//    Set a devisor variable to 1. This will help us find the mid point between the index of the outer loop and the end of the array on every inner loop.
//    Loop over array from right to left this time using `innerIndex` while`innerIndex` is greater than i.
//        if the current element of outer loop plus the difference between `innerIndex` and the index of the outer loop is equal to the element of the inner loop
//            Add the outer element to the `currentLongest`
//            If the very next element to it is greater than the current outer element by 1 also add to the `currentLongest`
//            Set the refresh variable to false and break out of the inner loop.
//        Set the refresh variable to true and set the innerIndex to the mid point between i and the array length
//    If `currentLongest` length is greater than `longest` length, reassign longest.
//    Refresh `currentLongest` whenever refresh is true.

// Return Longest

function getLongest(array) {
  let longest = [];

  let currentLongest = [];
  let refresh = false;
  for(let i = 0; i < array.length; i++) {
    let innerIndex = array.length - 1;
    let div = 1;
    while(innerIndex > i) {
      if (array[i] + (innerIndex - i) === array[innerIndex]) {
        currentLongest.push(array[i]);
        if (innerIndex - 1 === i) currentLongest.push(array[innerIndex]);
        refresh = false;
        break;
      }
      refresh = true;
      div *= 2;
      innerIndex = i + Math.floor((array.length - i) / div);
    }

    if (currentLongest.length > longest.length) {
      longest = [...currentLongest];
    }

    if (refresh) {
      currentLongest = [];
      refresh = false;
    }
  }

  return longest;
}

console.log(getLongest([1, 2, 5, 6, 8, 4, 5, 6, 7, 8, 9, 0]));
