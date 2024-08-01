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

  pop(): DoubleListNode<T> | undefined {
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
    return poppedNode;
  }

  shift(): DoubleListNode<T> | undefined {
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
    return shiftedNode;
  }

  unshift(val: T): DoublyLinkedList<T> {
    let newNode = new DoubleListNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index: number): DoubleListNode<T> | null {
    if (index < 0 || index >= this.length) return null;
    let current: DoubleListNode<T>;
    if (index <= this.length / 2) {
      // index is in first half
      current = this.head!;
      for (let i = 0; i < index; i++) {
        current = current.next!;
      }
    } else {
      // index is in second half
      current = this.tail!;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev!;
      }
    }

    return current;
  }

  set(index: number, val: T): boolean {
    let desiredNode = this.get(index);
    if (!desiredNode) return false;
    else {
      desiredNode.val = val;
      return true;
    }
  }

  insert(index: number, val: T): boolean {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) this.unshift(val);
    if (index === this.length - 1) this.push(val);

    let prevNode = this.get(index - 1);
    // let nextNode = this.get(index);
    let nextNode = prevNode?.next!;
    let newNode = new DoubleListNode(val);

    newNode.next = nextNode;
    nextNode!.prev = newNode;
    newNode.prev = prevNode;
    prevNode!.next = newNode;

    this.length++;
    return true;
  }

  remove(index: number): DoubleListNode<T> | undefined {
    if (index < 0 || index >= this.length) return undefined;
    /*
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index)!;
    let nextNode = removedNode?.next!;
    let prevNode = removedNode?.prev!;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    removedNode.next = null;
    removedNode.prev = null;
    */
    let removedNode: DoubleListNode<T>;

    if (index === 0) removedNode = this.shift()!;
    else if (index === this.length - 1) removedNode = this.pop()!;
    else {
      removedNode = this.get(index)!;

      const nextNode = removedNode.next!;
      const prevNode = removedNode.prev!;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;

      removedNode.next = null;
      removedNode.prev = null;
    }

    this.length--;
    return removedNode;
  }
}
/*
// let firstDoublyLinkedList = new DoubleListNode(12);

// firstDoublyLinkedList.next = new DoubleListNode(13);
// firstDoublyLinkedList.next.prev = new DoubleListNode(12);

// firstDoublyLinkedList.prev = new DoubleListNode(11);
// firstDoublyLinkedList.prev.next = new DoubleListNode(12);
let firstDoublyLinkedList = new DoublyLinkedList();
firstDoublyLinkedList.push(13);
firstDoublyLinkedList.push(14);
firstDoublyLinkedList.push(15);
firstDoublyLinkedList.push(16);
firstDoublyLinkedList.push(17);
firstDoublyLinkedList.push(18);
// console.log("firstDoublyLinkedList", firstDoublyLinkedList);
// console.log(firstDoublyLinkedList.pop());
// console.log(firstDoublyLinkedList.shift());
// console.log(firstDoublyLinkedList.shift());
// console.log(firstDoublyLinkedList.shift());
// firstDoublyLinkedList.unshift(1);
console.log(firstDoublyLinkedList.get(2));
// console.log(firstDoublyLinkedList.set(2, 99));
// firstDoublyLinkedList.insert(2, 55);
firstDoublyLinkedList.remove(2);
console.log(firstDoublyLinkedList.get(2));
console.log(firstDoublyLinkedList.get(3));

// console.log("firstDoublyLinkedList", firstDoublyLinkedList);
*/

function testDoublyLinkedList() {
  const list = new DoublyLinkedList<number>();

  console.log("Testing push:");
  list.push(1).push(2).push(3);
  console.log(list);

  console.log("\nTesting pop:");
  console.log(list.pop());
  console.log(list);

  console.log("\nTesting shift:");
  console.log(list.shift());
  console.log(list);

  console.log("\nTesting unshift:");
  list.unshift(0);
  console.log(list);

  console.log("\nTesting get:");
  console.log(list.get(0));
  console.log(list.get(1));

  console.log("\nTesting set:");
  console.log(list.set(0, 10));
  console.log(list);

  console.log("\nTesting insert:");
  console.log(list.insert(1, 15));
  console.log(list);

  console.log("\nTesting remove:");
  console.log(list.remove(1));
  console.log(list);

  console.log("\nTesting edge cases:");
  console.log(list.pop());
  console.log(list.pop());
  console.log(list.pop());
  console.log(list.pop()); // Should return undefined
  console.log(list);

  list.push(1).push(2);
  console.log("\nFinal list:");
  console.log(list);
}

testDoublyLinkedList();
