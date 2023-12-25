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

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    breadthTraversal(root){
        const queue = [];
        queue.push(this.root);
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    
    max(root){
        if(!root.right){
            return root.value;
        }else{
            return this.max(root.right)
        }
    }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(20);
bst.insert(3);
bst.insert(8);
// bst.breadthTraversal(bst.root)
console.log(bst.min(bst.root));