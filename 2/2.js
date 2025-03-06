class Node {
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;

    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(data){
        const newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    remove(index){
        if(index < 0 || index >= this.size){
            return "error"
        } 
        let current = this.head;
        if(index === 0){
            this.head = current.next;
            if(this.head){
                this.head.prev = null;
            }
        } else if(index === this.size - 1){
            current = this.tail;
            this.tail = current.prev;
            this.tail.next = null;
        } else {
            for(let i = 0; i < index; i++){
                current = current.next;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        this.size--;
        return current.data;
    }

    get(index){
        if(index < 0 || index >= this.size){
            return "error"
        } 
        let current = this.head;
            for(let i = 0; i < index; i++){
                current = current.next;
            }
            return current.data;
    }

    getSize(){
        return this.size;
    }

    printList(){
        let current = this.head;
        let result = "";
        while(current){
            result += current.data + " ";
            current = current.next;
        }
        return result.trim();
    }

    rearrange(){
        if(this.size < 2) return;
        let oddNodes = [];
        let evenNodes = [];

        let current = this.head;
        let index = 1;
        while(current){
            if(index % 2 !== 0){
                oddNodes.push(current);
            } else{
                evenNodes.push(current);
            }
            current = current.next;
            index++;
        }
        let newHead = evenNodes[0];
        let prev = null;
        evenNodes.forEach(node => {
            if(prev){
                prev.next = node;
                node.prev = prev;
            }
            prev = node;
        });

        oddNodes.forEach(node => {
            if(prev){
                prev.next = node;
                node.prev = prev;
            }
            prev = node;
        });

        if(prev){
            prev.next = null;
        }
        this.head = newHead;
        this.tail = prev;
    }
}

function Main (){
    const list = new DoublyLinkedList();
    let inputData = [10, 20, 30, 40, 50];
    inputData.forEach(i => {list.add(i);});

    console.log("список до перегрупування:", list.printList());
    list.rearrange();
    console.log("покажчик на перший елемент після перегрупування:", list.head.data);
    console.log("список після перегрупування:", list.printList());
}
Main();