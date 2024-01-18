import {Routes, Route, Navigate} from 'react-router-dom'
import {useState} from 'react'
import ColorsIndex from './ColorsIndex'
import FindColor from './FindColor'
import NewColorForm from './NewColorForm'
import {v1 as uuid} from 'uuid'

const RoutesList = () => {

  const INITIAL_COLORS =[
    {
      colorName:'white',
      colorHex:'#ffffff',
      id:uuid()
    },
    {
      colorName:'Red',
      colorHex:'#A20101',
      id:uuid()
    }
  ]
  const [colors,setColors] = useState(INITIAL_COLORS)  

  const addColor =(formData) => {
    setColors(colors => [...colors,{...formData,id:uuid()}])
  }


  return (
    <>
  <Routes>
    <Route path="/colors/:colorName" element={<FindColor colors={colors} />}/>
    <Route path="/colors/new" element={<NewColorForm addColor={addColor}/>}/>
    <Route path="/colors" element={<ColorsIndex colors={colors}/>}/>
    <Route path="/*" element={<Navigate to="/colors" />}/>
  </Routes>
    </>
  )
}

export default RoutesList;
