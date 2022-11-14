import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation, createContext, useState } from 'react-router-dom';

function OpeningCard({parentToChild}) {
    const job = parentToChild;

    let navigate = useNavigate();
    const routeChange = () => {
        navigate(`/view-role/` + job.idJobs, {idJobs: job.idJobs});
    };

    const onSubmit = async () => {
        routeChange();
    };

    return(
        <div class="col-md-4">
            <div class="card p-3 mb-2 border-success">
                <div class="mt-5">
                    <h3 class="heading">{job.jobTitle}</h3>
                    <div class="mt-5">
                        <div class="mt-3"> <span class="text1">{job.business}</span> </div>
                        <div class="mt-3"> <span class="text1">{job.location}</span> </div>
                        <br></br>
                        <button type="submit" class="btn btn-success" onClick={onSubmit}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpeningCard;