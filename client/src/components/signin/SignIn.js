import "./styles.css";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

export default function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/view-account`;
    navigate(path);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(user.password)
      const res = await axios.put("http://localhost:8800/signIn", user);
      console.log(res.data.length);
      // if res.data.length == 1:
      // navigate to the view-account page with the params
      if (res.data.length == 1 && user.email != "") {
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
        <div className="title">Sign In</div>
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
            <p id="message">Your email address or password is incorrect.</p>
          </div>
        ) : (
          ""
        )}
        <div className="create">
          <Link to="/sign-up" id="create">
            Create New Account
          </Link>
        </div>
      </div>
    </div>
  );
}
