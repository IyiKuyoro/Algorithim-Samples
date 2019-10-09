function addSubtract(a) {
  return function add(b) {
    if (!b) return a;
    b += a;
    return function sub(c) {
      if (!c) return b;
      c = b - c;
      return addSubtract(c);
    }
  }
}

console.log(addSubtract(2)(3)(4)(2)(1)());
