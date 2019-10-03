/*
  Write a program, which compares two arrays of type char lexicographically (character by character)
  and checks, which one is first in the lexicographical order.
 */

function compare(arr1, arr2) {
  const len = arr1.length < arr2.length ? arr1.length : arr2.length;
  let first = [];

  for (let i = 0; i < len; i++) {
    if (arr1[i] < arr2[i]) {
      return arr1;
    } else if(arr1[i] > arr2[i]) {
      return arr2;
    }
  }

  return undefined;
}

console.log(compare(['a', 'b', 'c', 'd', 'e'], ['w', 'x', 'y', 'z'])); // ['a', 'b', 'c', 'd', 'e']
console.log(compare(['z', 'b', 'c', 'd', 'e'], ['w', 'x', 'y', 'z'])); // ['w', 'x', 'y', 'z']
console.log(compare(['z', 'b', 'c', 'd', 'e'], ['z', 'x', 'y', 'z'])); // ['z', 'b', 'c', 'd', 'e']
console.log(compare(['z', 'b', 'c', 'd', 'e'], ['z', 'b', 'c', 'd', 'e'])); // undefined
