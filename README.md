**Note: I implement this task in javascript language..so that i create index.html file in which i add script source and create app.js for coding**

# What is Tree Traversel?
    Tree is a hierarchical data structure which stores the information naturally in the form of hierarchy
    unlike linear data structures like, Linked List, Stack, etc. 
    A tree contains nodes(data) and connections(edges) which should not form a cycle.

###### Following are the few frequently used terminologies for Tree data structure.

* Node — A node is a structure which may contain a value or condition, or represent a separate data structure.
- Root — The top node in a tree, the prime ancestor.
* Child — A node directly connected to another node when moving away from the root, an immediate descendant.
* Parent — The converse notion of a child, an immediate ancestor. 
* Leaf — A node with no children.
* Internal node — A node with at least one child.
* Edge — The connection between one node and another.
* Depth — The distance between a node and the root.
* Level — the number of edges between a node and the root + 1
* Height — The number of edges on the longest path between a node and a descendant leaf.
* Breadth — The number of leaves.
* Sub Tree — A tree T is a tree consisting of a node in T and all of its descendants in T.

## Binary Search Tree
    Binary Search Tree is a tree is a tree in which each node has atmost two children.A Binary Search tree is a binary tree in which 
    nodes that have lesser value are stored on the left while the nodes with a higher value are stored at the right.
    
   **In this task i use binary search tree insert elementary operation**
    
1. first i write a class node,In this class i write data,left and right because every node has three part left,data,right.
2. Second i write a class BST and assign root value is null then write insert function.
3. In this function first create const node and assign this.root then check condition.if node = null create a root instance...first
   i check root,left node then right node because i use pre-order method 
4. else create a search tree function in this function first i check if data < node.data if data is less then so it check to left
  because in bst left data is less then root.if node data.left is null then create a instance if it is not null then return searchTree(node.left)...
  it's a recursive function and it again check...in else i use nested if,if-else and else condition for checking left or right node.
5. else i check if data > node.left if data is greater then so it check to right because in bst right data is greater then root.
   if node data.right is null then create a instance if it is not null then return searchTree(node.right)...
6. else return null
7. then we call a function return searchTree(node)
8. then create a instance of BST by new keyword.
9. last i add the value like...bst.insert(50).
  
  **Check the output on console**
