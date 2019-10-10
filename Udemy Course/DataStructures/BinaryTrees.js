class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this.root.value;
    } else {
      return BinarySearchTree.traverseInsert(value, this.root).value;
    }
  }

  static traverseInsert(value, node) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new Node(value);
        return node.left;
      }
      return BinarySearchTree.traverseInsert(value, node.left);
    } else if (value > node.value) {
      if (node.right === null) {
        node.right = new Node(value);
        return node.right;
      }
      return BinarySearchTree.traverseInsert(value, node.right);
    }

    return node;
  }

  search(value, node = this.root) {
    if (node === null) {
      return false;
    }

    if (node.value === value) {
      return true;
    } else if (node.value > value) {
      return this.search(value, node.left);
    } else {
      return this.search(value, node.right);
    }
  }

  // Depth First Search (PreOrder)
  traverseTreeDFPR(node = this.root) {
    if (node === null) {
      return;
    }
    console.log(node.value);

    if (node.left) {
      this.traverseTreeDFPR(node.left);
    }
    if (node.right) {
      this.traverseTreeDFPR(node.right);
    }
  }

  // Depth First Search (In Order)
  traverseTreeDFIO(node = this.root) {
    if (node === null) {
      return;
    }

    if (node.left) {
      this.traverseTreeDFIO(node.left);
    }
    console.log(node.value);
    if (node.right) {
      this.traverseTreeDFIO(node.right);
    }
  }

  // Depth First Traverse (Post Order)
  traverseTreeDFPO(node = this.root) {
    if (node === null) {
      return;
    }

    if (node.left) {
      this.traverseTreeDFPO(node.left);
    }
    if (node.right) {
      this.traverseTreeDFPO(node.right);
    }
    console.log(node.value);
  }

  // Breath First Traverse
  traverseTreeBF() {
    const queue = [this.root];
    while(queue.length > 0) {
      const current = queue[0];
      queue.shift();

      if (current.left !== null) {
        queue.push(current.left)
      }
      if (current.right !== null) {
        queue.push(current.right)
      }
      console.log(current.value);
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(5);
bst.insert(7);
bst.insert(10);
bst.insert(6);
bst.insert(4);
bst.insert(1);
bst.insert(0);
bst.insert(5);
bst.insert(2);
console.log();
console.log(bst.traverseTreeDFPR());
