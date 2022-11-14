import "./styles.css"
import React,{ useState,useEffect } from 'react'
import axios from "axios";
import ApplicantNav from "../../Navigation/ApplicantNav";

function ViewOpenings() {
    const [jobList, setJobList] = useState([]);
    
    useEffect(() => {
        const fetchAllJobs = async() => {
            try {
                const res = await axios.get("http://localhost:8800/jobs")
                setJobList(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllJobs();
    }, [])

    console.log(jobList);

    return(
        <div>
            <ApplicantNav />
            <h1>View Job Openings</h1>
            <div className="jobs">
                {jobList.map((job) => (
                    <div key={job.idJobs} className="book">
                        <h2>{job.jobTitle}</h2>
                        <p>{job.location}</p>
                        <p>{job.description}</p>
                        <button>Submit</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ViewOpenings