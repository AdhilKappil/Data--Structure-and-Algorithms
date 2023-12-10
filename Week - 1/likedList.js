class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    // adding valueas to start head will move the left and tile tail will stay : head -> value 3 -> value 2 -> value 1 
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head;
            this.head = node
        }
        this.size++
    }                     // o(1)t


    // adding valueas to end head will stay and tail will move to the end : head -> value 1 -> value 2 -> value 3
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let pos = this.head
            while(pos.next){
                pos = pos.next
            }
            pos.next = node
        }
        this.size++
    }                      // o(n)t


    // printing the values
    print(){
        if(this.isEmpty()){
            console.log('list is empty');
        }else{
            let curr = this.head
            let display = ''
            while(curr){
                display += `${curr.value} `
                curr = curr.next
            }
            console.log(display);
        }
    }
}


const list = new linkedList()
console.log('list is empty?',list.isEmpty());
console.log('list size',list.getSize());
list.print()

list.append(10)
list.print()

list.append(30)
list.append(50)
list.print()