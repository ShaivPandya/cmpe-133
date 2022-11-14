import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
// import Form from 'react-bootstrap/Form'
import Navigation from './../../Navigation/Navigation'
import "./styles.css";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


function CreateJobPosting() {
  const [newJob, setNewJob] = useState({
    business: "Google",
    jobTitle: "",
    location: "",
    description: "",
    positions: ""
  });

  const handleChange = (e) => {
    setNewJob((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(newJob);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/job-postings`;
    navigate(path);
  };

  const onSubmit = () => {
    const createNewJob = async() => {
      try {
        const res = await axios.post("http://localhost:8800/createJob", newJob)
        console.log(res.data);
        routeChange();
      } catch (err) {
        console.log(err);
      }
    }
    createNewJob();
  };

  return (
    <div>
        <Navigation />
        <Container>
            <div className="row justify-content-md-center">
            <div className="col-sm-6">
              <h1>Post a Job</h1>
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
              {/* <Form.Group className="mb-3" controlId="formJobTitle">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control type="jobTitle" onChange={handleChange} placeholder="Enter a job title" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="location" onChange={handleChange} placeholder="Enter a location or Enter Remote" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPositions">
                  <Form.Label>Positions available</Form.Label>
                  <Form.Control type="location" onChange={handleChange} placeholder="Enter the number of positions available" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formJobDescription">
                <Form.Label>Job Description</Form.Label>
                <Form.Control as="textArea" rows = {5} type="jobDescription" onChange={handleChange} placeholder="Enter job duties and responsibilities, required qualifications, preffered qualifications, and working conditions." />
              </Form.Group> */}
              <button type="button" onClick={onSubmit} className="btn btn-success ">Post Job</button>
            </div>
          </div>
          <br></br>
          <br></br>
        </Container>
    </div>
  );
}

export default CreateJobPosting;