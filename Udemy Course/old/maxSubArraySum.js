function maxSubArraySum (A, n) {
  if (A.length < n) {
    return null;
  }

  let sum = Number.MIN_VALUE;
  let maxSum = sum;

  for (let i = 0; i < n; i++) {
    maxSum = sum += A[i];
  }

  let i = 0;
  while (i < A.length - n) {

    sum = sum - A[i] + A[i + n];

    maxSum = sum > maxSum ? sum : maxSum;

    i++
  }

  return maxSum;
}

console.log(maxSubArraySum([100, 200, 300, 400], 2));
console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubArraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubArraySum([2, 3], 3));

// O(n)
