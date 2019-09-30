function flatten(A){
  let array = [];

  for (let i = 0; i < A.length; i++) {
    if (Array.isArray(A[i])) {
      array = array.concat(flatten(A[i]));
    } else {
      array.push(A[i]);
    }
  }

  return array;
}

console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
