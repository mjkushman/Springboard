import { useParams } from "react-router-dom";
import UserContext from "../UserContext";
import { useContext, useState } from "react";
import JoblyApi from "../../api";
import { useEffect } from "react";
import ProfileUpdateForm from "../ProfileUpdateForm";

const Profile = () => {
  const { username } = useParams();
  const { currentUser, setCurrentUser,token } = useContext(UserContext);

  // user can update their firstname, lastname, and email. Password is required to make changes



    // async fuction to get information from this user
    useEffect( () => {
        async function getUser() {
            try {

                let res = await JoblyApi.getProfile(username);
                console.log("its res", res);
    
            } catch (error) {
                console.log(error);
            }}
        getUser()

    },[username])

  const INITIAL_FORM_DATA = {
    username: currentUser.username,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
  };

  

  return (
    <>
      <h1>Hello {currentUser.firstName}</h1>
        <ProfileUpdateForm INITIAL_FORM_DATA={INITIAL_FORM_DATA}/>
    </>
  );
};

export default Profile;
