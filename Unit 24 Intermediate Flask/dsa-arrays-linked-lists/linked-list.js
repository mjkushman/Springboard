/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) {
      this.push(val);
    }
    this.length += 1;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length -= 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    if (currentNode.next) {
      this.tail = currentNode.next;
      return currentNode.next.next;
    } else {
      this.tail = currentNode;
      return currentNode.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length) {
      let currentNode = this.head;
      this.head = currentNode.next;
      return currentNode;
    }
    throw "list is empty";
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < this.length && idx >= 0) {
      let currentIdx = 0;
      let currentNode = this.head;
      while (idx > currentIdx) {
        currentNode = currentNode.next;
        currentIdx += 1;
      }
      return currentNode.val;
    }
    throw "Index is outside list range";
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < this.length && idx >= 0) {
      let currentIdx = 0;
      let currentNode = this.head;
      while (idx > currentIdx) {
        currentNode = currentNode.next;
        currentIdx += 1;
      }
      currentNode.val = val;
    }
    throw("That index is outside list range")
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let currentIdx = 0
    if(idx < currentIdx || idx >= this.length) {
      throw("Index is invalid)")
    }
    let currentNode = this.head
    newNode = new Node(val)
    while(idx > currentIdx+1){
      currentNode = currentNode.next;
      currentIdx +=1;
    }
    newNode.next = currentNode.next
    currentNode.next = newNode;
    if(idx == 0){
      this.head == newNode
    }
    this.length +=1
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentIdx = 0
    let currentNode = this.head
    if(idx < currentIdx || idx >= this.length){
      throw("Invalid index for this list")
    }
    while(idx > currentIdx+1){
      currentNode = currentNode.next
      currentIdx +=1;
    }
    let removedVal = currentNode.next.val
    currentNode.next = currentNode.next.next
    this.length -= 1
    return removedVal
  }

  /** average(): return an average of all values in the list */

  average() {
    let currentNode = this.head
    let sum = 0
    while(currentNode){
      sum += currentNode.val
      currentNode=currentNode.next
    }
    return (sum/this.length)
  }
}

module.exports = LinkedList;
