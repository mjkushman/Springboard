import React from 'react'

export default function Form() {
    function handleClick() {
        console.log("clicked")

    }
    function handleSubmit(e: React.FormEvent){
        console.log('you submitted')
    }
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        // For inputs, we also need to pass the Type for the target 
        console.log('handled change ',e.target.value)
    }




    return (
        <div>
            <form action="" onSubmit={handleSubmit}>

            <input type="text" onChange={handleChange}/> 

            <button onClick={handleClick}>click me </button>
            </form>
        </div>
    )
}