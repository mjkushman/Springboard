// Part 1
// For this assignment you will be combining your knowledge of DOM access and events to build a todo app!

// As a user, you should be able to:
// * Add a new todo (by submitting a form)
// * Mark a todo as completed (cross out the text of the todo)
// * Remove a todo

// Part 2
// Now that you have a functioning todo app, save your todos in localStorage! Make sure that when the page refreshes, the todos on the page remain there.
//// after every click(?) save loop through all li's and save to localStorage. Want to add the whole element tag


//Requirements:
// Add a form to page. Form should accept text input
// Upon submit, the inputted text should be appended to a li
// All li should have 2 buttons:
// 1) mark item as completed --> updates styling to strikethrough. (Add a completed class)
// 2) remove item (without completing)
//DONE

// Commit the list of todos and their completed/notcmpleted status to localStorage
// Read the list of todos from localstorage upon page load



const todoList = document.querySelector('ol[id="todoList"]') //Select the ol
const form = document.querySelector('#todoForm') //declare the form variable

let savedList = {}
localStorage.getItem('todos') == '' ? savedList = {} : savedList = localStorage.getItem('todos') // retrieves a saved list if there was one

// for(i of savedList){
//     console.log(i)
//     //to do: save to storage
// }

//******NEED HELP! ******************

// Storing and retrieving the list to/from storage

// ******************************

//handle the submit action
form.addEventListener('submit',function(e){
    e.preventDefault();
    const newTodo = document.querySelector('#input') //select the value of the input
    const newLi = document.createElement('li'); // creates a new li element in the doc
    newLi.innerText = newTodo.value; // sets the li's inner text to the value of input
    todoList.append(newLi); // appends the new li to the bottom of the list
    // add a REMOVE button 
    const removeBtn = document.createElement('button');
    removeBtn.innerText='Remove'
    newLi.append(removeBtn);
    //add checkbox 
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox') // makes the input a checkbox
    newLi.prepend(checkBox); // add the button to the front of the element
    // updateSavedList(newTodo.value)
    updateSavedList(todoList.children)
    console.log(todoList)
})

//handle the action of buttons
todoList.addEventListener('click', function(e){
    if(e.target.innerText === 'Remove'){
    console.log("clcked remove");
    console.log(e.target)
    e.target.parentElement.remove();
    } else if(e.target.tagName === 'INPUT'){
        console.log("clcked Done");
        e.target.parentElement.classList.toggle("completed") //apply "completed" class to linethrough
        console.log(e.target.classList)
    }
})

function updateSavedList(list){
    // console.log('this is updatesavedList function: ' +list)
    localStorage.setItem('todos',JSON.stringify(list)) // adds item to local stogage
    for (li of list){
        console.log(list.item(li));
        console.log(li);
        //localStorage.setItem('todos',JSON.stringify(li)) // adds item to local stogage

    }
}

// console.log('heres whats in local storage now' + localStorage.getItem(JSON.parse('todos')))