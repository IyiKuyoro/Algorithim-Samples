class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let weirdPrime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total + weirdPrime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const hash = this._hash(key);
    if (this.keyMap[hash]) {
      const index = this.keyMap[hash].findIndex((element, i) => {
        if (element[0] === key) {
          return +1;
        } else {
          return -1;
        }
      });

      if (index >= 0) {
        this.keyMap[hash][index][1] = value;
      } else {
        this.keyMap[hash].push([key, value]);
      }
    } else {
      this.keyMap[hash] = [[key, value]];
    }

    return this;
  }

  get(key) {
    const hash = this._hash(key);
    if (this.keyMap[hash]) {
      const array = this.keyMap[hash];
      if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
          if (array[i][0] === key) return array[i]
        }
      }
    }

    return undefined;
  }

  keys() {
    const keys = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      const current = this.keyMap[i];
      if (current && current.length > 0) {
        for (let j = 0; j < current.length; j++) {
          keys.push(current[j][0]);
        }
      }
    }

    return keys;
  }

  values() {
    const values = [];
    const dic = {};

    for (let i = 0; i < this.keyMap.length; i++) {
      const current = this.keyMap[i];
      if (current && current.length > 0) {
        for (let j = 0; j < current.length; j++) {
          if (!dic[current[j][1]]) {
            values.push(current[j][1]);
            dic[current[j][1]] = true;
          }
        }
      }
    }

    return values;
  }
}

const hashTable = new HashTable();

hashTable.set('cyan', 1);
hashTable.set('pink', 3);
hashTable.set('three', 3);
console.log(hashTable.get('cyan'));
console.log(hashTable.get('pink'));
console.log(hashTable.get('three'));
console.log(hashTable.keys());
console.log(hashTable.values());
