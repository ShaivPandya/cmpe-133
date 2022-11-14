import bootstrapBundle from "bootstrap/dist/js/bootstrap.bundle"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import ApplicantNav from "../../Navigation/ApplicantNav";

export default function JobPosting() {
    const {idJobs} = useParams();

    const [jobTitle, setJobTitle] = useState("");
    const [business, setBusiness] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    
    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/jobs/${idJobs}`);
                setJobTitle(res.data[0].jobTitle);
                setBusiness(res.data[0].business);
                setLocation(res.data[0].location);
                setDescription(res.data[0].description);
                console.log(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        };
        fetchJob();
    }, []);

    return(
        <div>
            <ApplicantNav />
            <h2>{jobTitle}</h2>
            <h4>{business}</h4>
            <h6>{location}</h6>
            <br />
            <h6>Job Description</h6>
            <h6>{description}</h6>
        </div>
    )
}