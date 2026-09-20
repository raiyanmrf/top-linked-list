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
  prepend(value) {
    if (this.isEmpty()) {
      this.head = new Node(value);
      return;
    }
    this.head = new Node(value, this.head);
  }
  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  print() {
    let currentNode = this.head;
    let str = "";
    while (currentNode.next !== null) {
      str += `[ ${currentNode.value} ]`;
      currentNode = currentNode.next;
    }
    str += `[ ${currentNode.value} ]`; // extra line for printing last node
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
}

const linkedList = new LinkedList();

linkedList.append(5);
linkedList.append(6);
linkedList.append(7);
linkedList.prepend(1);
console.log(linkedList.print());
console.log("size: ", linkedList.size());
console.log("head: ", linkedList.getHeadValue());
console.log("tail: ", linkedList.getTailValue());
console.log("at(2) : ", linkedList.at(2));
console.log("at(7) : ", linkedList.at(7));
