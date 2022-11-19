import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './styles.css'
import Navigation from '../../Navigation/Navigation';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

function SubmittedApp() {
    const {idApplication} = useParams();

    const [app, setApp] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const res = await axios.get(`http://localhost:8800/viewApplication/${idApplication}`);
            setApp(res.data[0]);
          } catch (err) {
            console.log(err);
          }
        };
        fetchUser();
    }, []);

    return (
        <div>
            <Navigation />
            <br></br>
            <div className="row justify-content-center">
            <h1>{app.Name}'s Application</h1>
                <div className="card col-sm-7">
                    <div className="card-body">
                    <table className="table user-view-table m-0">
                        <tbody>
                        <tr>
                            <td>Company:</td>
                            <td>{app.business}</td>
                        </tr>
                        <tr>
                            <td>Job Title:</td>
                            <td>{app.jobTitle}</td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td>{app.Name}</td>
                        </tr>
                        <tr>
                            <td>E-mail:</td>
                            <td>{app.email}</td>
                        </tr>
                        <tr>
                            <td>Date of birth:</td>
                            <td>{app.DOB}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>{app.Phone}</td>
                        </tr>
                        <tr>
                            <td>Application PDF:</td>
                        </tr>
                        </tbody>
                    </table>
                        <iframe src="https://thescriptlab.com/wp-content/uploads/scripts/Better-Call-Saul-S04E10-Winner.pdf" title="FileName"/>
                    </div>
                        <div className="row">
                            <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="submit" className="btn btn-primary">Offer Interview</button>
                            <button type="submit" className="btn btn-success">Offer Job</button>
                            <button type="submit" className="btn btn-danger">Reject Application</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default SubmittedApp;