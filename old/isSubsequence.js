function isSubsequence(word1, word2) {
  let dic = {};
  let match = 0;
  let i = 0;
  let j = 0;

  while (j < word2.length) {
    if (dic[word1[i]]) {
      return false;
    } else if (word1[i] === word2[j]) {
      j++;
      i++;
      match++;
    } else if (word1[i] !== word2[j]) {
      if (j !== word2.length - 1) {
        dic[word2[j]] = true;
      }
      j++;
    }
  }

  j--;
  while (i < word1.length) {
    if (dic[word1[i]]) {
      return false;
    } else if (word1[i] === word2[j]) {
      match++;
      i++;
    } else if (word1[i] !== word2[j]) {
      dic[word1[i]] = true;
      i++;
    }
  }

  if (!match) {
    return false;
  }

  return true;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sinzg', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
