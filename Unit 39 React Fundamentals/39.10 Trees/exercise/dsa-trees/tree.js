/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) { // expect to pass a tree node to create a tree 
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root){
      return 0
    }
    let stack = [this.root];
    let sum =0

    while (stack.length){
      let current = stack.pop();

      sum += current.val
      for (let child of current.children){
        stack.push(child)
      }
    }
    return sum
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root){
      return 0
    }
    let stack = [this.root]
    let evens = []
    while (stack.length) {
      let current = stack.pop();
      if (current.val % 2 == 0){
        evens.push(current)
      }
      for(let child of current.children){
        stack.push(child)
      }
    }
    return (evens.length)
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root){
      return 0
    }
    let stack = [this.root]

    let greaters = []

    while (stack.length) {
      let current = stack.pop();
      if (current.val > lowerBound){
        greaters.push(current)
      }
      for(let child of current.children){
        stack.push(child)
      }
    }
    return (greaters.length)
  }
}

module.exports = { Tree, TreeNode };
