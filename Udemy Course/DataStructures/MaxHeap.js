class MaxHeap {
  constructor() {
    this.data = [];
  }

  insert(value) {
    this.data.push(value);

    let i = this.data.length - 1;
    let parent = this.data[Math.floor((i - 1) / 2)];
    while(i > 0 && parent < value) {
      const temp = this.data[Math.floor((i - 1) / 2)];
      this.data[Math.floor((i - 1) / 2)] = this.data[i];
      this.data[i] = temp;
      i = Math.floor((i - 1) / 2);
      parent = this.data[Math.floor((i - 1) / 2)];
    }

    return this.data;
  }

  extractMax() {
    if (this.data.length === 0) return null;

    const removedValue = this.data[0];
    this.data[0] = this.data.pop();
    let i = 0;
    let leftChild = (i*2 + 1);
    while(
      this.data[leftChild] > this.data[i]
      || this.data[leftChild+1] > this.data[i]
    ) {
      const largestIndex = this.data[leftChild] > this.data[leftChild+1] ? leftChild: leftChild+1;

      const temp = this.data[i];
      this.data[i] = this.data[largestIndex];
      this.data[largestIndex] = temp;
      i = largestIndex;
      leftChild = (i*2 + 1);
    }

    return removedValue;
  }
}

const heap = new MaxHeap();

console.log(heap.insert(44));
console.log(heap.insert(45));
console.log(heap.insert(15));
console.log(heap.insert(58));
console.log(heap.insert(31));
console.log(heap.insert(67));
console.log(heap.insert(40));
console.log(heap.insert(65));
console.log(heap.insert(53));

console.log(heap.extractMax());
