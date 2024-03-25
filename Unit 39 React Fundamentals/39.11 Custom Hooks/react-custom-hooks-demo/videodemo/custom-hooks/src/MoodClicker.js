import React from "react";
// import useToggleState from './hooks/useToggleState'
import useToggleState from "./hooks/useToggleState";
import {useState} from 'react';
import './MoodClicker.css'

// const MoodClicker = () => {
//   const [isHappy, toggleIsHappy] = useToggleState(true)
//   const [isDarkMode, toggleIsDarkMode] = useToggleState(false);
//   return (
//     <div className={isDarkMode ? 'Clicker-dark' : 'Clicker-light'}>
//       <h1>{isHappy ? '😀' : '😭'}</h1>
//       <button onClick={toggleIsHappy}>Change Mood</button>
//       <button onClick={toggleIsDarkMode}>Toggle Dark/Light Mode</button>
//     </div>

//   )
// }

const MoodClicker = () => {
  const [isHappy, toggleIsHappy] = useToggleState(true)
  const [isDarkMode, toggleIsDarkMode] = useToggleState(false)
  
  return (
  <div className={isDarkMode ? 'Clicker-dark' : 'Clicker-light' }>
    <h1> {isHappy ? '😊' : '🥹' }   </h1>
    <button onClick={toggleIsHappy}>Change mood</button>
    <button onClick={toggleIsDarkMode}> dark mode</button>
  </div>
  )
}

export default MoodClicker;