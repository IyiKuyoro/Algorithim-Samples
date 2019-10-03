function sumZero(A) {
  let i = 0;
  let j = A.length - 1;
  while (j > i) {
    if (A[i] > 0) {
      return undefined;
    }

    let sum = A[i] + A[j];
    if (sum === 0) {
      return [A[i], A[j]];
    } else if (sum < 0) {
      i++;
    } else {
      j--;
    }
  }

  return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
