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

  traverse(): void {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  pop(): T | undefined {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    //If there is only one element.
    if (!current.next) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current.val;
    }

    //Traverse to the second-to-last node
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    //Set the new tail
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    return current.val;
  }

  shift(): T | undefined {
    if (!this.head) return undefined;

    let currentHead = this.head;

    if (!currentHead.next) {
      //If there is only one element in the list.
      this.head = null;
      this.tail = null;
    } else {
      //If there is multiple element
      this.head = currentHead.next;
    }
    this.length--;

    currentHead.next = null; // Good practice to completely detach the shifted node from the list

    return currentHead.val;
  }

  unshift(val: T): SinglyLinkedList<T> {
    let newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index: number): ListNode<T> | null {
    if (index >= this.length || index < 0) return null;
    let count = 0,
      current = this.head;
    while (count !== index) {
      current = current!.next;
      count++;
    }
    return current;
  }
  set(index: number, val: T): boolean {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index: number, val: T): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    let newNode = new ListNode(val);
    let prevNode = this.get(index - 1);
    let tempNode = prevNode!.next;
    newNode.next = tempNode;
    prevNode!.next = newNode;
    this.length++;
    return true;
  }
}

let list = new SinglyLinkedList();
// console.log("empty list", list);
list.push("Hello").push("There").push("!");
// console.log("list", list);
list.traverse();
// let poppedValue = list.pop();
// console.log("Popped value:", poppedValue);

// console.log("After pop:");
// list.shift();
// console.log("first shift list", list);
// list.shift();
// console.log("second shift list", list);
// list.shift();
// console.log("third shift list", list);
// list.unshift("Okay");
// console.log("list", list);

// list.traverse();
// console.log(list.get(0));
// console.log(list.get(3));
// console.log(list.get(-10));
// console.log(list.get(10));
// console.log(list.set(1, 456));
// console.log(list.set(11, 456));
// console.log(list.get(1)?.val);
list.insert(1, 453);
list.insert(0, "first");
// console.log(list.length);
list.traverse();
