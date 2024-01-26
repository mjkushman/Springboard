import { useParams } from "react-router-dom";
import UserContext from "../UserContext";
import { useContext, useState, useEffect } from "react";
import JoblyApi from "../../api";

import ProfileUpdateForm from "../ProfileUpdateForm";

const Profile = () => {
  const { username } = useParams();
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log("currentUser from context:", currentUser);

  // user can update their firstname, lastname, and email.

  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [initialFormData, setInitialFormData] = useState({ ...currentUser });

  // async fuction to set initial form data based on user
  useEffect(() => {
    console.log("setting initialform data", currentUser);
    setInitialFormData(() => currentUser);
    // setFormIsSubmitted(false);
    setIsLoading(false);
  }, [currentUser]);

  const updateProfile = async (formData) => {
    try {
      let res = await JoblyApi.updateProfile(username, formData);
      // console.log("profile update res", res);
      setIsLoading(true);
      setCurrentUser((user) => (user = res));

    } catch (error) {
      console.log("error updating profile:", error);
    }
  };

  const userJobs = currentUser.jobs;
  // console.log('user jobs',currentUser)

  return (
    <>
      {true && (
        <div>
          <h1>Hello {currentUser.firstName}</h1>
          <div className="m-4 p-2">
          </div>
          {!isLoading && currentUser && (
            <ProfileUpdateForm
              INITIAL_FORM_DATA={initialFormData}
              updateProfile={updateProfile}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Profile;
