import { useParams } from "react-router-dom";
import UserContext from "./UserContext";
import { useContext, useState } from "react";
import JoblyApi from "../api";
import { useEffect } from "react";

const ProfileUpdateForm = ({INITIAL_FORM_DATA}) => {
  const { username } = useParams();
  const { currentUser, token } = useContext(UserContext);

  // user can update their firstname, lastname, and email. Password is required to make changes


  // const INITIAL_FORM_DATA = {
  //   username: currentUser.username,
  //   firstName: currentUser.firstName,
  //   lastName: currentUser.lastName,
  //   email: currentUser.email,
  // };

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  return (
    <>
      <h3>Make changes to your profile below</h3>

      <form className="flex flex-col">
        <input
          disabled
          className="m-3 p-4 rounded-md"
          name="username"
          id="username"
          type="text"
          onChange={handleChange}
          value={formData.username}
        />
        <input
          className="m-3 p-4 rounded-md"
          name="firstName"
          id="firstName"
          type="text"
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
          className="m-3 p-4 rounded-md"
          name="lastName"
          id="lastName"
          type="text"
          onChange={handleChange}
          value={formData.lastName}
        />
        <input
          className="m-3 p-4 rounded-md"
          name="email"
          id="email"
          type="email"
          placeholder="email"
          onChange={handleChange}
          value={formData.email}
        />
        <button className="m-3 p-2">Update</button>
      </form>
    </>
  );
};

export default ProfileUpdateForm;
