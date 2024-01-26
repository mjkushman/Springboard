import ApplyButton from "./ApplyButton";
import JoblyApi from "../api";
import UserContext from "./UserContext";
import { useContext, useState } from "react";

const JobCard = ({ title, salary, equity, id, companyName }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  
  
  const {applications} = currentUser
  
  // For each job, evaluate if user has applied or not. Result is passed to the Apply button element.

  const [hasApplied, setHasApplied] = useState(() => {
    return Boolean((applications.filter(app=> app==id)).length)
  })
  

  // Use api to apply based on username and job id.
  // Upon success, set state of hasApplied to true
  const applyToJob = async () => {
    try {
      // console.log('username',currentUser.username,'id',id)
      await JoblyApi.applyToJob(currentUser.username, id);
      // console.log("applied res:", res);
      console.log('you applied to job',id, title)
      setHasApplied(true)
    } catch (error) {
      console.log("error applying:", error);
    }
  };


  // console.log(hasApplied)


  return (
    <>
      <div className="bg-slate-500 m-7 p-5 rounded-lg">
        <h3 className="text-2xl">{title}</h3>
        <h4>{companyName}</h4>
        <h3>
          ${salary || 0} salary & {(equity * 100).toFixed(2)}% equity
        </h3>
        <div>
          <ApplyButton jobId={id} applyToJob={applyToJob} hasApplied={hasApplied}/>
        </div>
      </div>
    </>
  );
};

export default JobCard;
