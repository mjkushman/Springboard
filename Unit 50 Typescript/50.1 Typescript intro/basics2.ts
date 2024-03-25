let score:number = 4
let color:string = 'green'
let food: string


let arr:any[] = []
// arr.toLowerCase()


const evens = [2,4,6,7] // TS knows its an array of numbers
const colors = ['red','orange'] // TS knows its an array of strings
// colors.push(true) // throws an error if pushing a different type on to typed array

const numBoolArray: (number| boolean)[] = [1,true,0,false,4,true,false]

const highScore: number|boolean = 1


//objects

const user = {
    name:'mike',
    age: 100,
}


function isSeven(n:number): string {
    if (n === 7) return 'that is a seven'

    return "not a seven"
}

function greet(name:string):string {
    // do some stuff
    return `Hello ${name}`
}

function voidFunc(name:string):void {
    // do some stuff
    console.log(name)
}

const greeting = greet("Mike")



let mikesAge: number|string = 30;
console.log(mikesAge.toUpperCase())