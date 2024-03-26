const Todo = ({task, removeTodo}) => {
    
    const handleRemove = () =>{
        removeTodo()
    }
    
    return (
        <li>{task}<button onClick={handleRemove}>X</button></li>
    )
}

export default Todo