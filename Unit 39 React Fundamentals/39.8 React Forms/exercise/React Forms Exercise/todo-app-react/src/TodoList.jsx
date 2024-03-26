import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { useState } from "react";
import {v4 as uuid} from 'uuid';



const TodoList = () => {
    // define initial state
    const INITIAL_STATE = [
        {task:"Create a list of todos", id:uuid()}
    ]

    //instantiate state for todo list
    const [todos, setTodos] = useState(INITIAL_STATE)

    // function to submit the todo form
    const addTodo = (formData) => {
        setTodos((todos) => ([...todos, {...formData, id:uuid() }]
        ))
    }

    // function to handle removing todo from state
    const removeTodo = (todo) => {
        setTodos(todos.filter(t => t !== todo))
    }


    //return the component
    return (
        <>
        <h2>To-Do List</h2>
        <NewTodoForm addTodo={addTodo}/>
        <ul>
        {todos.map((todo) => <Todo task={todo.task} key={todo.id} removeTodo={ ()=> removeTodo(todo) }/>)}
        </ul>
        </>
    )
}

export default TodoList