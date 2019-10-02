class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this.tail.value;
  }

  pop() {
    let poppedValue;
    if (this.length === 0) return null;
    if (this.length === 1) {
      poppedValue = this.head.value;
      this.head = null;
      this.tail = null;
      this.length--;
      return poppedValue;
    }

    const current = this.traverseTo(this.length - 2);
    poppedValue = current.next.value;
    current.next = null;
    this.tail = current;
    this.length--;

    return poppedValue;
  }

  shift() {
    if (this.length > 0) {
      const returnedValue = this.head.value;
      this.head = this.head.next;
      this.length-- ;

      return returnedValue
    }

    return returnedValue;
  }

  unshift(value) {
    const prevHead = this.head;
    this.head = new Node(value);
    this.head.next = prevHead;
    this.length++;

    return this.head.value;
  }

  get(index) {
    let current = this.traverseTo(index);

    return current.value;
  }

  set(position, value) {
    const found = this.traverseTo(position);

    if (found) {
      found.value = value;
      return found.value;
    }

    return undefined;
  }

  insert(position, value) {
    const newNode = new Node(value);

    if (position === 0) {
      return this.unshift(value);
    } else if (position === this.length) {
      return this.push(value);
    }
    
    const nodeBeforePreviousPositionHolder = this.traverseTo(position - 1);
    newNode.next = nodeBeforePreviousPositionHolder.next;
    nodeBeforePreviousPositionHolder.next = newNode;

    this.length++
    return nodeBeforePreviousPositionHolder.next.value;
  }

  remove(position) {
    if (position === 0) {
      return this.shift();
    } else if (position === this.length - 1) {
      return this.pop();
    } else if (position >= this.length) {
      throw new Error('Index out of bounds');
    }

    const nodeBeforePreviousPositionHolder = this.traverseTo(position - 1);
    nodeBeforePreviousPositionHolder.next = nodeBeforePreviousPositionHolder.next.next;

    this.length--;
    return nodeBeforePreviousPositionHolder.value;
  }

  reverse() {
    
  }

  traverseTo(index) {
    if (index >= this.length || index < 0)
      throw new Error('Index out of bounds');
    let current = this.head;
    for (let i = 1; i <= index; i++) {
      current = current.next;
    }

    return current;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list.reverse());

console.log(list);
