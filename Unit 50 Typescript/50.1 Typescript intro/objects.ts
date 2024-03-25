let currentUser: {username:string; age:number} ={
    username:'Mike',
    age:100
}

// INTERFACES

// too cumbersome to write each time:
function printUsername(user: {username:string; age:number}): void {
    console.log(user.username)
}
// declare the interface
interface User {
    username:string;
    age?:number
}
// easier after using interface
function printAge(user: User): void {
    console.log(user.age)
}

const admin:User = {
    username: "Mike"
}

function returnUser(user: User): User {
    // simply returns the user with the type of User
    return user
}