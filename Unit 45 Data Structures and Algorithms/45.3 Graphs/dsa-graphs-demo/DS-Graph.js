// class PersonNode {
//   constructor(name, adjacent = new Set()) {
//     this.name = name;
//     this.adjacent = adjacent;
//   }
// }

class PersonNode {
  constructor(name, adjacent = new Set()) {
    this.name = name;
    this.adjacent = adjacent;
  }
}

// const homer = new PersonNode('homer simpson')
// const marge = new PersonNode('marge simpson')
// const maggie = new PersonNode('maggie simpson')
// homer.adjacent.add(marge)
// homer.adjacent.add(maggie)
// marge.adjacent.add(homer)
// marge.adjacent.add(maggie)
// maggie.adjacent.add(homer)
// maggie.adjacent.add(marge)

// THIS IS THE ONE I WROTE: That's right, I commented out the part I wrote and kept the starter code.

// class FriendGraph {
//   constructor() {
//     this.nodes = new Set();
//   }
//   addPerson(node) {
//     // just adds a node to the class
//     this.nodes.add(node);
//   }
//   addPeople(peopleList) {
//     // accepts an array, Loops and calls addPerson on each one
//     for (let node of peopleList) {
//       this.addPerson(node);
//     }
//   }
//   setFriends(person1, person2) {
//     // adds each person to the others list of adjacencies
//     person1.adjacent.add(person2);
//     person2.adjacent.add(person1);
//   }
//   areConntectedBFS(person1, person2) {
//     // should return true/false {}
//     let toVisitQueue = [person1];
//     let seen = new Set(toVisitQueue);
//     while (toVisitQueue.length) {
//       let currentPerson = toVisitQueue.shift();

//       if (currentPerson === person2) return true;

//       for (let neighbor of currentPerson.adjacent) {
//         if (!seen.has(neighbor)) {
//           toVisitQueue.push(neighbor);
//           seen.add(neighbor);
//         }
//       }
//     }
//     return false;
//   }
//   areConntectedDFS(person1, person2) {
//     // should return true/false {}
//     let toVisitStack = [person1];
//     let seen = new Set(toVisitQueue);
//     while (toVisitStack.length) {
//       let currentPerson = toVisitStack.pop();

//       if (currentPerson === person2) return true;

//       for (let neighbor of currentPerson.adjacent) {
//         if (!seen.has(neighbor)) {
//           toVisitStack.push(neighbor);
//           seen.add(neighbor);
//         }
//       }
//     }
//     return false;
//   }

//   areConnectedRecursive(person1, person2, seen=new Set(person1)) {
//     if(person1 == person2) return true;
//     for(let neighbor of person1.adjacent) {
//       if(!seen.has(neighbor)){
//         seen.add(neighbor);
//         if(this.areConnectedRecursive(neighbor, person2, seen)){
//           return true;
//         }
//       }
//     }
//     return false;
//   }
// }

class FriendGraph {
  constructor() {
    this.nodes = new Set();
  }
  addPerson(node) {
    this.nodes.add(node);
  }
  addPeople(peopleList) {
    for (let node of peopleList) {
      this.addPerson(node);
    }
  }
  setFriends(person1, person2) {
    person1.adjacent.add(person2);
    person2.adjacent.add(person1);
  }
  areConnectedBFS(person1, person2) { // expect true/false if connected
    let toVisitQueue = [person1];
    let seen = new Set(toVisitQueue);
    while (toVisitQueue.length) {
      let currPerson = toVisitQueue.shift();
      console.log("BFS VISITING:", currPerson.name);

      if (currPerson === person2) return true;

      for (let neighbor of currPerson.adjacent) {
        if (!seen.has(neighbor)) {
          toVisitQueue.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    return false;
  }
  areConnectedDFS(person1, person2) {
    let toVisitStack = [person1];
    let seen = new Set(toVisitStack);
    while (toVisitStack.length) {
      console.log(toVisitStack.map((node) => node.name));

      let currPerson = toVisitStack.pop();
      console.log("DFS VISITING:", currPerson.name);

      if (currPerson === person2) return true;

      for (let neighbor of currPerson.adjacent) {
        if (!seen.has(neighbor)) {
          toVisitStack.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    return false;
  }
  areConnectedRecursive(person1, person2, seen = new Set([person1])) {
    if (person1 === person2) return true;
    for (let neighbor of person1.adjacent) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        if (this.areConnectedRecursive(neighbor, person2, seen)) {
          return true;
        }
      }
    }
    return false;
  }
}

const homer = new PersonNode("homer simpson");
const marge = new PersonNode("marge simpson");
const maggie = new PersonNode("maggie simpson");
const lisa = new PersonNode("lisa simpson");
const grampa = new PersonNode("grampa simpson");

const friends = new FriendGraph();
friends.addPeople([homer, marge, maggie, lisa, grampa]);
friends.setFriends(homer, marge);
friends.setFriends(homer, lisa);
friends.setFriends(homer, maggie);
friends.setFriends(marge, maggie);
friends.setFriends(maggie, lisa);
friends.setFriends(lisa, grampa);

const moe = new PersonNode("moe");
const barney = new PersonNode("barney");
const lenny = new PersonNode("lenny");
friends.addPeople([moe, barney, lenny]);
friends.setFriends(moe, barney);
friends.setFriends(barney, lenny);

// friends.areConnected(marge, moe)
