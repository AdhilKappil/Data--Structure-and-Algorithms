class Queue{
    constructor(){
        this.itmes = []
    }
    enqueue(element){
        this.itmes.push(element)
    }
    dequeue(){
        if(this.itmes.length === 0){
            return 'underflow'
        }
        this.itmes.shift();
    }
    isEmpty(){
       return this.itmes.length === 0
    }
    print(){
        console.log(this.itmes);
    }
    peek(){
        console.log(this.itmes[0]);
    }
}

const queue = new Queue ()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.print()
queue.peek()
queue.dequeue()
queue.print()
console.log(queue.isEmpty());


