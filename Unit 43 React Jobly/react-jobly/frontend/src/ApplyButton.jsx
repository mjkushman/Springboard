import JoblyApi from '../api'
import {useState, useContext} from 'react'

const ApplyButton = ({applyToJob, hasApplied}) => {
// if a user has not applied, return button A
// If a user has already applied, return button B
// button needs to know the job and user. Needs to know 


const handleSubmit= () => {
// this will run applyToJob
    applyToJob()
}
// 
return (
    <>
    <button onClick={handleSubmit} disabled={hasApplied}>{hasApplied? "Applied" : "Apply Now"}</button>
    </>
)
}

export default ApplyButton