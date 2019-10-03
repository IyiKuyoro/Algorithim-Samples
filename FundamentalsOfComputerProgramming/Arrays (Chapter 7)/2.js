/*
 * Write a program, which reads two arrays from the console and checks whether
 * they are equal (two arrays are equal when they are of equal length and all
 * of their elements, which have the same index, are equal).
 */

function areEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(areEqual([1,2,3,4], [1,2,3,4])); // true
console.log(areEqual([5,6,2,9,0], [2,6,2,4,3])); //false
console.log(areEqual([2,7,8,0], [2,7,8,0,1])); // false
