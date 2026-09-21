class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node();
  }

  isEmpty() {
    return this.head.value === null && this.head.next === null;
  }

  chain(...values) {
    let head = new Node(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
      const node = new Node(values[i]);
      current.next = node;
      current = current.next;
    }

    let tail = current;

    return { head, tail };
  }
  prepend(...values) {
    const { head, tail } = this.chain(...values);
    if (this.isEmpty()) {
      this.head = head;
      return;
    }
    tail.next = this.head;
    this.head = head;
  }
  append(...values) {
    const { head, tail } = this.chain(...values);
    if (this.isEmpty()) {
      this.head = head;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = head;
  }

  toString() {
    let str = "";
    if (this.isEmpty()) return str;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      str += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }
    str += `( ${currentNode.value} ) -> null`; // extra line for printing last node
    return str;
  }
  size() {
    if (this.isEmpty()) return 0;
    let currentNode = this.head;
    let count = 0;
    while (currentNode.next !== null) {
      count++;
      currentNode = currentNode.next;
    }
    count++; // extra line for counting last node
    return count;
  }

  getHeadValue() {
    if (this.isEmpty()) return undefined;
    const value = this.head.value;
    return value;
  }

  getTailValue() {
    if (this.isEmpty()) return undefined;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

  at(index = 0) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode.next !== null) {
      if (count === index) break;
      currentNode = currentNode.next;
      count++;
    }

    return count === index ? currentNode.value : undefined;
  }

  contains(value) {
    if (this.isEmpty()) return false;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }

    if (currentNode.value === value) return true;
    return false;
  }

  findIndex(value) {
    if (this.isEmpty()) return -1;
    let currentNode = this.head;
    let count = 0;
    while (currentNode.next !== null) {
      if (currentNode.value === value) return count;
      currentNode = currentNode.next;
      count++;
    }

    if (currentNode.value === value) return count;
    return -1;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    const value = this.head.value;

    if (this.head.next === null) this.head = new Node();
    else this.head = this.head.next;

    return value;
  }

  insertAt(index, ...values) {
    if (index < 0) throw new Error("RangeError: Valid Range is 0 to N");

    let currentNode = this.head;
    let prev = null;
    let count = 0;
    let shouldInsert = false;
    do {
      if (count === index) {
        shouldInsert = true;
        break;
      }
      prev = currentNode;
      currentNode = currentNode.next;

      count++;

      if (count === index) {
        shouldInsert = true;
        break;
      }
    } while (currentNode.next !== null);

    if (shouldInsert) {
      const { head, tail } = this.chain(...values);

      if (this.isEmpty()) {
        this.head = head;
        return;
      }

      if (prev === null) {
        tail.next = this.head;
        this.head = head;
        return;
      }

      if (currentNode.next === null) {
        currentNode.next = head;
        return;
      }

      tail.next = currentNode;
      prev.next = head;
      return;
    }

    if (count + 1 === index) {
      const { head, tail } = this.chain(...values);
      currentNode.next = head;
      return;
    }

    throw new Error(`RangeError: Valid Input Range is 0 to ${count + 1}`); // index out of range
  }
}

const linkedList = new LinkedList();

// linkedList.append(5);
// linkedList.append(6);
// linkedList.append(7);
// linkedList.prepend(1);
// console.log(linkedList.toString());
// console.log("size: ", linkedList.size());
// console.log("head: ", linkedList.getHeadValue());
// console.log("tail: ", linkedList.getTailValue());
// console.log("at(2) : ", linkedList.at(2));
// console.log("at(7) : ", linkedList.at(7));
// console.log("contains(5) : ", linkedList.contains(5));
// console.log("contains(6) : ", linkedList.contains(6));
// console.log("contains(8) : ", linkedList.contains(8));
// console.log("findIndex(1) : ", linkedList.findIndex(1));
// console.log("findIndex(6) : ", linkedList.findIndex(6));
// console.log("findIndex(8) : ", linkedList.findIndex(8));
// console.log("pop() : ", linkedList.pop());
// console.log("pop() : ", linkedList.pop());
// console.log("pop() : ", linkedList.pop());
// console.log("pop() : ", linkedList.pop());
// console.log("pop() : ", linkedList.pop());
// console.log("pop() : ", linkedList.pop());
// linkedList.append(5, 6, 7);
// linkedList.prepend(1, 2, 3, 4);

// console.log(linkedList.toString());

// linkedList.insertAt(3, 24, 22, 27);
// console.log(linkedList.toString());
// linkedList.insertAt(4, 243, 322, 237);
// console.log(linkedList.toString());
// linkedList.insertAt(0, "raiyan");
console.log(linkedList.toString());
// console.log("size: ", linkedList.size());
// console.log("head: ", linkedList.getHeadValue());
// console.log("tail: ", linkedList.getTailValue());
