import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
// import Form from 'react-bootstrap/Form'
import Navigation from './../../Navigation/Navigation'
import "./styles.css";
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';


function EditJobPosting() {
  const {idJobs} = useParams();
  console.log(idJobs);

  const [job, setJob] = useState({
    business: "Google",
    jobTitle: "",
    location: "",
    description: "",
    positions: ""
  });

  const handleChange = (e) => {
    setJob((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(job);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/job-postings`;
    navigate(path);
  };

  const onSubmit = () => {
    const updateJob = async() => {
      try {
        const res = await axios.put(`http://localhost:8800/updateJob/${idJobs}`, job);
        console.log(res.data);
        routeChange();
      } catch (err) {
        console.log(err);
      }
    }
    updateJob();
  };

  return (
    <div>
        <Navigation />
        <Container>
            <div className="row justify-content-md-center">
            <div className="col-sm-6">
              <h1>Edit a Job</h1>
              <hr></hr>
              <div className='mb-3 fo'>
                Job Title
                <br />
                <input
                  type="text"
                  onChange={handleChange}
                  id="jobTitle"
                  name="jobTitle"
                  placeholder="Enter a job title"
                />
              </div>
              <div className='mb-3 fo'>
                  Location
                  <br />
                  <input
                    type="text"
                    onChange={handleChange}
                    id="location"
                    name="location"
                    placeholder="Enter a location or Enter Remote"
                  />
              </div>
              <div className='mb-3 fo'>
                  Positions Available
                  <br />
                  <input
                    type="number"
                    onChange={handleChange}
                    id="positions"
                    name="positions"
                    placeholder="Enter the number of positions available"
                  />
              </div>
              <div className='mb-3 fo'>
                  Descriptions
                  <br />
                  <textarea
                    type="text"
                    onChange={handleChange}
                    id="description"
                    name="description"
                    placeholder="Enter job duties and responsibilities, required qualifications, preffered qualifications, and working conditions."
                  />
              </div>
              <button type="button" onClick={onSubmit} className="btn btn-success ">Post Job</button>
            </div>
          </div>
          <br></br>
          <br></br>
        </Container>
    </div>
  );
}

export default EditJobPosting;