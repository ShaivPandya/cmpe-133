import "./styles.css"
import { useState, useEffect } from "react";
import axios from "axios";
import ApplicantNav from "../../Navigation/ApplicantNav";
import SubmittedAppRow from "./SubmittedAppRow";

function ViewSubmittedApps() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchAllApps = async() => {
            try {
                const res = await axios.put("http://localhost:8800/submittedApplications", {email: "jasonsmith@gmail.com"})
                setApplications(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllApps();
    }, [])

    return(
        <div>
            <ApplicantNav />
            <h1>View submitted Applications</h1>
            <table className="center table table-hover table-bordered table-md" cellSpacing="0">
                <thead>
                    <tr className="bg-success text-light">
                        <td>Company</td>
                        <td>Position</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((app) => (
                        <SubmittedAppRow parentToChild={app}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ViewSubmittedApps