import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Navigation from '../../Navigation/Navigation';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import TableRow from './TableRow';

function ApplicationsList() {
  const {idJobs} = useParams();
  console.log(idJobs);

  const [appList, setApplList] = useState([]);
  const [jobTitle, setJobTitle] = useState("");

  useEffect(() => {
    const fetchAllJobs = async() => {
        try {
            const res = await axios.get(`http://localhost:8800/viewApplications/${idJobs}`)
            setApplList(res.data);
            const result = await axios.get(`http://localhost:8800/jobs/${idJobs}`)
            setJobTitle(result.data[0].jobTitle);
        } catch (err) {
            console.log(err);
        }
    }
    fetchAllJobs();
  }, [])

  return (
    <div>
    <Navigation />
      <br></br>
      <h1> Applications for {jobTitle}</h1>
      <div className="row justify-content-center">
            <div className="col-sm-7">
            <table className="table table-hover table-bordered table-md " cellspacing="0" width="100%">
            <thead>
                <tr className="bg-success text-light">
                <th>Full name</th>
                <th>Phone number</th>
                <th>E-mail</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
              {console.log(appList)}
                {appList.map((app) => (
                  <tr>
                    <TableRow parentToChild={app} />
                  </tr> 
                ))}
            </tbody>
            </table>
            </div>
        </div>
  </div>
  );
}

export default ApplicationsList;