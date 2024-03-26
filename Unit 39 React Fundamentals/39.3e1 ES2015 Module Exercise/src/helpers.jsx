import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function Choice(items) {
    // console.log(items)    
    const itemNum = Math.floor(Math.random() * items.length )

    return(items[itemNum])
}

function Remove (items, item) {
    const removed = items.pop(item)
    return(removed)
}

export {Choice, Remove}