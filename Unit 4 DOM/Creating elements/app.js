const newTodo = document.createElement('li');
const boldText = document.createElement('b');
const ul = document.querySelector('ul');


boldText.textContent = "DONT FORGOT TOT LOCK THE COOP!";
newTodo.append(boldText)
newTodo.classList='todo';
ul.append(newTodo)


