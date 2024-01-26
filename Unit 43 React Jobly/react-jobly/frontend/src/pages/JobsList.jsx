import JobCard from "../JobCard";
import { useEffect, useState } from "react";
import JoblyApi from "../../api";
import {Navigate} from 'react-router-dom'
import CheckForUser from "../CheckForUser";

const JobsList = () => {
  

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
  },[])
  
  
  return (
    <>
      <div className="m-3">
        <h1 className="text-5xl">Jobs</h1>
      </div>
      
      {error && <div>Something messed up: {error}</div>}
      {isLoading && <div>One moment please...</div>}
      {!isLoading && !error && (
      
      <div>
        {jobsList.map( ({id, title, salary, equity, companyHandle, companyName})  => (
          <JobCard 
            key={id} 
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
