// class Triangle {
// 	greet() {
// 		console.log('HELLO FROM TRIANGLE!!!');
// 	}
// 	display() {
// 		console.log(`Triangle with sides of ${this.a} and ${this.b}`);
// 	}
// }

class Triangel{
	greet(){
		console.log('hello from the triangel');
	}
	display(){
		console.log(`this triangle has sides ${this.a} and ${this.b}`)
	}
}


// const firstTri = new Triangle();
// firstTri.a = 3;
// firstTri.b = 4;
// const secondTri = new Triangle();
// secondTri.a = 9;
// secondTri.b = 12;

const firstTri = new Triangel(); // creates a new Triangle called firstTri
firstTri.a = 3// gives Triangle a property 'a' with value 3
firstTri.b = 4 // gives Triangle a property 'b' with value 4
