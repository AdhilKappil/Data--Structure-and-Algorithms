class MinHeap{
    constructor(){
        this.heap = [];
    }

    insert(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1)
    }
    shiftUp(index){
        while(index>0){
            let parentInd = Math.floor((index-1)/2);
            if(this.heap[parentInd] > this.heap[index]){
                this.swap(parentInd, index);
                index = parentInd
            }else{
                break;
            }
        }
    }
    swap(i, j){
       [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
    
    display(){
        console.log(this.heap);
    }
    search(value){
        return this.heap.includes(value)
    }
    remove(){
        const removeIndex = this.heap.pop();
        const lastValue = this.heap[this.heap.length-1]
        if(this.heap.length>0){
            this.heap[0] = lastValue;
            this.shifDown(0)    
        }
        return removeIndex
    }
    shifDown(index){
       let leftChild = Math.floor(index * 2 + 1)
       let rightChild = Math.floor(index * 2 + 2)
       let minIndex = index

        if(leftChild<this.heap.length && this.heap[leftChild]<this.heap[minIndex]){
            minIndex = leftChild;
        }
        if(rightChild<this.heap.length && this.heap[rightChild]<this.heap[minIndex]){
            minIndex = rightChild;
        }
        if(minIndex != index){
            this.swap(minIndex, index)
            this.shifDown(minIndex)
        }
    }
    build(arr) {
        this.heap = [...arr];
    
        // Start from the last non-leaf node and perform shifDown
        for(let i= Math.floor(this.heap.length /2)-1 ; i>=0; i--){
            this.shifDown(i)
        }
    }
    
}

const heap = new MinHeap();


const arr = [5,3,2,7,9,3,45,1,3,33,0,4]  
heap.build(arr)
heap.display()