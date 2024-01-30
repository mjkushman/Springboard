import { useParams } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext, useState } from "react";
import JoblyApi from "../../api";
import { useEffect } from "react";

const ProfileUpdateForm = ({INITIAL_FORM_DATA, updateProfile}) => {
  

  // user can update their firstname, lastname, and email. Password is required to make changes


  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('attempting udpate')
    updateProfile({
      firstName:formData.firstName,
      lastName:formData.lastName,
      email:formData.email
    })
    setFormData(INITIAL_FORM_DATA)
  }


  return (
    <>
      <h3>Make changes to your profile below</h3>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          disabled
          className="m-3 p-4 rounded-md text-black"
          // name="username"
          // id="username"
          type="text"
          placeholder={formData.username}
        />
        <input
          className="m-3 p-4 rounded-md text-black"
          name="firstName"
          id="firstName"
          type="text"
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
          className="m-3 p-4 rounded-md text-black"
          name="lastName"
          id="lastName"
          type="text"
          onChange={handleChange}
          value={formData.lastName}
        />
        <input
          className="m-3 p-4 rounded-md text-black"
          name="email"
          id="email"
          type="email"
          placeholder=""
          onChange={handleChange}
          value={formData.email}
        />
        <button className="m-3 p-2">Update</button>
      </form>
    </>
  );
};

export default ProfileUpdateForm;
