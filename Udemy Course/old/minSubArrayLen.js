function minSubArrayLen(A, num) {
  let sum = A[0];
  let len = 1;
  let minLen = +Infinity;

  let i = 0;
  let j = 0;
  while (i < A.length && j < A.length) {
    if (sum < num) {
      len++;
      sum += A[++j];
    } else if (sum >= num && len >= 1) {
      minLen = minLen > len ? len : minLen;
      sum -= A[i++];
      len--;
    }
  }

  return minLen === +Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55));
console.log(minSubArrayLen([4,3,3,8,1,2,3], 11));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95));
