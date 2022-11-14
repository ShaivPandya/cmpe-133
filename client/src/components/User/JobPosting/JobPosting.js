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
            <div class="row justify-content-center">
                <h1>Job Information</h1>
                <div class="card col-sm-7">
                    <div class="card-body">
                    <table class="table user-view-table m-0">
                        <tbody>
                        <tr>
                            <td>Job Title:</td>
                            <td>{jobTitle}</td>
                        </tr>
                        <tr>
                            <td>Business:</td>
                            <td>{business}</td>
                        </tr>
                        <tr>
                            <td>Location:</td>
                            <td>{location}</td>
                        </tr>
                        </tbody>
                    </table>
                    <table class="table user-view-table m-0">
                        <tbody>
                        <tr>
                            <td>Job Description: {description}</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                        <div class="row">
                            <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="submit" class="btn btn-primary ">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}