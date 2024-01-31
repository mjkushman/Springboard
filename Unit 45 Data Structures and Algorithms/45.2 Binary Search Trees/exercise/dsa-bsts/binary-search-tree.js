class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val); // create the new node

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    // assuming there is a root node...

    let currentNode = this.root; // sets the root node as current node

    while (currentNode) {
      if (newNode.val < currentNode.val) {
        // check if the new node is less than current. if yes,
        if (!currentNode.left) {
          //  before moving left, see if there is a left
          currentNode.left = newNode; // if there isn't, insert here
          // console.log("returning this", this);
          return this; // and return
        } else {
          currentNode = currentNode.left; // if there is a left, left is the new current
        }
      } else if (newNode.val > currentNode.val) {
        // new node was not less than current, so
        if (!currentNode.right) {
          // before moving right, see if there is a right
          currentNode.right = newNode; // if there is no right, new becomes right
          // console.log("returning this", this);
          return this; // and return
        } else {
          currentNode = currentNode.right; // move right
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    // Check for a root. If none, new node becomes root.
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    // explore the left leg
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currentNode.left);
    } else {
      // explore the right leg
      if (!currentNode.right) {
        currentNode.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currentNode.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    if (val == currentNode.val) return currentNode // found right away
    
    let foundTarget = false;
    while (currentNode && !foundTarget) {
      if (val < currentNode.val){
        //travel lett
        currentNode = currentNode.left; 
      } else if (val > currentNode.val){
        // travel right
        currentNode = currentNode.right;
      } else {
        foundTarget = true;
      }
    }
    if(!foundTarget) return undefined;
    return currentNode;
  }


  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    // if there's no tree, return undefined immediately
    if (!this.root) return undefined

    if (val < currentNode.val) {
      if(!currentNode.left) return undefined;
      return this.findRecursively(val, currentNode.left);
    } else if (val > currentNode.val){
      if(!currentNode.right) return undefined;
      return this.findRecursively(val, currentNode.right);
    }
    return currentNode
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let currentNode = this.root
    let visitedArray = [];

    function traverse(node) {
      visitedArray.push(node.val)
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(currentNode)
    return visitedArray;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let currentNode = this.root
    let visitedArray = [];

    function traverse(node) {
      node.left && traverse(node.left);
      visitedArray.push(node.val)
      node.right && traverse(node.right);
    }
    traverse(currentNode)
    return visitedArray;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let currentNode = this.root
    let visitedArray = [];

    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      visitedArray.push(node.val)
    }
    traverse(currentNode)
    return visitedArray;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let currentNode = this.root;
    let toVisit = [];
    let visited = [];

    toVisit.push(currentNode);

    while(toVisit.length){
      currentNode = toVisit.shift();
      visited.push(currentNode.val);
      if (currentNode.left) {
        toVisit.push(currentNode.left);
      }
      if (currentNode.right) {
        toVisit.push(currentNode.right)
      }
    }
    return visited;

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
