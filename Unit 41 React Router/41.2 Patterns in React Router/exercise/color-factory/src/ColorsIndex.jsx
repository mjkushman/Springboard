import {Link} from 'react-router-dom'
import {useState} from 'react'
import ColorDetail from './ColorDetail'
const ColorsIndex = ({colors}) =>{


  return (
    <>
    {/* <Link to="/colors/new"><button>Add a color</button></Link> */}
    <h2 className='text-3xl font-bold'>This is a list of the colors</h2>
    {colors.map(color => (<Link key={color.id} to={color.colorName.toLowerCase()}> {color.colorName} </Link>   ) ) }

    </>
  )
}

export default ColorsIndex;
