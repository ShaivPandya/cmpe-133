import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Navigation from './../../Navigation/Navigation'

function CreateJobPosting() {
  return (
    <div>
        <Navigation />
        <Container>
            <div class="row justify-content-md-center">
            <div class="col-sm-6">
            <h1>Post a Job</h1>
            <hr></hr>
            <Form.Group className="mb-3" controlId="formJobTitle">
                <Form.Label>Job Title</Form.Label>
                <Form.Control type="jobTitle" placeholder="Enter a job title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control type="location" placeholder="Enter a location or Enter Remote" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formJobDescription">
                <Form.Label>Job Description</Form.Label>
                <Form.Control as="textArea" rows = {5} type="jobDescription" placeholder="Enter job duties and responsibilities, required qualifications, preffered qualifications, and working conditions." />
            </Form.Group>
            <form>
                <button type="submit" class="btn btn-success ">Post Job</button>
            </form>
            </div>
            </div>
            <br></br>
            <br></br>
        </Container>
    </div>
  );
}

export default CreateJobPosting;