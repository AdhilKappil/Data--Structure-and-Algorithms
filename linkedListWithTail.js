class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class likedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size;
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size ++
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size ++
    }

    print(){
        if(this.isEmpty()){
            return null;
        }else{
            let pos = this.head;
            let dis =''
            while(pos){
                dis +=`${pos.value} `
                pos = pos.next
            }
            return console.log(dis);;
        }
    }

    removeStart(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value;
        this.head = this.head.next
        this.size --
        return value
    }

    reverse(){
        let prev = null 
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.tail = this.head
        this.head = prev
      }

      reverseRecursively() {
        const headNode = this.head
        const reverseHelper = (current, prev) => {
            if (!current) {
                this.head = prev;
                return;
            }
            const nextNode = current.next;
            current.next = prev;
            reverseHelper(nextNode, current);
        };
  
        reverseHelper(this.head, null);
        this.tail = headNode;
    }
    
    removeEnd(){
        if(this.isEmpty()){
            return null
        }
        const value = this.tail.value;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
            let prev = this.head;
            while(prev.next != this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size --;
        return value
    }
}

const list = new likedList();

list.append(10)
list.append(20)
list.append(30)

list.print()

list.prepend(5);
list.prepend(1);
list.print()
console.log(list.removeStart());
console.log(list.removeEnd());
list.print()