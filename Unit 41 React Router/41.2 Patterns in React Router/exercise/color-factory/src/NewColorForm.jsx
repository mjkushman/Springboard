import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
function NewColorForm({addColor}) {

  const [formData, setFormData] = useState(
    {
      colorName:'',
      colorHex:'#000000'
    })

  const navigate = useNavigate();
  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData(formData => ({...formData,[name]:value}))
    // console.log(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(formData);
    navigate('/colors/')
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <div>
      <label htmlFor='colorHex'>Choose a color</label>
      </div>
      <div>
      <input type="color" name="colorHex" id='colorHex' value={formData.colorHex} onChange={handleChange} />
      </div>
      <div>
      <label htmlFor='colorName'>And name it</label>
      </div>
      <div>
      <input type="text" name="colorName" id='colorName' value={formData.colorName} onChange={handleChange} />
      </div>
      <button>ADD</button>
    </form>
  )
}

export default NewColorForm;
