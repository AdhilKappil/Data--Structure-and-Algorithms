class Node{
    constructor(key,value){
        this.key = key
        this.value = value;
        this.next = null;
    }
}

class HashTable{
    constructor(size){
        this.table = new Array();
        this.size = size;
    }

    hash(key){
        let total = 0;
        for(let i=0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size;
    }

    set(key, value) { 
        const index = this.hash(key);

        if(this.table[index] === null){
            this.table[index] =new Node(key,value)
           
        }else{
            let curr = this.table[index]
            while(curr){
                if(curr.key === key){
                    curr.value = value
                    return
                }
                curr = curr.next;
            }
            const node = new Node(key,value);
            node.next = this.table[index];
            this.table[index] = node;
        }
    }

    search(key){
        const index = this.hash(key);
        let curr = this.table[index]

        while(curr){
            if(curr.key === key){
                return curr.value
            }
            curr = curr.next
        }
        return undefined
    }

    remove(key){
        const index = this.hash(key);
        let curr = this.table[index];
        let prev = null

        while(curr){
           if(curr.key === key){
              if(prev){
                  prev.next = curr.next
               }else{
                  this.table[index] = curr.next
               }
               return
           }
             prev = curr;
             curr = curr.next
        }
       return console.log('hash table is empty');
    }

    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                let curr=this.table[i]
                console.log(this.table[i]);
                // console.log(`${i} ,${curr.key}, ${curr.value}`);
            }
        }
    }
}

const table = new HashTable(50)

table.set("name", "Adhil")
table.set('age', 24)
table.display()

// console.log(table.search("name"));

table.set("naem", "farzi")
table.set("name", "favas")
table.display()

console.log("After removing 'name':");
table.remove("name");
table.display();
console.log(table.search("naem"));