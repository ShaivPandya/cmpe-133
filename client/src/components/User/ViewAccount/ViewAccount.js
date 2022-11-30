import "./styles.css"
import ApplicantNav from "../../Navigation/ApplicantNav";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function ViewAccount() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    
    let navigate = useNavigate();
    const routeChange = () => {
      let path = `/`;
      navigate(path);
    };

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const res = await axios.get("http://localhost:8800/users/jasonsmith@gmail.com");
            setName(res.data[0].name);
            setEmail(res.data[0].email);
            setPhone(res.data[0].phone);
            setDob(res.data[0].dob);
          } catch (err) {
            console.log(err);
          }
        };
        fetchUser();
      }, []);
    
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.delete("http://localhost:8800/users/" + email);
          routeChange();
        } catch (err) {
          console.log(err);
        }
      };
    
    return (
        <div>
            <div className="row justify-content-center">
                <ApplicantNav />
                <h1> User Profile</h1>
                <div className="card col-sm-7">
                    <div className="card-body">
                        <table className="table user-view-table m-0">
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>{name}</td>
                                </tr>
                                <tr>
                                    <td>E-mail:</td>
                                    <td>{email}</td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td>{phone}</td>
                                </tr>
                                <tr>
                                    <td>Date of birth:</td>
                                    <td>{dob}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                        <button className="btn btn-danger" onClick={onSubmit}>Delete Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewAccount