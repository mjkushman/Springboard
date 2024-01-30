import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Signup = () => {

    // get context from context holder
    const {signupFormSubmit} = useContext(UserContext)

    // Prefilled form fields for dev convenience.
    // const INITIAL_FORM_DATA ={
    //     firstName:'mike',
    //     lastName:'kush',
    //     email:'mike@gmail.com',
    //     username:'mikekush',
    //     password:'123456'
    // }
    // Use this version of initial data for prod
    const INITIAL_FORM_DATA ={
        firstName:'',
        lastName:'',
        email:'',
        username:'',
        password:''
    }
    
    const [formData, setFormData] = useState(INITIAL_FORM_DATA)

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(formData => ({...formData, [name]:value}))
  }
  
    const handleSubmit =(e) => {
    e.preventDefault()
    // do something with the form data
    signupFormSubmit(formData)
    // reset the form
    setFormData(() => INITIAL_FORM_DATA)
  }
  
  
  
    return (
    <>
      <h1>Create a new account</h1>
      <div className="m-5 p-5">
        <h2 className="text">Enter your information to get started</h2>
        <form 
            className="flex flex-col text-black"
            onSubmit={handleSubmit} >
          {/* <label htmlFor="firstName">/label> */}
          <input
            className="m-2 p-2 rounded-lg"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            className="m-2 p-2 rounded-lg"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            className="m-2 p-2 rounded-lg"
            type="text"
            name="username"
            id="username"
            placeholder="Pick a username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            className="m-2 p-2 rounded-lg"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
            <button>Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
