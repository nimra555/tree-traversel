//Binary search tree

//insert in a node.cd


// first make a node class 

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }

}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) { //add data
        const node = this.root; //refrence
        if (node === null) {
            this.root = new Node(data);
            console.log( this.root);
            return;
        }
        else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        console.log(node.left);
                        return;
                    }
                    else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                }
                else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        console.log(node.right);
                        return;
                    }
                    else if (node.right !== null) {
                        return searchTree(node.right)
                    }
                }
                else {
                    return null;
                }
                return searchTree(node);
            }

        }
    }
}

const bst = new BST();

bst.insert(50);
bst.insert(17);
bst.insert(72);
bst.insert(23);
bst.insert(54);
bst.insert(12);
bst.insert(76);







