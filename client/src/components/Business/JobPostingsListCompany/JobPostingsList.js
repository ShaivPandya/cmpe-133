import './JobPostingsList.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from '../../Navigation/Navigation';
import JobPostingCard from '../JobPostingCard/JobPostingCard';
import { useNavigate } from 'react-router-dom';

function JobPostingsList() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/create-job`;
    navigate(path);
  };

  const onSubmit = async () => {
    routeChange();
  };

  return (
    <div className="App">
        <Navigation />
        <br></br>
        <h1> All Job Postings</h1>
        <br></br>
        <button type="button" class="btn btn-primary" onClick={onSubmit}>Create Job Posting</button>
        <div class="container mt-5 mb-3">
            <div class="row">
                <JobPostingCard />
                <JobPostingCard />
                <JobPostingCard />
                <JobPostingCard />
                <JobPostingCard />
            </div>
        </div>
    </div>
  );
}

export default JobPostingsList;