import "./styles.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    password: "",
    phone: "",
    dob: ""
  });

  const handleChange = (e) => {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  const onSubmit = () => {
    const signUp = async() => {
      try {
          const res = await axios.post("http://localhost:8800/signUp", newUser)
          routeChange();
      } catch (err) {
          console.log(err);
      }
    }
    signUp();
  };

  return (
    <div>
      <div className="signin">
        <div className="title">Sign Up</div>
        <div className="inputs">
          <div>
            <input
              type="text"
              onChange={handleChange}
              id="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div>
            <input
              type="text"
              onChange={handleChange}
              id="name"
              name="name"
              placeholder="Full Name"
            />
          </div>
          <div>
            <input
              type="password"
              onChange={handleChange}
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div>
            <input
              type="text"
              onChange={handleChange}
              id="phone"
              name="phone"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <input
              type="text"
              onChange={handleChange}
              id="dob"
              name="dob"
              placeholder="Date of Birth (MM/DD/YYYY)"
            />
          </div>
        </div>
        <label for="resume">Choose resume pdf file to upload</label>
        <div>
          <input
            type="file"
            // onChange={handleChange}
            id="resume"
            name="resume"
          />
        </div>
        <div>
          <button
            onClick={onSubmit}
            className="button button-elevated"
            type="button">
            Sign Up
          </button>
        </div>
        <div className="login">
          <Link to="/" id="login">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
