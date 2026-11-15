'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');
// PART A: STACK -Stack stores items using LIFO: Last In, First Out.
class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the top of the stack.
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element.
  pop() {
    return this.items.pop();
  }

  // Return the top element without removing it.
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty.
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of elements.
  size() {
    return this.items.length;
  }

  // Convert the stack elements into text.
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// Push the required actions.
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');

// Display the required results.
console.log('Top Action:', actionHistory.peek());
console.log('Undo Action:', actionHistory.pop());
console.log('Remaining Actions:', actionHistory.toString());
console.log('Stack Size:', actionHistory.size());


// PART B: QUEUE-follows FIFO: First In, First Out.
class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element at the back.
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element.
  dequeue() {
    return this.items.shift();
  }

  // Return the front element without removing it.
  front() {
    return this.items[0];
  }

  // Check if the queue is empty.
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of elements.
  size() {
    return this.items.length;
  }

  // Convert the queue elements into text.
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// Enqueue the requests in arrival order.
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');

console.log('Next Request:', waitingRequests.front());

// Process two requests.
console.log('Processed:', waitingRequests.dequeue());
console.log('Processed:', waitingRequests.dequeue());

console.log('Remaining Requests:', waitingRequests.toString());
console.log('Queue Size:', waitingRequests.size());


// PART C: PRIORITY QUEUE

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  // Insert the request according to its priority.
  enqueue(request, priority) {
    const item = {
      request: request,
      priority: priority
    };

    let position = 0;

    // Find the correct position.
    // <= keeps earlier requests first when priorities are equal.
    while (
      position < this.items.length &&
      this.items[position].priority <= priority
    ) {
      position++;
    }

    this.items.splice(position, 0, item);
  }

  // Remove and return the highest-priority request.
  dequeue() {
    return this.items.shift();
  }

  // Return the number of requests.
  size() {
    return this.items.length;
  }

  // Display all requests and their priorities.
  print() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(
        `${this.items[i].request}, Priority ${this.items[i].priority}`
      );
    }
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// Add the required requests.
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);

console.log('Initial Priority Order:');
urgentRequests.print();

// Process the first priority request.
const processedPriorityRequest = urgentRequests.dequeue();

console.log(
  'Processed Priority Request:',
  `${processedPriorityRequest.request}, Priority ${processedPriorityRequest.priority}`
);

console.log('Remaining Priority Requests:');
urgentRequests.print();


// PART D: LINKED LIST - node represents one element in the linked list.
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Add a node at the end.
  append(element) {
    const node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }

    this.length++;
  }

  // Insert a node at a specific position.
  insert(position, element) {
    if (position < 0 || position > this.length) {
      return false;
    }

    const node = new Node(element);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let previous = this.head;

      for (let i = 1; i < position; i++) {
        previous = previous.next;
      }

      node.next = previous.next;
      previous.next = node;
    }

    this.length++;
    return true;
  }

  // Remove and return a node at a specific position.
  removeAt(position) {
    if (
      position < 0 ||
      position >= this.length ||
      this.head === null
    ) {
      return undefined;
    }

    let removed;

    if (position === 0) {
      removed = this.head;
      this.head = this.head.next;
    } else {
      let previous = this.head;

      for (let i = 1; i < position; i++) {
        previous = previous.next;
      }

      removed = previous.next;
      previous.next = removed.next;
    }

    this.length--;

    return removed.element;
  }

  // Find the position of an element.
  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.element === element) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  // Remove an element by its value.
  remove(element) {
    const index = this.indexOf(element);

    if (index !== -1) {
      return this.removeAt(index);
    }

    return undefined;
  }

  // Check if the linked list is empty.
  isEmpty() {
    return this.length === 0;
  }

  // Return the number of nodes.
  size() {
    return this.length;
  }

  // Traverse the linked list and return its elements as text.
  toString() {
    const elements = [];
    let current = this.head;

    while (current !== null) {
      elements.push(current.element);
      current = current.next;
    }

    return elements.join(' -> ');
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

// Append the required requests.
completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');

// Insert Ticket #400 at position 0.
completedRequests.insert(
  0,
  'Ticket #400 - Computer Diagnosed'
);

// Insert Ticket #405 at the end.
completedRequests.insert(
  completedRequests.size(),
  'Ticket #405 - Browser Updated'
);

// Display the complete list.
console.log(
  'Complete List:',
  completedRequests.toString()
);

// Search for Ticket #402.
console.log(
  'Index of Ticket #402:',
  completedRequests.indexOf(
    'Ticket #402 - Printer Connected'
  )
);

// Remove the item at position 1.
console.log(
  'Removed at Position 1:',
  completedRequests.removeAt(1)
);

// Remove Ticket #403 by value.
console.log(
  'Removed by Value:',
  completedRequests.remove(
    'Ticket #403 - Antivirus Updated'
  )
);

// Display final results.
console.log(
  'Final List:',
  completedRequests.toString()
);

console.log(
  'Final Size:',
  completedRequests.size()
);