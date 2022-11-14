import "./styles.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  const onSubmit = () => {
    routeChange();
  };

  return (
    <div>
      <div class="signin">
        <div class="title">Sign Up</div>
        <div class="inputs">
          <div>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              id="confirmpassword"
              name="confirmpassword"
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              name="phone"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <input
              type="text"
              onChange={(e) => setDob(e.target.value)}
              id="dob"
              name="dob"
              placeholder="Date of Birth (MM/DD/YYYY)"
            />
          </div>
        </div>
        <div>
          <button
            onClick={onSubmit}
            class="button button-elevated"
            type="button">
            Sign Up
          </button>
        </div>
        <div class="login">
          <Link to="/" id="login">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
