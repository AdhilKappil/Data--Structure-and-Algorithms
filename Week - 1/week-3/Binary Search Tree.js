class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const node = new Node(value);
        if(this.root === null){
            this.root = node
        }else{
            this.inserNode(this.root,node)
        }
    }

    inserNode(root,node){
        if(root.value > node.value){
            if(root.left === null){
                root.left = node
            }else{
                this.inserNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node;
            }else{
                this.inserNode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return false;
        }
        if(root.value === value){
            return true;
        }else if(root.value > value){
            return this.search(root.left, value);
        }else{
           return this.search(root.right, value)
        }
    }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(20);
bst.insert(5);
console.log(bst.search(bst.root,5));