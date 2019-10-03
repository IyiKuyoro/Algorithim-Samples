function averagePair(array, average) {
  let calAv = 0;

  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    calcAv = (array[i] + array[j]) / 2

    if (calcAv === average) {
      return true;
    } else if (calcAv < average) {
      i++;
    } else {
      j--;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
