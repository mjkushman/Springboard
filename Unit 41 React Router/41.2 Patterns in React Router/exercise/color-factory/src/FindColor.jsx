import {useParams, Navigate} from 'react-router-dom'

import ColorDetail from './ColorDetail';
const  FindColor = ({colors}) => {

  // find the correct color to pass to ColorDetail
  const {colorName} = useParams()
  const color = colors.find(color => (color.colorName.toLowerCase() == colorName.toLowerCase()))
  if(!color){
    return (<Navigate to="/colors"/>)
  }

  return (
    <ColorDetail color={color} />
  )
}

export default FindColor;
