import './JobPostingsList.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from '../../Navigation/Navigation';
import JobPostingCard from '../JobPostingCard/JobPostingCard';

function JobPostingsList() {
  return (
    <div className="App">
        <Navigation />
        <br></br>
        <h1> All Job Postings</h1>
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