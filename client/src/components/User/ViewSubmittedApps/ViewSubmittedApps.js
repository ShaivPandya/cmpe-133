import { useState, useEffect } from "react";
import axios from "axios";
import ApplicantNav from "../../Navigation/ApplicantNav";

function ViewSubmittedApps() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchAllApps = async() => {
            try {
                const res = await axios.put("http://localhost:8800/submittedApplications", {email: "johndoe@gmail.com"})
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
            <div className="jobs">
                {applications.map((app) => (
                    <div>
                        <div class="col-md-4">
                            <div class="card p-3 mb-2 border-success">
                                <div class="mt-5">
                                    <h3 class="heading">{app.idJobs} Software Engineer</h3>
                                    <div class="mt-5">
                                        <div class="mt-3"> <span class="text1">Company Name</span> </div>
                                        <div class="mt-3"> <span class="text1">John Doe</span> </div>
                                        <div class="mt-3"> <span class="text1">{app.email}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ViewSubmittedApps