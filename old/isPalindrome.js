function isPalindrome(text){
  function split(i, j) {
    if (i === j) return true;
    if (text[i] !== text[j]) return false;

    return split(++i, --j);
  }

  return split(0, text.length - 1);
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
