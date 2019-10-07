class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = this.tail = node;
    } else {
      const prevTail = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.tail.prev = prevTail;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;

    const poppedValue = this.tail.value;
    this.tail = this.tail.prev;
    if (this.length === 1) this.head = null;
    else this.tail.next = null;
    this.length--;

    return poppedValue;
  }

  shift() {
    if (this.length === 0) return null;

    const poppedValue = this.head.value;
    this.head.prev = null;
    this.head = this.head.next;
    this.length--;
    return poppedValue;
  }

  unshift(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.tail = this.head = node;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
  }

  get(index) {
    if (index < 0) return null;

    let current;
    for (let i = 0; i <= index; i++) {
      if (i === 0) current = this.head;
      else current = current.next;
      if (current.next === null) return null;
    }

    return current.value;
  }

  set(index, value) {
    if (index > this.length - 1 || index < 0) return null;

    let count = 0;
    let current = this.head;
    while (count < this.length) {
      if (count === index) {
        current.value = value;
        break;
      }

      current = current.next;
      count++;
    }

    return current.value;
  }

  insert(index, value) {
    if (index > this.length - 1 || index < 0) return null;

    if (index === 0) {
      this.unshift(value);
      return;
    }

    const node = new Node(value);
    let current;
    if (index > this.length / 2) {
      let count = this.length - 1;
      current = this.tail;
      while (count > 0) {
        if (count === index) {
          node.next = current;
          node.prev = current.prev;
          node.prev.next = node;
          current.prev = node;
          break;
        }

        current = current.prev;
        count--;
      }
    } else {
      let count = 0;
      current = this.head;
      while (count < this.length) {
        if (count === index) {
          node.next = current;
          node.prev = current.prev;
          node.prev.next = node;
          current.prev = node;
          break;
        }

        current = current.next;
        count++;
      }
    }
  }

  remove(index) {
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);

console.log(list.remove(2));
console.log(list.remove(0));
