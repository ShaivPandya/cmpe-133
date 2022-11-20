import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './ApplicationInformation.css'
import Navigation from '../../Navigation/Navigation';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ApplicationInformation() {
    const {idApplication} = useParams();

    const [app, setApp] = useState({});
    const [show, setShow] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const res = await axios.get(`http://localhost:8800/viewApplication/${idApplication}`);
            setApp(res.data[0]);
            if (res.data[0].status == "Accepted") {
                setShow(false);
            }
            
            if (res.data[0].status == "Not yet viewed") {
                const update = {
                    status: "Under review",
                    idApplication: idApplication
                }
                const result = await axios.put("http://localhost:8800/updateApplication", update);
            }
          } catch (err) {
            console.log(err);
          }
        };
        fetchUser();
    }, []);

    const updateStatus = async (status) => {
        const update = {
            status: status,
            idApplication: idApplication
        }
        const res = await axios.put("http://localhost:8800/updateApplication", update);
    }

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
                                {show ? (
                                    <>
                                        <button type="submit" className="btn btn-primary" onClick={() => {updateStatus("Interview")}}>Offer Interview</button>
                                        <button type="submit" className="btn btn-success" onClick={() => {updateStatus("Offer")}}>Offer Job</button>
                                    </>
                                ) : (
                                    <>{console.log(show)}</>
                                )}
                                <button type="submit" className="btn btn-danger" onClick={() => {updateStatus("Rejected")}}>Reject Application</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default ApplicationInformation;