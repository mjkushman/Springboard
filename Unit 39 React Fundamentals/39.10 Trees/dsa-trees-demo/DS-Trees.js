class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
  // findDFS(val) {
  //   const toVisitStack = [this];
  //   while (toVisitStack.length) {
  //     const current = toVisitStack.pop();
  //     console.log("VISITING:", current.val);
  //     if (current.val === val) {
  //       return current;
  //     }
  //     for (let child of current.children) {
  //       toVisitStack.push(child);
  //     }
  //   }
  // }

// Mike writing a find function
  findDepthFirst(val) { // call find() on the root element
    const toVisitStack = [this]; //resolves to the root element we called find() on. Stack is this
    while(toVisitStack.length){ // continue running until the stack is empty
      const current = toVisitStack.pop(); // current item to look at is the one most recently added to stack
      if(current.val === val){  // Checks if this item is the one we want
        return current; // return it if yes
      }
      for(let child of current.children){  
        toVisitStack.push(child); // If its not our desired item, add all of this items children to the stack, rather than proceeding to the next sibling immediate.y
      }
    }
  }



  // findBFS(val) {
  //   const toVisitQueue = [this];
  //   while (toVisitQueue.length) {
  //     const current = toVisitQueue.shift();
  //     console.log("VISITING:", current.val);
  //     if (current.val === val) {
  //       return current;
  //     }
  //     for (let child of current.children) {
  //       toVisitQueue.push(child);
  //     }
  //   }
  // }

  findBreadthFirst(val) { // call find() on the root element
    const toVisitQueue = [this]; //resolves to the root element we called find() on. Stack is this
    while(toVisitQueue.length){ // continue running until the stack is empty
      const current = toVisitQueue.shift(); // current item to look at is the one taken from front of queue
      if(current.val === val){  // Checks if this item is the one we want
        return current; // return it if yes
      }
      for(let child of current.children){  
        toVisitQueue.push(child); // If this node has children, add them to the back of the queue
      }
    }
  }


}

class Tree {
  constructor(root) {
    this.root = root;
  }
  findInTreeDFS(val) {
    return this.root.findDFS(val);
  }
  findInTreeBFS(val) {
    return this.root.findBFS(val);
  }
}

let htmlEl = new Node("html", [
  new Node("head", [new Node("title")]),
  new Node("body", [new Node("ul", [new Node("li"), new Node("li2")])]),
]);

//             html
//       head      body
//     title            ul
//                    li  li2

// let htmlEl = new Node("html",
//         [new Node("head",
//             [new Node("title")]),
//         new Node("body",
//             [new Node("ul",
//                 [new Node("li"), new Node("li2")])])]);

// let amy = new Node('amy',
//     [new Node('bob'),
//      new Node('barb'),
//      new Node('barry')])

// let amy = new Node('amy');

// let bob = new Node('bob');
// let barb = new Node('barb');
// let barry = new Node('barry');

// amy.children.push(bob);
// amy.children.push(barb);
// amy.children.push(barry);
