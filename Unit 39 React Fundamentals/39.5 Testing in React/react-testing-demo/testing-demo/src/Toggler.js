import React, {useState } from "react";

function Toggler() {
    const [isShowing, setIsShowing ] = useState(true);

    return ( 
        <div>
            <button onClick={()=> setIsShowing(!isShowing)}>Toggle me</button>
        </div>
    )
}

export default Toggler;