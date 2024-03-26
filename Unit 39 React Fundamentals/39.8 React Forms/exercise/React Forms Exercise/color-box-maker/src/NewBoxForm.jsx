import {useState} from 'react'

const NewBoxForm = ({addBox}) => {
    
    const initialForm = {
        bgcolor:"#ffffff",
        width:50,
        height:50
    }

    const [formData, setFormData] = useState(initialForm);

    const handleChange = (e) => {
        // console.log(e.target.value)
        const {name, value} = e.target
        
        setFormData((formData) => ({
            ...formData, 
            [name]: value
        }));
        console.log(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addBox(formData)

        // I like it better not resetting
        // setFormData({
        //     width:50,
        //     height:50
        // })
    }


  return (
    <>
      <h3> Create your box </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bgcolor">Color</label>
        <input name="bgcolor" type="color" id="bgcolor" value={formData.bgcolor} onChange={handleChange}/>

        <label htmlFor="width">Width</label>
        <input name="width" type="range" min="10" max="100" value={formData.width} onChange={handleChange}/>

        <label htmlFor="height">Height</label>
        <input name="height" type="range" min="10" max="100" value={formData.height} onChange={handleChange}/>

        <button>Create</button>
      </form>
    </>
  );
};

export default NewBoxForm;
