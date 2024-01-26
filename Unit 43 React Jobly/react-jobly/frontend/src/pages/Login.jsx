import { useContext, useState } from "react";
import UserContext from "../UserContext";
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
   
  
  // Prefilled form fields for dev convenience.
  const INITIAL_FORM_DATA = {
    // username: "mikekush",
    // password: "123456",
    username: "",
    password: "",
  };


  const { loginFormSubmit } = useContext(UserContext);

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
   const {name, value} = e.target
    setFormData(formData => ({...formData, [name]:value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   loginFormSubmit(formData);
   // take person to companies page after 1 second
   setTimeout(() => {
      navigate('/companies')
   }, 1000)
  };

  return (
    <>
      <h1>Login page</h1>
      <div className="m-5 p-5">
        <h2 className="text">Log in to your account</h2>
        <form className="flex flex-col text-black" onSubmit={handleSubmit}>
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
          <button>Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
