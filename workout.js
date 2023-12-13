class Node{
    constructor(value){
        this.value = value;
        this.next  = null; 
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
        return this.size;
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            let pos= this.head;
            while(pos.next){
                pos = pos.next;
            }
            pos.next = node;
        }
        this.size++
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
          node.next = this.head;
          this.head = node;
        }
        this.size++
    }

    insert(value,index){
        if(index<0 || index>this.size){
            return console.log('enter a valid index');
        }else if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let pos = this.head;
            for(let i=0; i<index-1; i++){
                pos = pos.next;
            }
            node.next = pos.next
            pos.next = node
        }
        this.size++
    }
    
    removeIndex(index){
        if(this.isEmpty() || index<0 || index>=this.size){
            return console.log('null');;
        }if(index === 0){
            this.head = this.head.next;
        }else{
            let removeNode;
            let pos = this.head
            for(let i=0; i<index-1; i++){
                pos = pos.next;
            }
            removeNode = pos.next;
            pos.next = removeNode.next;
        }
        this.size--
    }

    removeValue(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value === value){
            this.head = this.head.next;
            this.size --
        }else{
            let pos = this.head;
            while(pos.next && pos.next.value != value){
                pos = pos.next;
            }
            if(pos.next){
                const removeNode = pos.next;
                pos.next = removeNode.next;
                this.size--;
                return value
            }
          return null
        }
    }

    search(value){
        if(this.isEmpty()){
            return null
        }else{
            let curr = this.head;
            let i=0;
            while(curr){
                if(curr.value === value){
                    return i
                }
                i++;
                curr = curr.next
            }
            return false
        }
    }

    reverse(){
        let prev = null;
        let curr = this.head;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev
    }

    print(){
        let curr = this.head
        let display = ''
        while(curr){
            display += `${curr.value} `
            curr = curr.next
        }
        console.log(display);
    }
}

const list = new linkedList();

console.log(list.isEmpty());
console.log(list.getSize());

list.append(10)
console.log(list.isEmpty());
console.log(list.getSize());
list.append(15)
list.append(20)
list.append(10)
list.print()


