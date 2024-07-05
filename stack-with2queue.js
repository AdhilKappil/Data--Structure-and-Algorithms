class StackUsingQueues {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }
    push(x) {
        this.q1.push(x);
    }
    pop() {
        if (this.q1.length === 0) {
            console.log("Stack is empty");
            return;
        }
        while (this.q1.length >1) {
            this.q2.push(this.q1.shift());
        }
        const poppedElement = this.q1.shift();
        // Swap the queues
        [this.q1, this.q2] = [this.q2, this.q1]
        return poppedElement;
    }
    top() {
        if (this.q1.length === 0) {
            console.log("Stack is empty");
            return;
        }
       return this.q1[this.q1.length-1]
    }
    empty() {
        return this.q1.length === 0;
    }
}
// Example usage:
const stack = new StackUsingQueues();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3
console.log(stack.top()); // 2
