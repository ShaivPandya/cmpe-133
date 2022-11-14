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
                <div class="details">
                  <h2>{name}</h2>
                  <h4>Email: {email}</h4>
                  <h4>Phone: {phone}</h4>
                  <h4>Date of Birth: {dob}</h4>
                  <button className="deleteBtn" onClick={onSubmit}>Delete Account</button>
                </div>
            </div> 
        </div>
    )
}
export default ViewAccount