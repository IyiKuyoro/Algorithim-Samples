const intString = {
  0: { z: 1, e: 1, r: 1, o: 1},
  1: { o: 1, n: 1, e: 1},
  2: { t: 1, w: 1, o: 1},
  3: { t: 1, h:1, r: 1, e: 2},
  4: { f: 1, o: 1, u: 1, r: 1},
  5: { f: 1, i: 1, v: 1, e: 1},
  6: { s: 1, i: 1, x: 1},
  7: { s: 1, e: 2, v: 1, n: 1},
  8: { e: 1, i: 1, g: 1, h: 1, t: 1},
  9: { n: 2, i: 1, e: 1},
}

function getNumber(str) {
  let nums = [];
  let strLetterMap = {};

  for (let i = 0; i < str.length; i++) {
    if (strLetterMap[str[i]]) {
      strLetterMap[str[i]]++;
    } else {
      strLetterMap[str[i]] = 1;
    }
  }

  let totLength = 0;
  while(totLength < str.length) {
    for (const num in intString) {
      let currentLength = 0;
      let found = true;
      let strLetterMapCopy = {...strLetterMap};
      for (const letter in intString[num]) {
        if (!strLetterMapCopy[letter] || intString[num][letter] > strLetterMapCopy[letter]) {
          found = false;
          break;
        } else {
          strLetterMapCopy[letter] -= intString[num][letter];
          totLength += intString[num][letter];
          currentLength += intString[num][letter];
        }
      }
  
      if (found) {
        nums.push(num);
        strLetterMap = {...strLetterMapCopy};
      } else {
        totLength -= currentLength;
        found = true;
      }
    }
  }

  return nums.sort().join('');
}

console.log(getNumber('nieesvevehrftfeevi'));
