
interface UserInterface {
  name: string;
  email: string;
  age?: number;
}

interface EmployeeInterface extends UserInterface {
  salary: number;
}


function fireEmployee(emp: EmployeeInterface) {
}

fireEmployee({
    name:'mike',
    email:'mike@gmail.com',
    age:30,
    salary:200000 // Salary is allowed as part of the Employee extension
})



