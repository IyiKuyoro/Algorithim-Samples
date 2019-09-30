function anagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  const dic = {};

  for (const char of word1) {
    dic[char] = ++dic[char] || 1;
  }

  for (let i = 0; i < word2.length; i++) {
    const char = word2[i];

    if (!dic[char]) {
      return false;
    } else {
      dic[char]--;
    }
  }

  return true;
}

console.log(anagram('', ''));
console.log(anagram('aaz', 'zza'));
console.log(anagram('anagram', 'nagaram'));
console.log(anagram('rat', 'car'));
console.log(anagram('awesome', 'awesom'));
console.log(anagram('qwerty', 'qeywrt'));
console.log(anagram('texttwisttime', 'timetwisttext'));
