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
}

let firstDoublyLinkedList = new DoubleListNode(12);

firstDoublyLinkedList.next = new DoubleListNode(13);
firstDoublyLinkedList.next.prev = new DoubleListNode(12);

firstDoublyLinkedList.prev = new DoubleListNode(11);
firstDoublyLinkedList.prev.next = new DoubleListNode(12);
console.log("firstDoublyLinkedList", firstDoublyLinkedList);
