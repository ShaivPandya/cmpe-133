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
        <div className="col-md-4">
            <div className="card p-3 mb-2 border-success">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div className="ms-2 c-details">
                        <button type="submit" className="btn btn-success" onClick={handleSubmit}>Edit Job Posting</button>
                        </div>
                    </div>
                    <div className="btn btn-danger" onClick={del}> <span>Delete</span> </div>
                </div>
                <div className="mt-5">
                    <h3 className="heading">{job.jobTitle}</h3>
                    <div className="mt-5">
                        <div className="mt-3"> <span className="text1">{job.positions} positions available</span> </div>
                        <div className="mt-3"> <span className="text1">{job.location}</span> </div>
                        <br></br>
                        <button type="submit" className="btn btn-success" onClick={onSubmit}>View Applications</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobPostingCard;