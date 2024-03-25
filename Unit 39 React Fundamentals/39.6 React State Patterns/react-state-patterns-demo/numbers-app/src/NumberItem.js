// import React from "react";

// /** Render num w/remove button.
//  *
//  * Props:
//  * - value: # to show
//  * - remove: parent fn to call
//  */

// function NumberItem(props) {

//   /** Delete num via parent fn */
//   function handleRemove(evt) {
//     props.remove(props.value);
//   }

//   return (
//     <li>
//       {props.value}
//       <button onClick={handleRemove}>
//         X
//       </button>
//     </li>
//   );
// }
// // end

// export default NumberItem;

// REWRITING IT MYSELF BELOW

import React, {useState} from 'react';

const NumberItem = ({value, remove}) => {

  const handleRemove = () => {
    remove(value)
  }
  
  return (
    <li>
      <button onClick={handleRemove}>{value}</button>
    </li>
  )
}

export default NumberItem
