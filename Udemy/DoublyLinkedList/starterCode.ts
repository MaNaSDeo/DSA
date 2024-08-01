class DoubleListNode<T> {
  val: T;
  next: DoubleListNode<T> | null;
  prev: DoubleListNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList<T> {
  head: DoubleListNode<T> | null;
  tail: DoubleListNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: T): DoublyLinkedList<T> {
    const newNode = new DoubleListNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop(): T | undefined {
    if (!this.head) return undefined;

    let poppedNode = this.tail!;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev!;
      this.tail.next = null;
    }
    // Detach the popped node from the list
    poppedNode.prev = null;
    poppedNode.next = null;

    this.length--;
    return poppedNode.val;
  }
  shift(): T | undefined {
    if (!this.head) return undefined; // We can check for this.length === 0 as well.

    let shiftedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head!.prev = null;
    }

    shiftedNode.next = null;
    shiftedNode.prev = null;

    this.length--;
    return shiftedNode.val;
  }
}

// let firstDoublyLinkedList = new DoubleListNode(12);

// firstDoublyLinkedList.next = new DoubleListNode(13);
// firstDoublyLinkedList.next.prev = new DoubleListNode(12);

// firstDoublyLinkedList.prev = new DoubleListNode(11);
// firstDoublyLinkedList.prev.next = new DoubleListNode(12);
let firstDoublyLinkedList = new DoublyLinkedList();
firstDoublyLinkedList.push(13);
firstDoublyLinkedList.push(14);
console.log("firstDoublyLinkedList", firstDoublyLinkedList);
// console.log(firstDoublyLinkedList.pop());
console.log(firstDoublyLinkedList.shift());
console.log(firstDoublyLinkedList.shift());
console.log(firstDoublyLinkedList.shift());

console.log("firstDoublyLinkedList", firstDoublyLinkedList);
