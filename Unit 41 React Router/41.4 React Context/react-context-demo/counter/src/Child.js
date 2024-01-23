import React, {useContext} from "react";
import Grandchild from "./Grandchild";
import ThemeContext from "./ThemeContext";

function Child() {
  
  const color = useContext(ThemeContext)
  return (
    <div style={ {border: `4px solid ${color}`}}>
      <p>I'm the child!</p>
      <Grandchild />
    </div>
  );
}

export default Child;
