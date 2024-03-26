
const Box = ({bgcolor, width, height, remove}) => {

  const handleRemove = () =>{
    remove()
  } 

  return (
    <>
    <div style={{width:width, height:height, backgroundColor:bgcolor}} >
      <button onClick={handleRemove}>X</button>
    </div>
      </>
  )
}

export default Box
 