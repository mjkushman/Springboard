class Dog {
    name:string
    age:number
    constructor(name:string, age:number) {
        this.name= name;
        this.age = age
    }

    bark(): string {
        return "Woof!"
    }

    eat(food:string): void {
        console.log(`${this.name} eats ${food}`)
    }
}

const zeke = new Dog('Zeke', 3)