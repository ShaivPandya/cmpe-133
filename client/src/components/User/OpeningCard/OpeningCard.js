import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

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
        <div className="col-md-4">
            <div className="card p-3 mb-2 border-success">
                <div className="mt-5">
                    <h3 className="heading">{job.jobTitle}</h3>
                    <div className="mt-5">
                        <div className="mt-3"> <span className="text1">{job.business}</span> </div>
                        <div className="mt-3"> <span className="text1">{job.location}</span> </div>
                        <br></br>
                        <button type="submit" className="btn btn-success" onClick={onSubmit}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpeningCard;