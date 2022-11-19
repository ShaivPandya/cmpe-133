import "./styles.css"
import React,{ useState,useEffect } from 'react'
import axios from "axios";
import ApplicantNav from "../../Navigation/ApplicantNav";
import OpeningCard from "../OpeningCard/OpeningCard";

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

    // console.log(jobList);

    return(
        <div>
            <ApplicantNav />
            <h1>View Job Openings</h1>
            <div className="container mt-5 mb-3">
                <div className="row">
                    {jobList.map((job) => (
                        <OpeningCard parentToChild={job}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ViewOpenings