class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value);

    node.prev = this.tail
    this.tail = node;

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;
    const poppedValue = this.tail.value;

    this.tail = this.tail.prev

    this.length--;
    return poppedValue;
  }
}
