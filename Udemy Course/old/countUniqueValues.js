function countUniqueValues(A) {
  const dic = {};
  let count = 0;

  A.forEach(number => {
    if (!dic[number]) {
      dic[number] = true;
      count += 1;
    }
  });

  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
