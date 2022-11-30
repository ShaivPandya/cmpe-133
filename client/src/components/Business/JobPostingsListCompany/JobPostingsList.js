import './JobPostingsList.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from '../../Navigation/Navigation';
import JobPostingCard from '../JobPostingCard/JobPostingCard';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function JobPostingsList() {
  const [jobList, setJobList] = useState([]);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/create-job`;
    navigate(path);
  };

  useEffect(() => {
    const fetchAllJobs = async() => {
        try {
            const res = await axios.put("http://localhost:8800/createdJobs", {business: "Google"})
            setJobList(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    fetchAllJobs();
  }, [])

  const onSubmit = async () => {
    routeChange();
  };

  return (
    <div className="App">
        <Navigation />
        <br></br>
        <h1> All Job Postings</h1>
        <br></br>
        <button type="button" className="btn btn-primary" onClick={onSubmit}>Create Job Posting</button>
        <div className="container mt-5 mb-3">
            <div className="row">
                {jobList.map((job) => (
                    <JobPostingCard parentToChild={job} />
                ))}
            </div>
        </div>
    </div>
  );
}

export default JobPostingsList;