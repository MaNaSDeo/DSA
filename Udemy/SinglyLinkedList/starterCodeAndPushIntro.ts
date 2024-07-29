/**
 * Link List - is a collection of Nodes.
 * Node - store a piece of data(val) & a refrence to next node(next)
 */

class ListNode<T> {
  // <T> - is a generaic type, so it can take value of string, number, boolen, objects, arrays, anything.
  val: T;
  next: ListNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

let first = new ListNode("Hi");
first.next = new ListNode("There");
first.next.next = new ListNode("!");
first.next.next.next = new ListNode(" How");
first.next.next.next.next = new ListNode("are");
first.next.next.next.next.next = new ListNode("you");
first.next.next.next.next.next.next = new ListNode("?");

// console.log("first", first);

class SinglyLinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: T): SinglyLinkedList<T> {
    const newNode = new ListNode(val);
    if (!this.head) {
      // assign to head, i.e. if list is empty.
      this.head = newNode;
      this.tail = newNode;
    } else {
      // assign to head, i.e. if list is not empty.
      if (this.tail) {
        this.tail.next = newNode;
      }
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();
console.log("empty list", list);
list.push("Hello").push("There").push("!");
console.log("list", list);
