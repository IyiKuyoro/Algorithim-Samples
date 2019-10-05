// Given an array of integers, return a new array such that each element 
// at index i of the new array is the product of all the numbers in the original
// array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5],
// the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1],
// the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

// O(n)
function productArray(array) {
  const newArray = [];

  let totalProduct = 1;
  for (let i = 0; i < array.length; i++) {
    totalProduct *= array[i];
  }

  for (let i = 0; i < array.length; i++) {
    newArray.push(totalProduct / array[i]);
  }

  return newArray;
}

// O(n) After taking a look at the solution.
function productArrayWithoutDiv(array) {
  const prefix = [];
  for(let i = 0; i < array.length; i++) {
    if (i === 0) prefix.push(array[i]);
    else prefix.push(prefix[i-1] * array[i]);
  }

  let suffix = [];
  const reversedArray = array.reverse();
  for(let i = 0; i < reversedArray.length; i++) {
    if (i===0) suffix.push(reversedArray[i]);
    else suffix.push(suffix[i-1] * reversedArray[i]);
  }
  suffix = suffix.reverse();

  const productArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0) productArray.push(suffix[i+1]);
    else if (i === array.length - 1) productArray.push(prefix[i - 1])
    else productArray.push(prefix[i-1] * suffix[i+1]);
  }

  return productArray;
}

console.log(productArray([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(productArray([3, 2, 1])); // [2, 3, 6]

console.log(productArrayWithoutDiv([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(productArrayWithoutDiv([3, 2, 1])); // [2, 3, 6]
