/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
  return usersArray.find(function(val,i){
    // console.log(val,val.username)
    return val.username == username;
  })
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  // console.log(usersArray,username)
  let toPop = usersArray.findIndex(function(val,i){
    return(val.username == username)
  })
  // console.log('to pop',usersArray[toPop])
  if(toPop >= 0){
    usersArray.pop(usersArray[toPop]);
    // console.log('to pop',usersArray[toPop])
    // console.log('users Array',usersArray);
    return usersArray[toPop];
}
    else return undefined;
  
}
