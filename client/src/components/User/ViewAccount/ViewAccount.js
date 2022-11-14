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
          console.log(res);
          routeChange();
        } catch (err) {
          console.log(err);
        }
      };
    
    return (
        <div>
            <div className="row">
                <ApplicantNav />
                <h1>{name}</h1>
                <h2>Email: {email}</h2>
                <h2>Phone: {phone}</h2>
                <h2>Date of Birth: {dob}</h2>
                <button className="deleteBtn" onClick={onSubmit}>Delete Account</button>
            </div> 
        </div>
    )
}
export default ViewAccount