class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    
    add(data) {
      const newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
    removeMultiplesOfThree() {
      while (this.head !== null && this.head.data % 3 === 0) {
        this.head = this.head.next;
        this.size--;
      }
      let current = this.head;
      let prev = null;
  
      while (current !== null) {
        if (current.data % 3 === 0) {
          prev.next = current.next;
          this.size--;
        } else {
          prev = current;
        }
        current = current.next;
      }
    }  
    insertAfterEqualPairs() {
      let current = this.head;
      while (current !== null && current.next !== null) {
        if (current.data === current.next.data) {
          const newNode = new Node(88);
          newNode.next = current.next.next;
          current.next.next = newNode;
          this.size++;
          current = newNode.next; 
        } else {
          current = current.next;
        }
      }
    }
  
   
    printList() {
      let result = "";
      let current = this.head;
      while (current !== null) {
        result += current.data + " ";
        current = current.next;
      }
      return result.trim();
    }
  }
  function main() {
    const list = new LinkedList();
    let inputData = [10, 15, 15, 3, 7, 6, 12, 20, 20, 88, 88, 4];
  
    inputData.forEach(i => list.add(i));
    console.log("Початковий список: ", list.printList());
  
    list.removeMultiplesOfThree();
    console.log("Список після видалення кратних 3: ", list.printList());
  
    list.insertAfterEqualPairs();
    console.log("Список після додавання 88: ", list.printList());
  }
  
  main();  
    