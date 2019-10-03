function findLongestSubstring(text) {
  const dic = {};
  let maxLength = 0;

  let i = 0;
  let j = 0;
  while (j < text.length) {
    if (dic[text[j]] >= i) {
      i = dic[text[j]] + 1;
      dic[text[i]] = i;
    }
    
    dic[text[j]] = j++;
    maxLength = j-i > maxLength ? j-i : maxLength;
  }

  return maxLength;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
