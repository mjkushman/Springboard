import React from 'react';

const Counter = () => {
    const [count,setCount ] = React.useState(99)
    return (
        <>
        <h1> Count is {count} </h1>
        <button onClick={ () => setCount(count + 1) } >Add</button>
        <button onClick={ () => setCount(count - 1) } >Subtract </button>
        </>
    )
}

export default Counter