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

    delete(value){
        this.root = this.deleteNode(this.root,value)
    } 

    deleteNode(root,value){
        if(root === null){
            return root;
        }
        if(value<root.value){
            root.left = this.deleteNode(root.left, value)
        }else if(value>root.value){
            root.right = this.deleteNode(root.right, value)
        }else{
            if(!root.left && !root.right){
                return null
            }else if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root
    }

    findClosestValue(root, target){
        let close = root.value;
        while(root){
            if(Math.abs(root.value - target) < Math.abs(close - target)){
                close = root.value
            }
            if(root.value === target){
                return root.value
            }else if(root.value > target){
                root = root.left;
            }else{
                root = root.right
            }
        }
        return close
    }

}

function isBST(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    if (!root) {
        return true;
    }

    if (root.value <= min || root.value >= max) {
        return false;
    }

    return (
        isBST(root.left, min, root.value) && isBST(root.right, root.value, max)
    );
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(20);
bst.insert(3);
bst.insert(8);
console.log(bst.search(bst.root, 230));
bst.breadthTraversal(bst.root)
// console.log(bst.min(bst.root));
// console.log('jfdhgkjfd');
// bst.delete(10)
// bst.breadthTraversal(bst.root)
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
console.log('close',bst.findClosestValue(bst.root,7));
