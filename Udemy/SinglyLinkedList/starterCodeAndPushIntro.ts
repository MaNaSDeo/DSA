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

/**
 * SinglyLinkedList<T> - A generic implementation of a singly linked list.
 *
 * This class provides various operations for manipulating a singly linked list,
 * including adding and removing elements, traversing the list, and more.
 *
 * @typeparam T The type of elements stored in the list.
 *
 * Insertion - O(1)
 * Removal - if at beginning O(1), else O(n)
 * Searching - O(N)
 * Access - O(N)
 */

class SinglyLinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Adds a new element to the end of the list.
   * @param val The value to be added.
   * @returns The updated list.
   *
   * Time complexity: O(1)
   * Space complexity: O(1)
   */
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

  /**
   * Traverses the list and logs each element's value.
   *
   * Time complexity: O(n), where n is the number of elements in the list
   * Space complexity: O(1)
   */
  traverse(): void {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  /**
   * Removes and returns the last element of the list.
   * @returns The value of the removed element, or undefined if the list is empty.
   *
   * Time complexity: O(n), where n is the number of elements in the list
   * Space complexity: O(1)
   */
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

  /**
   * Removes and returns the first element of the list.
   * @returns The value of the removed element, or undefined if the list is empty.
   *
   * Time complexity: O(1)
   * Space complexity: O(1)
   */
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

  /**
   * Adds a new element to the beginning of the list.
   * @param val The value to be added.
   * @returns The updated list.
   *
   * Time complexity: O(1)
   * Space complexity: O(1)
   */
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

  /**
   * Retrieves the node at the specified index.
   * @param index The index of the desired node.
   * @returns The node at the specified index, or null if the index is out of bounds.
   *
   * Time complexity: O(n), where n is the index
   * Space complexity: O(1)
   */
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

  /**
   * Updates the value of the node at the specified index.
   * @param index The index of the node to update.
   * @param val The new value.
   * @returns True if the update was successful, false otherwise.
   *
   * Time complexity: O(n), where n is the index
   * Space complexity: O(1)
   */
  set(index: number, val: T): boolean {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  /**
   * Inserts a new element at the specified index.
   * @param index The index at which to insert the new element.
   * @param val The value to be inserted.
   * @returns True if the insertion was successful, false otherwise.
   *
   * Time complexity: O(n), where n is the index
   * Space complexity: O(1)
   */
  insert(index: number, val: T): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      this.length++;
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      this.length++;
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

  /**
   * Removes the element at the specified index.
   * @param index The index of the element to remove.
   * @returns The value of the removed element, or undefined if the index is out of bounds.
   *
   * Time complexity: O(n), where n is the index
   * Space complexity: O(1)
   */
  remove(index: number): T | undefined {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }
    let prevNode = this.get(index - 1);
    if (!prevNode || !prevNode.next) return undefined;

    const removedNode = prevNode.next;
    prevNode!.next = removedNode.next;
    this.length--;

    return removedNode.val;
  }

  /**
   * Prints the list as an array for easy visualization.
   *
   * Time complexity: O(n), where n is the number of elements in the list
   * Space complexity: O(n), due to the creation of a temporary array
   */
  print(): void {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  /**
   * Reverses the order of elements in the list.
   * @returns The reversed list.
   *
   * Time complexity: O(n), where n is the number of elements in the list
   * Space complexity: O(1)
   */
  reverse(): SinglyLinkedList<T> {
    /**
     * Swap the head and tail
     * Create a variable called next
     * Create a variable called prev
     * Create a variable called node and initialize it to the head property.
     * Loop through the list
     * Set the next to be the next property on whatever node is
     * Set tht next property on the node to be whatever prev is
     * Set prev to be the value of the node variable
     * Set the node variable to be the value of the next variable.
     */
    if (!this.head || !this.head.next) {
      // List is empty or has only one node
      return this;
    }

    let node: ListNode<T> | null = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev: ListNode<T> | null = null;
    let next: ListNode<T> | null = null;

    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    if (this.tail) {
      this.tail.next = null;
    }
    // ["Hello", "There", "!", "How", "are", "You", "?"];
    /**
     * node = Hello; this.head = this.tail = ?; this.tail = node = Hello => ["?", "Hello"]
     * Inside While loop
     * node = Hello -> next = node.next = Hello.next = There; node.next = Hello.next = prev = null; prev = node = Hello; node = next = There
     * node = There -> next = There.next = !; node.next = There.next = prev = Hello; prev = node = There; node = next = !;
     * node = ! -> next = node.next = !.next = How; node.next = !.next = prev = There; prev = node = !; node = next = How;
     * node = How -> next = node.next = How.next = are; node.next = How.next = prev = !; prev = node = How; node = next = are;
     */
    return this;
  }
}

// Create a new SinglyLinkedList
let list = new SinglyLinkedList<string>();

// Test push method
console.log("Testing push method:");
list.push("Hello");
list.push("World");
list.push("!");
list.print(); // Expected output: ["Hello", "World", "!"]

// Test traverse method
console.log("\nTesting traverse method:");
list.traverse(); // Expected output: Hello, World, !

// Test pop method
console.log("\nTesting pop method:");
console.log("Popped value:", list.pop()); // Expected output: !
list.print(); // Expected output: ["Hello", "World"]

// Test shift method
console.log("\nTesting shift method:");
console.log("Shifted value:", list.shift()); // Expected output: Hello
list.print(); // Expected output: ["World"]

// Test unshift method
console.log("\nTesting unshift method:");
list.unshift("Start");
list.print(); // Expected output: ["Start", "World"]

// Test get method
console.log("\nTesting get method:");
console.log("Value at index 1:", list.get(1)?.val); // Expected output: World

// Test set method
console.log("\nTesting set method:");
list.set(0, "Beginning");
list.print(); // Expected output: ["Beginning", "World"]

// Test insert method
console.log("\nTesting insert method:");
list.insert(1, "Middle");
list.print(); // Expected output: ["Beginning", "Middle", "World"]

// Test remove method
console.log("\nTesting remove method:");
console.log("Removed value:", list.remove(1)); // Expected output: Middle
list.print(); // Expected output: ["Beginning", "World"]

// Test reverse method
console.log("\nTesting reverse method:");
list.push("End");
list.reverse();
list.print(); // Expected output: ["End", "World", "Beginning"]
