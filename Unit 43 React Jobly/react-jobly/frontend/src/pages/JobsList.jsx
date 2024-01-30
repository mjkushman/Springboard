import JobCard from "../components/JobCard";
import { useEffect, useState } from "react";
import JoblyApi from "../../api";
import { useContext } from "react";
import UserContext from "../context/UserContext";



const JobsList = () => {
  const {currentUser} = useContext(UserContext)

  const [jobsList, setJobsList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  
  useEffect(() => {
    async function getJobs() {
      try {
        const res = await JoblyApi.getAllJobs();
        setJobsList(res)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setError(error)
      }
    }
    getJobs()
  },[currentUser.applications])
  
  
  return (
    <>
      <div className="m-3">
        <h1 className="text-5xl">Jobs</h1>
      </div>
      
      {error && <div>Something messed up: {error}</div>}
      {isLoading && <div>One moment please...</div>}
      {!isLoading && !error && (
      
      <div>
        {jobsList.map( ({id, title, salary, equity, companyName})  => (
          <JobCard 
            key={id} 
            id={id}
            title={title} 
            salary={salary} 
            equity={equity} 
            companyName={companyName}/>
        ))}
      </div>)}
      
      
      

    </>
  );
};

export default JobsList;
