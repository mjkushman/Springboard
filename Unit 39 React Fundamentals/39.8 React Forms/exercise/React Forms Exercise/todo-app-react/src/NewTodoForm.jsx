import Todo from "./Todo";
import { useState } from "react";


const NewTodoForm = ({addTodo}) => {
    const INITIAL_STATE = {
        task: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(formData)
        setFormData(INITIAL_STATE)
    }

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]:value
        }));
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="task"> Task </label>
            <input 
            name="task"
            id="task"
            type="text"
            value={formData.task}
            onChange={handleChange}
            />

        <button>Add</button>

        </form>
        
    )
}

export default NewTodoForm