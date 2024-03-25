import React, { useState } from "react";
import Item from "./Item";
import NewItemForm2 from "./NewItemForm2";
import {v4 as uuid} from 'uuid';

const ShoppingList = () => {

  const INITIAL_STATE = [
    {id:1, name:'Peanuts', qty: 4, id:uuid()},
    {id:2, name:'Salami', qty: 3, id:uuid()}
  ]
  const [items, setItems] =useState(INITIAL_STATE)

  const addItem = (newItem) => {
    setItems(items => [...items, { ...newItem, id: uuid() }]) // makes a new array of items that includes the existing items plus new item spread out. And add uuid
  } 

  
  return (
  <div>
    <h3>Shopping List</h3>
    <div><NewItemForm2 addItem={addItem} /></div>
    <div>
      {items.map(({id, name, qty }) => <Item id={id} qty={qty} name={name} key={id}/>)}
    </div>
  </div>
  )

}

export default ShoppingList;


