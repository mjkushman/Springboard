import React from 'react';
import UserForm from './UserForm';
import UserForm2 from './UserForm2';
import ShoppingList from "./ShoppingList";
import ShoppingList2 from "./ShoppingList2";
import './App.css';

function App() {
  return (
    <div className="App">
      <UserForm2/>
      <ShoppingList2 />
      
      
      {/* <ShoppingList /> */}
      {/* <UserForm /> */}
    </div>
  );
}

export default App;
