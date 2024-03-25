import React, { useState, useEffect } from "react";

// const useLocalStorageState = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     let value
//     try {
//       value = JSON.parse(
//         window.localStorage.getItem(key) || JSON.stringify(defaultValue)
//       )
//     } catch (e) {
//       console.log(e)
//       value = defaultValue;
//     }
//     return value;
//   })
//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state))
//   }, [key, state])

//   return [state, setState];
// }

const useLocalStorageState = (key, defaultValue) => {
  // normally you should add a try/catch because trying to json parse something that isn't json will break
  const [state,setState] = useState( () => {
    let value = JSON.parse( window.localStorage.getItem(key) || JSON.stringify(defaultValue) ) 
    
    return value
  })

  useEffect(()=>{
    window.localStorage.setItem(key,JSON.stringify(state))
  },[state])


  return [state,setState]

}



export default useLocalStorageState;