function capitalizeFirst (A) {
  if (A.length <= 0) return [];

  return [A[0].substr(0, 1).toUpperCase() + A[0].slice(1)].concat(capitalizeFirst(A.slice(1)));
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
