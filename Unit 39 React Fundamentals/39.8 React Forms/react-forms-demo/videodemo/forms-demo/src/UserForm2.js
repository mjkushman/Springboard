import React, {useState} from 'react';

const UserForm2 = () => {
  // const [username, setUsername] = useState('placeholder username')
  // const [email,setEmail] = useState('email placeholder')
  const intialState=({
    email:"",
    username:"",
    password:""
  })

  const [formData, setFormData] = useState(intialState)


  const handleChange = (e) => {
    
    console.log('on change,', e.target.name, e.target.value)
    const {name,value,password} = e.target
    setFormData(data => ({
      ...data,
      [name]:value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {username, email, passowrd} = formData //destructure 
    // console.log('form submitted', formData.name);
    setFormData(intialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input 
        id="username" 
        name="username" 
        type="text" 
        value={formData.username} 
        onChange={handleChange} />
      
      <label htmlFor="email">Email</label>
      <input 
        id="email" 
       name="email" 
       type="text" 
       value={formData.email} 
       onChange={handleChange}/>

      <label htmlFor="password">Password</label>
      <input 
        id="password" 
       name="password" 
       type="password" 
       value={formData.password} 
       onChange={handleChange}/>

      <button> Add Me </button>
    </form>
  )
}

export default UserForm2