function same(a, b) {
  if (a.length !== b.length) {
    return false
  }

  const dic = {};

  a.forEach(element => {
    dic[element*element] = ++dic[element*element] || 1;
  });

  for (let i = 0; i < b.length; i++) {
    const value = b[i];
    if (!dic[value]) {
      return false
    } else {
      dic[value]--;
    }
  }

  return true
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
