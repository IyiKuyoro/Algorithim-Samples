class Quack {
  constructor() {
    this.right = [];
    this.left = [];
    this.buffer = [];
  }

  push(value) {
    this.left.push(value);
  }

  pop() {
    if (this.left.length === 0 && this.right.length === 0) {
      return undefined;
    }

    if (this.left.length === 0) {
      // Rebalance quack
      const size = this.right.length;

      // Move half of right stack to buffer
      for (let i = 0; i < Math.floor(size/2); i++) {
        this.buffer.push(this.right.pop());
      }

      // Move other half to left
      while(this.right.length > 0) {
        this.left.push(this.right.pop());
      }

      // Move elements back to right from buffer
      while(this.buffer.length > 0) {
        this.right.push(this.buffer.pop());
      }
    }

    return this.left.pop();
  }

  pull() {
    if (this.left.length === 0 && this.right.length === 0) {
      return undefined;
    }

    if (this.right.length === 0) {
      const size = this.left.length;

      // Move half of the left to the buffer
      for (let i = 0; i < Math.floor(size / 2); i++) {
        this.buffer.push(this.left.pop());
      }

      // Move remaining half of left to right
      while(this.left.length > 0) {
        this.right.push(this.left.pop());
      }
  
      // Move elements in buffer back to left
      while(this.buffer.length > 0) {
        this.left.push(this.buffer.pop());
      }
    }

    return this.right.pop();
  }
}

const list = new Quack();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

console.log(list.pull());
console.log(list.pull());
console.log(list.pull());
console.log(list.pull());
console.log(list.pull());
console.log(list.pull());
