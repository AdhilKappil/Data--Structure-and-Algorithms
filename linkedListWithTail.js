class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class likedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      return null;
    } else {
      let pos = this.head;
      let dis = "";
      while (pos) {
        dis += `${pos.value} `;
        pos = pos.next;
      }
      return console.log(dis);
    }
  }

  removeStart() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    [[this.head, this.tail] = [this.tail, this.head]]
  }

  reverseRecursively() {
    const reverseHelper = (current, prev) => {
      if (!current) {
        [[this.head, this.tail] = [this.tail, this.head]]
        return;
      }
      const nextNode = current.next;
      current.next = prev;
      reverseHelper(nextNode, current);
    };

    reverseHelper(this.head, null);
  }

  removeEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next != this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  removeValue(value) {
    if (value === this.head.value) {
      this.removeStart(value);
    } else if (value === this.tail.value) {
      this.removeEnd(value);
    } else {
      let pos = this.head;
      let prev = null;
      while (pos) {
        if (pos.value === value) {
          prev.next = pos.next;
          this.size--;
          return value;
        }
        prev = pos;
        pos = pos.next;
      }
      return "this value not in this list";
    }
  }

  reverseFrom(node) {
    let prev = null;
    let curr = node;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }

  // Method to check if the linked list is a palindrome
  isPalindrome() {
    if (this.isEmpty() || this.head.next === null) return true;

    // Step 1: Find the middle of the linked list
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let secondHalfHead = this.reverseFrom(slow);

    // Step 3: Compare the first half with the reversed second half
    let firstHalfHead = this.head;
    let copyOfSecondHalfHead = secondHalfHead; // To restore the list later
    while (secondHalfHead) {
      if (firstHalfHead.value !== secondHalfHead.value) {
        // Restore the original list before returning false
        this.reverseFrom(copyOfSecondHalfHead);
        return false;
      }
      firstHalfHead = firstHalfHead.next;
      secondHalfHead = secondHalfHead.next;
    }

    // Restore the original list before returning true
    this.reverseFrom(copyOfSecondHalfHead);
    return true;
  }

}

const list = new likedList();

list.append(10);
list.append(20);
list.append(30);

// list.print();

// list.prepend(5);
// list.prepend(1);
// list.print();
// // console.log(list.removeStart());
// // console.log(list.removeValue(20));
// list.reverseRecursively()
// list.print();

console.log(list.isPalindrome());