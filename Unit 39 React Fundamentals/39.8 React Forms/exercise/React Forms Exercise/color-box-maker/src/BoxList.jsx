import Box from './Box';
import { useState } from 'react';
import NewBoxForm from './NewBoxForm';


const BoxList = () => {

  const initialBoxes = [
    {height:"100", width:"100", bgcolor:"#ffffff"}
  ]
  const [boxes, setBoxes] = useState(initialBoxes)

  const addBox = (newBox) => {
    setBoxes(boxes =>[...boxes, {...newBox}])
    console.log('newBox',newBox)
  }

  const removeBox = (box) => {
    setBoxes(boxes.filter(b => b!==box))
  }

  return (
    <>
      <div>
        {boxes.map(((box,index) => 
        <Box 
          height={`${box.height}px`} 
          width={`${box.width}px`} 
          bgcolor={box.bgcolor}
          remove={()=>removeBox(box)}
          key={index}
        />))}
      </div>
      <div>
        <NewBoxForm addBox={addBox}/>
      </div>
    </>
  )
}

export default BoxList
