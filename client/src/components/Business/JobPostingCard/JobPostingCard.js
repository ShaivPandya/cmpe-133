import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function JobPostingCard({parentToChild}) {
    const job = parentToChild;

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/view-applications/` + job.idJobs;
        navigate(path);
    };

    const onSubmit = async () => {
        routeChange();
    };

    const handleSubmit = async () => {
        navigate(`/edit-job/` + job.idJobs, {idJobs: job.idJobs});
    }

    const del = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.delete(`http://localhost:8800/jobs/${job.idJobs}`);
          window.location.reload(false);
        } catch (err) {
          console.log(err);
        }
    }

    return(
        <div class="col-md-4">
            <div class="card p-3 mb-2 border-success">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="ms-2 c-details">
                        <button type="submit" class="btn btn-success" onClick={handleSubmit}>Edit Job Posting</button>
                        </div>
                    </div>
                    <div class="btn btn-danger" onClick={del}> <span>Delete</span> </div>
                </div>
                <div class="mt-5">
                    <h3 class="heading">{job.jobTitle}</h3>
                    <div class="mt-5">
                        <div class="mt-3"> <span class="text1">{job.positions} positions available</span> </div>
                        <div class="mt-3"> <span class="text1">{job.location}</span> </div>
                        <br></br>
                        <button type="submit" class="btn btn-success" onClick={onSubmit}>View Applications</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobPostingCard;