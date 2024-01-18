const  ColorDetail = ({color}) => {
  console.log(color)
  const hex = color.colorHex
  console.log(hex)
  return (
    <div style={{backgroundColor:hex} } >
      <h1 className="text-5xl">This is {color.colorName}</h1>
    </div>
  )
}

export default ColorDetail
