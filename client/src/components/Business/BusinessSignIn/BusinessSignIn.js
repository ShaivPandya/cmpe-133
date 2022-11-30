import "./styles.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function BusinessSignIn() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/job-postings`;
    navigate(path);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("http://localhost:8800/businessSignIn", user);
      // if res.data.length == 1:
      // navigate to the view-account page with the params
      if (res.data.length == 1 && user.name != "") {
        setShow(false);
        routeChange();
      } else {
        setShow(true);
      }
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div>
      <div className="signin">
        <div className="title">Business Sign In</div>
        <div className="inputs">
          <div>
            <input
              type="text"
              onChange={handleChange}
              id="name"
              name="name"
              placeholder="Name"
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
        </div>
        <div>
          <button
            onClick={onSubmit}
            className="button button-elevated"
            type="button">
            Sign In
          </button>
        </div>
        {show ? (
          <div className="login-fail">
            <p id="message">Invalid Credentials.</p>
          </div>
        ) : (
          ""
        )}
        <div className="create">
          <Link to="/" id="create">
            Officium for Applicants
          </Link>
        </div>
      </div>
    </div>
  );
}
